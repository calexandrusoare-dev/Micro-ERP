import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SupabaseClient } from '@supabase/supabase-js';
import supabase from '../lib/supabaseClient';

interface UserProfile {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'operator' | 'viewer';
}

interface CompanyProfile {
  id: string;
  name: string;
}

interface AuthContextType {
  user: UserProfile | null;
  company: CompanyProfile | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [company, setCompany] = useState<CompanyProfile | null>(null);

  useEffect(() => {
    const client = supabase;
    if (!client) return;
    let mounted = true;

    const loadSession = async () => {
      try {
        const { data } = await client.auth.getSession();
        const u = data.session?.user ?? null;
        if (u && mounted) {
          const profile = await fetchProfileRole(u.id, client);
          setUser({
            id: u.id,
            email: u.email ?? '',
            name: u.user_metadata?.full_name ?? u.email?.split('@')[0] ?? 'User',
            role: profile,
          });
          setCompany({ id: 'c1', name: 'Prestige Network SRL' });
        }
      } catch (e) {
        console.warn('[AuthContext] could not load session', e);
      }
    };

    loadSession();

    const { data: sub } = client.auth.onAuthStateChange((_, session) => {
      const u = session?.user ?? null;
      if (u && mounted) {
        (async () => {
          const profile = await fetchProfileRole(u.id, client);
          setUser({
            id: u.id,
            email: u.email ?? '',
            name: u.user_metadata?.full_name ?? u.email?.split('@')[0] ?? 'User',
            role: profile,
          });
          setCompany({ id: 'c1', name: 'Prestige Network SRL' });
        })();
      } else if (!u) {
        setUser(null);
        setCompany(null);
      }
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  const fetchProfileRole = async (userId: string, client: SupabaseClient) => {
    try {
      const res = await client.from('profiles').select('role').eq('id', userId).single();
      if (res.error) {
        console.warn('[AuthContext] profile role fetch failed from profiles', res.error);
        const fallback = await fetchUserRoleFallback(userId, client);
        return fallback;
      }
      return (res.data?.role as 'admin' | 'operator' | 'viewer') ?? 'operator';
    } catch (error) {
      console.warn('[AuthContext] profile role query exception', error);
      return await fetchUserRoleFallback(userId, client);
    }
  };

  const fetchUserRoleFallback = async (userId: string, client: SupabaseClient) => {
    try {
      const res = await client.from('user_roles').select('can_edit, can_view, can_delete').eq('id', userId).single();
      if (res.error || !res.data) {
        return 'operator';
      }
      return res.data.can_edit ? 'admin' : res.data.can_view ? 'operator' : 'viewer';
    } catch (error) {
      console.warn('[AuthContext] fallback user_role query exception', error);
      return 'operator';
    }
  };

  const login = async (email: string, _password: string) => {
    if (!email) throw new Error('Email required');

    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password: _password });
        if (error) throw error;
        const u = data.user;
        if (!u) throw new Error('No user returned from Supabase');

        const role = await fetchProfileRole(u.id, supabase);
        setUser({
          id: u.id,
          email: u.email ?? '',
          name: u.user_metadata?.full_name ?? u.email!.split('@')[0] ?? 'User',
          role,
        });
        setCompany({ id: 'c1', name: 'Prestige Network SRL' });
        return;
      } catch (err) {
        console.warn('Supabase login failed, falling back to mock', err);
      }
    }

    const isAdmin = email.includes('admin');
    const mockUser: UserProfile = {
      id: 'u1',
      email,
      name: email.split('@')[0],
      role: isAdmin ? 'admin' : 'operator',
    };
    setUser(mockUser);
    setCompany({ id: 'c1', name: 'Prestige Network SRL' });
  };

  const logout = () => {
    if (supabase) supabase.auth.signOut().catch(() => null);
    setUser(null);
    setCompany(null);
  };

  return (
    <AuthContext.Provider value={{ user, company, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
