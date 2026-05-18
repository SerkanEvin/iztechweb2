import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { 
  FileText as FileIcon, 
  Upload as UploadIcon, 
  Image as ImageIcon, 
  Download as DownloadIcon, 
  Trash2 as TrashIcon
} from 'lucide-react';

interface FileMetadata {
  name: string;
  url: string;
  type: string;
  size: number;
  uploaded_at: string;
}

interface UserProfile {
  username: string;
  full_name: string;
  bio: string;
  email: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
  github?: string;
  files: FileMetadata[];
}

const Profile: React.FC = () => {
  const { user: authUser } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [x, setX] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [github, setGithub] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    if (authUser) {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('username', authUser.username)
        .single();
      
      if (data) {
        setProfile(data);
        setFullName(data.full_name || '');
        setBio(data.bio || '');
        setLinkedin(data.linkedin || '');
        setInstagram(data.instagram || '');
        setX(data.x || '');
        setTiktok(data.tiktok || '');
        setGithub(data.github || '');
      }
    }
    setLoading(false);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!profile) return;

    const { error } = await supabase
      .from('users')
      .update({ 
        full_name: fullName, 
        bio: bio,
        linkedin: linkedin,
        instagram: instagram,
        x: x,
        tiktok: tiktok,
        github: github,
        updated_at: new Date().toISOString()
      })
      .eq('username', profile.username);

    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: 'Profile updated!' });
      setEditing(false);
      fetchProfile();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !profile) return;

    setUploading(true);
    setMessage(null);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    
    // SANITIZE: Convert special characters (like 'ü') to safe characters
    // This resolves the "Invalid key" error in Supabase Storage
    const safeUsername = profile.username
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-zA-Z0-9]/g, '_'); // Replace other special chars with _
      
    const filePath = `${safeUsername}/${fileName}`;

    try {
      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('profile-files')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-files')
        .getPublicUrl(filePath);

      // 3. Update JSONB array in users table
      const newFile: FileMetadata = {
        name: file.name,
        url: publicUrl,
        type: file.type,
        size: file.size,
        uploaded_at: new Date().toISOString()
      };

      const updatedFiles = [...(profile.files || []), newFile];

      const { error: dbError } = await supabase
        .from('users')
        .update({ files: updatedFiles })
        .eq('username', profile.username);

      if (dbError) throw dbError;

      setMessage({ type: 'success', text: 'File uploaded successfully!' });
      fetchProfile();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setUploading(false);
    }
  };

  const deleteFile = async (fileUrl: string) => {
    if (!profile) return;
    
    try {
      // 1. Remove from Storage
      const urlParts = fileUrl.split('profile-files/');
      const fullPath = urlParts.length > 1 ? urlParts[1] : null;
      
      if (fullPath) {
        // decodeURIComponent is necessary to match the path in Supabase
        const decodedPath = decodeURIComponent(fullPath);
        await supabase.storage.from('profile-files').remove([decodedPath]);
      }

      // 2. Remove from DB array
      const updatedFiles = profile.files.filter((f: FileMetadata) => f.url !== fileUrl);
      const { error } = await supabase
        .from('users')
        .update({ files: updatedFiles })
        .eq('username', profile.username);

      if (error) throw error;
      fetchProfile();
    } catch (err: any) {
      setMessage({ type: 'error', text: 'Failed to delete file' });
    }
  };

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        {profile ? (
          <div className="space-y-6">
            <div>
              <label className="block text-zinc-400 text-sm mb-1">Username</label>
              <p className="text-xl font-medium">{profile.username}</p>
            </div>

            {editing ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Bio (Reflected on Team Page)</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Briefly describe your role and contributions..."
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Instagram URL</label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="https://instagram.com/username"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">X (Twitter) URL</label>
                  <input
                    type="text"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                    placeholder="https://x.com/username"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">TikTok URL</label>
                  <input
                    type="text"
                    value={tiktok}
                    onChange={(e) => setTiktok(e.target.value)}
                    placeholder="https://tiktok.com/@username"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Full Name</label>
                  <p className="text-xl font-medium">{profile.full_name || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Bio</label>
                  <p className="text-[#cccccc] leading-relaxed">
                    {profile.bio || 'No bio written yet. Click edit to add one!'}
                  </p>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1">Social Media Accounts</label>
                  <div className="space-y-1 text-[#cccccc]">
                    <p><span className="font-semibold">LinkedIn:</span> {profile.linkedin || 'Not set'}</p>
                    <p><span className="font-semibold">Instagram:</span> {profile.instagram || 'Not set'}</p>
                    <p><span className="font-semibold">X (Twitter):</span> {profile.x || 'Not set'}</p>
                    <p><span className="font-semibold">TikTok:</span> {profile.tiktok || 'Not set'}</p>
                    <p><span className="font-semibold">GitHub:</span> {profile.github || 'Not set'}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setEditing(true)}
                    className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {message && (
              <p className={`text-sm mt-4 p-3 rounded-lg border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                {message.text}
              </p>
            )}

            {/* Document Management Section */}
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9a0e20]/10 flex items-center justify-center">
                    <FileIcon className="w-4 h-4 text-[#9a0e20]" />
                  </div>
                  Files & Documents
                </h2>
                
                <label className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-2">
                  <UploadIcon className="w-4 h-4" />
                  {uploading ? 'Uploading...' : 'New File'}
                  <input type="file" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                </label>
              </div>

              <div className="grid gap-3">
                {profile.files && profile.files.length > 0 ? (
                  profile.files.map((file: FileMetadata, idx: number) => (
                    <div key={idx} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 flex items-center justify-between group hover:border-[#9a0e20]/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
                           {file.type.includes('image') ? <ImageIcon className="w-5 h-5" /> : <FileIcon className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white max-w-[200px] truncate">{file.name}</p>
                          <p className="text-[10px] text-zinc-500 font-mono uppercase">
                            {(file.size / 1024).toFixed(1)} KB • {new Date(file.uploaded_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <a 
                          href={file.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 text-zinc-400 hover:text-white transition-colors"
                          title="Download"
                        >
                          <DownloadIcon className="w-4 h-4" />
                        </a>
                        <button 
                          onClick={() => deleteFile(file.url)}
                          className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl text-zinc-600 font-medium text-sm">
                    No files uploaded yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>No profile found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
