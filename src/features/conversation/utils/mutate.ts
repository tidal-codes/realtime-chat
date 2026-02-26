import type { Conversation, NormalizedConversations } from "../@types";

interface UpdateConversationParams {
	conversationUser_username: string;
	conversation: Partial<Conversation>;
	oldData: NormalizedConversations;
}

export function updateConversation(
	params: UpdateConversationParams,
): NormalizedConversations {
	return {
		...params.oldData,
		byConversationUser_username: {
			...params.oldData.byConversationUser_username,
			[params.conversationUser_username]: {
				...params.oldData.byConversationUser_username[
					params.conversationUser_username
				],
				...params.conversation,
			},
		},
	};
}
