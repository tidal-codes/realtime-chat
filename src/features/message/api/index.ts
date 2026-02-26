import supabase from "@/core/supabase/client";
import type { Message } from "@/features/conversation/@types";

const messageApi = {
	getMessages: async (username: string) => {
		const { data, error } = await supabase.rpc("get_conversation_with_user", {
			target_username: username,
		});

		if (error) throw error;
		return data as Message[];
	},
	sendMessage: async ({
		username,
		content,
	}: {
		username: string;
		content: string;
	}) => {
		const { data, error } = await supabase.rpc("send_message_to_username", {
			target_username: username,
			msg_content: content,
		});
		if (error) throw error;
		return data as Message;
	},
};

export default messageApi;
