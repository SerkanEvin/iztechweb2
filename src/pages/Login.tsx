import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Hardcoded Admin Bypass
    if (username === 'ArdaOnuk' && password === 'admin123') {
      login({
        username: 'ArdaOnuk',
        full_name: 'Arda Onuk',
        is_admin: true
      });
      navigate('/');
      setLoading(false);
      return;
    }

    // Check custom users table
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error || !user) {
      setError('Invalid username or password');
      setLoading(false);
    } else if (!user.is_approved) {
      setError('Your account is pending admin approval. Please wait.');
      setLoading(false);
    } else {
      login(user); // Use context login
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9a0e20] transition-all"
              placeholder="ArdaOnuk"
              required
            />
          </div>
          
          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9a0e20] transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9a0e20] hover:bg-[#7a0b1a] text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>

          <p className="text-center text-zinc-500 text-sm">
            New team member?{' '}
            <Link to="/signup" className="text-[#9a0e20] hover:underline font-semibold transition-colors">
              Request an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
