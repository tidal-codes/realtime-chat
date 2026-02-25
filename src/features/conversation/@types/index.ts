export interface Message {
	id: string;
	sender: string;
	receiver: string;
	inserted_at: string;
	is_readed: boolean;
	content: string;
}

export interface Profile {
	id: string;
	first_name: string;
	last_name: string | null;
	description: string | null;
	avatar_url: string | null;
	username: string;
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
