import supabase from "@/core/supabase/client";
import type { Profile } from "../@types";

export async function searchByUsername(search_input: string) {
	const { data, error } = await supabase.rpc("search_by_username", {
		search_input,
	});

	if (error) throw error;

	return data as Profile[];
}
