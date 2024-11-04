
import { supabase } from '../../../lib/supabase.js'

export async function checkUserSession(){
    const {data:{session}} = await supabase.auth.getSession();
    return session;
}