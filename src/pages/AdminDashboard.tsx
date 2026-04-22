import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Check, X, Edit2, Trash2, Shield, User as UserIcon, Clock } from 'lucide-react';

interface UserProfile {
  username: string;
  full_name: string;
  email: string;
  is_admin: boolean;
  is_restricted: boolean;
  is_approved: boolean;
  bio: string;
}

const AdminDashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'users' | 'pending'>('users');
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('users').select('*').order('username');
    if (error) console.error('Error fetching profiles:', error);
    else setProfiles(data || []);
    setLoading(false);
  };

  const handleApprove = async (username: string) => {
    const { error } = await supabase
      .from('users')
      .update({ is_approved: true })
      .eq('username', username);
    
    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'User approved!' });
      fetchProfiles();
    }
  };

  const handleReject = async (username: string) => {
    const { error } = await supabase.from('users').delete().eq('username', username);
    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'Request rejected' });
      fetchProfiles();
    }
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    const { error } = await supabase
      .from('users')
      .update({
        full_name: editingUser.full_name,
        bio: editingUser.bio,
        is_admin: editingUser.is_admin,
        is_restricted: editingUser.is_restricted,
        is_approved: editingUser.is_approved
      })
      .eq('username', editingUser.username);

    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'User updated successfully' });
      setEditingUser(null);
      fetchProfiles();
    }
  };

  const users = profiles.filter(p => p.is_approved);
  const pending = profiles.filter(p => !p.is_approved);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 pt-24 font-inter">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">MASTER CONTROL</h1>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold">Iztech Racing System Administration</p>
          </div>
          
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button 
              onClick={() => setActiveTab('users')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'users' ? 'bg-[#9a0e20] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
            >
              Approved Users ({users.length})
            </button>
            <button 
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'pending' ? 'bg-[#9a0e20] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
            >
              Requests {pending.length > 0 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
              ({pending.length})
            </button>
          </div>
        </header>

        {message && (
          <div className={`mb-8 p-4 rounded-xl border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'} flex items-center justify-between`}>
            <span className="font-bold">{message.text}</span>
            <button onClick={() => setMessage(null)}><X className="w-4 h-4" /></button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-[#9a0e20] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800">
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-zinc-500">Member</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-zinc-500">Role & Status</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-zinc-500">Contact</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-zinc-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {(activeTab === 'users' ? users : pending).map((profile) => (
                  <tr key={profile.username} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                          <UserIcon className="w-5 h-5 text-zinc-400" />
                        </div>
                        <div>
                          <p className="font-bold text-white uppercase tracking-tight">{profile.full_name}</p>
                          <p className="text-zinc-500 text-xs tracking-wider">@{profile.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {profile.is_admin ? (
                          <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 border border-purple-500/20">
                            <Shield className="w-3 h-3" /> Admin
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-700">User</span>
                        )}
                        {profile.is_restricted && (
                          <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/20">Restricted</span>
                        )}
                        {!profile.is_approved && (
                          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Pending
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-6 text-zinc-400 text-sm font-medium">{profile.email || '—'}</td>
                    <td className="p-6 text-right">
                      {activeTab === 'pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleApprove(profile.username)}
                            className="p-2 bg-green-500/10 text-green-500 rounded-lg border border-green-500/20 hover:bg-green-500 hover:text-white transition-all shadow-lg shadow-green-500/10"
                            title="Approve Member"
                          >
                            <Check className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleReject(profile.username)}
                            className="p-2 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/10"
                            title="Reject & Delete"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setEditingUser(profile)}
                            className="p-2 bg-blue-500/10 text-blue-500 rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all"
                            title="Edit Profile"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          {profile.username !== 'ArdaOnuk' && (
                            <button 
                              onClick={() => handleReject(profile.username)}
                              className="p-2 bg-zinc-800 text-zinc-500 rounded-lg border border-zinc-700 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                              title="Delete User"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {((activeTab === 'users' ? users : pending)).length === 0 && (
              <div className="p-20 text-center text-zinc-600 font-bold tracking-widest uppercase">
                Zero records found.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tighter">EDITING: @{editingUser.username}</h2>
              <button onClick={() => setEditingUser(null)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors"><X /></button>
            </div>

            <form onSubmit={handleUpdateUser} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={editingUser.full_name}
                    onChange={e => setEditingUser({...editingUser, full_name: e.target.value})}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#9a0e20] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Permissions</label>
                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setEditingUser({...editingUser, is_admin: !editingUser.is_admin})}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-tighter border transition-all ${editingUser.is_admin ? 'bg-purple-500/10 border-purple-500/50 text-purple-500' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}
                    >
                      Admin Access
                    </button>
                    <button 
                      type="button"
                      onClick={() => setEditingUser({...editingUser, is_restricted: !editingUser.is_restricted})}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-tighter border transition-all ${editingUser.is_restricted ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}
                    >
                      Restricted
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Member Bio</label>
                <textarea 
                  value={editingUser.bio || ''}
                  onChange={e => setEditingUser({...editingUser, bio: e.target.value})}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#9a0e20] outline-none transition-all resize-none"
                  placeholder="Tell us about this member..."
                />
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button 
                  type="submit"
                  className="flex-1 bg-[#9a0e20] hover:bg-[#7a0b1a] text-white font-black uppercase tracking-widest p-4 rounded-xl shadow-xl shadow-[#9a0e20]/20 transition-all transform hover:scale-[1.02] active:scale-95"
                >
                  Apply Master Changes
                </button>
                <button 
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-black uppercase tracking-widest p-4 rounded-xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
