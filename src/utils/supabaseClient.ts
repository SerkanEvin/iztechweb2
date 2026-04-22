import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('CRITICAL: Supabase credentials missing! If you are on Netlify, please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your Site Settings > Environment Variables.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
