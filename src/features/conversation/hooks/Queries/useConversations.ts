import { queryOptions } from "@tanstack/react-query";
import chatApi from "../../api";
import type { NormalizedConversations } from "../../@types";
import { getNormalizedConversations } from "../../utils/normalize";

export const conversationsQueryOptions = queryOptions<NormalizedConversations>({
	queryKey: ["conversations"],
	queryFn: async () => {
		const conversations = await chatApi.getConversations();
		if (!conversations || conversations.length === 0) {
			return {
				conversationUser_usernames: [],
				byConversationUser_username: {},
			};
		}
		return getNormalizedConversations(conversations);
	},
});
