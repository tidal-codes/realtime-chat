import type { Conversation } from "../@types";

export function getNormalizedConversations(conversations: Conversation[]) {
	const conversationUser_usernames: string[] = [];
	const byConversationUser_username: Record<string, Conversation> = {};

	for (const conv of conversations) {
		const username = conv.otherUser.username;

		if (!byConversationUser_username[username]) {
			conversationUser_usernames.push(username);
		}

		byConversationUser_username[username] = {
			first_unread_message_id: conv.first_unread_message_id,
			lastMessage: conv.lastMessage,
			otherUser: conv.otherUser,
		};
	}

	return { conversationUser_usernames, byConversationUser_username };
}
