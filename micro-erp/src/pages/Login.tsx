import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('admin@demo');
  const [password, setPassword] = useState('admin');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      // keep simple for now
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={submit} className="w-full max-w-md p-8 rounded-2xl border border-red-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950 mb-4">Autentificare</h2>
        <label className="block text-sm text-slate-600">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 mb-4 w-full rounded-md border px-3 py-2" />
        <label className="block text-sm text-slate-600">Parolă</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mt-2 mb-4 w-full rounded-md border px-3 py-2" />
        <div className="flex items-center justify-between">
          <button type="submit" disabled={loading} className="rounded-2xl bg-red-600 text-white px-4 py-2 font-semibold">
            {loading ? 'Se loghează...' : 'Autentifică-te'}
          </button>
          <button type="button" onClick={() => { setEmail('admin@demo'); setPassword('admin'); }} className="text-sm text-slate-500 underline">Demo</button>
        </div>
      </form>
    </div>
  );
}
