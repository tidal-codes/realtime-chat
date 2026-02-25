import supabase from "@/core/supabase/client";
import type { Conversation } from "../@types";

const chatApi = {
	getConversations: async () => {
		const { data, error } = await supabase.rpc("get_all_conversations");

		if (error) throw error;

		return data as Conversation[] | null;
	},
};

export default chatApi;
