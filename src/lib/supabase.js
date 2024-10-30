import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oryrgwfhrtjidubhwezr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yeXJnd2ZocnRqaWR1Ymh3ZXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyODE0MDIsImV4cCI6MjA0NDg1NzQwMn0.-9gCyM9otqE3p_Gam8NoxAoX5bYGQkYiPzUTG3pMPd4'
export const supabase = createClient(supabaseUrl, supabaseKey)

/*

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

*/