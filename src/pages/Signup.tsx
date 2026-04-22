import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, CheckCircle } from 'lucide-react';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Check if username exists
        const { data: existingUser } = await supabase
            .from('users')
            .select('username')
            .eq('username', username)
            .single();

        if (existingUser) {
            setError('Username already taken');
            setLoading(false);
            return;
        }

        // Insert into users table with is_approved = false
        const { error: signUpError } = await supabase
            .from('users')
            .insert([
                {
                    username,
                    full_name: fullName,
                    email,
                    password, // Plain text as requested
                    is_approved: false,
                    is_admin: false,
                    is_restricted: false,
                    updated_at: new Date().toISOString()
                }
            ]);

        if (signUpError) {
            setError(signUpError.message);
        } else {
            setSuccess(true);
        }
        setLoading(false);
    };

    if (success) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-white mb-4">Request Sent!</h2>
                    <p className="text-zinc-400 mb-8">
                        Your account request for <span className="text-white font-semibold">@{username}</span> has been sent. 
                        Please wait for an administrator to approve your account before you can log in.
                    </p>
                    <Link
                        to="/login"
                        className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 pt-24 pb-12">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Request Account</h1>
                    <p className="text-zinc-400 font-turkish">Ekibe katılmak için hesap talebinde bulunun.</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-zinc-400 text-sm mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9a0e20] text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                            placeholder="user123"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-zinc-400 text-sm mb-1">Full Name (Matches Team Page)</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9a0e20] text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                            placeholder="e.g. Hüseyin Poyraz Kocamış"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-zinc-400 text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9a0e20] text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                            placeholder="email@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-zinc-400 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9a0e20] text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#9a0e20] hover:bg-[#7a0b1a] py-3 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_15px_rgba(154,14,32,0.3)]"
                    >
                        {loading ? 'Sending request...' : 'Send Request'}
                    </button>

                    <p className="text-center text-zinc-500 text-sm mt-6">
                        Already have an approved account?{' '}
                        <Link to="/login" className="text-[#9a0e20] hover:underline font-semibold transition-colors">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
