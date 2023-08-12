import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_APIKEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_APIKEY);
