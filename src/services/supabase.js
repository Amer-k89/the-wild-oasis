import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lnebeansonibiouaonba.supabase.co";
const supabaseKey = "sb_publishable_hoJRanNu8zRQi_YtVX8zDg_DEbuM8jo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
