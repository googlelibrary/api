import { createClient } from '@supabase/supabase-js'

const { NEXT_SUPABASE_KEY, NEXT_SUPABASE_URL, } = process.env

const supabase = createClient(NEXT_SUPABASE_URL, NEXT_SUPABASE_KEY)

export async function fetch(){
    const rows = await supabase.from('videos').select('*');
    return rows
}