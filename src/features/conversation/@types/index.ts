import type { Profile } from "@/features/users/@types";

export interface Message {
	id: string;
	sender: string;
	receiver: string;
	inserted_at: string;
	is_readed: boolean;
	content: string;
}
export interface Conversation {
	first_unread_message_id: string;
	lastMessage: Message;
	otherUser: Profile;
}

export interface NormalizedConversations {
	conversationUser_usernames: string[];
	byConversationUser_username: Record<string, Conversation>;
}
