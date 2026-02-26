import { useQueryClient } from "@tanstack/react-query";
import type { Conversation, NormalizedConversations } from "../../@types";
import { updateConversation } from "../../utils/mutate";

export default function useUpdateConversation() {
	const client = useQueryClient();

	return function update(
		otherUsername: string,
		conversation: Partial<Conversation>,
	) {
		client.setQueryData(
			["conversations"],
			(oldData: NormalizedConversations) => {
				return updateConversation({
					conversation,
					conversationUser_username: otherUsername,
					oldData,
				});
			},
		);
	};
}
