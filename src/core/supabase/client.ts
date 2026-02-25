import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://wtlpwlnidqxexnrvdvlb.supabase.co",
	"sb_publishable_7IqsJv9KQO8ElWevUtmcGg_d9YKRWFo",
);

export default supabase;
