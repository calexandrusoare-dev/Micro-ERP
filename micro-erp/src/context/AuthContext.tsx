import React, { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

interface AuthContextType {
  user: any | null;
  company: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [company, setCompany] = useState<any | null>(null);

  useEffect(() => {
    if (!supabase) return;
    let mounted = true;
    // read current session/user
    (async () => {
      try {
        const client = supabase as any;
        const { data: { user: u } = {} as any } = await client.auth.getUser();
        if (u && mounted) {
          // fetch profile role
          let profile: any = null;
          try {
            const res = await client.from('profiles').select('role').eq('id', u.id).single();
            profile = res.data;
          } catch (e) {
            profile = null;
          }
          setUser({ ...u, role: profile?.role || 'operator' });
          setCompany({ id: 'c1', name: 'Prestige Network SRL' });
        }
      } catch (e) {
        // ignore
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_, session) => {
      const u = session?.user ?? null;
      if (u && mounted) {
        (async () => {
          try {
            const client = supabase as any;
            const res = await client.from('profiles').select('role').eq('id', u.id).single();
            const profile = res?.data ?? null;
            setUser({ ...u, role: profile?.role || 'operator' });
            setCompany({ id: 'c1', name: 'Prestige Network SRL' });
          } catch (e) {
            setUser({ ...u, role: 'operator' });
            setCompany({ id: 'c1', name: 'Prestige Network SRL' });
          }
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

  const login = async (email: string, _password: string) => {
    if (!email) throw new Error('Email required');
    // If supabase client configured, try real sign-in (email OTP or passwordless assumed for demo)
    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password: _password });
        if (error) throw error;
        const u = data.user;
        // try to fetch profile role from 'profiles' table
        let role = 'operator';
        let profileData: any = null;
        try {
          const res = await (supabase as any).from('profiles').select('role').eq('id', u!.id).single();
          profileData = res?.data ?? null;
        } catch (e) {
          profileData = null;
        }
        if (profileData) role = profileData.role || role;
        setUser({ ...u, role });
        setCompany({ id: 'c1', name: 'Prestige Network SRL' });
        return;
      } catch (err) {
        // fallback to mock if supabase fails
        console.warn('Supabase login failed, falling back to mock', err);
      }
    }

    const mockUser = { id: 'u1', email, name: email.split('@')[0], role: 'admin' };
    const mockCompany = { id: 'c1', name: 'Prestige Network SRL' };
    setUser(mockUser);
    setCompany(mockCompany);
    return Promise.resolve();
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
