import type { Message } from "@/features/conversation/@types";

export interface GroupedMessages {
	id: string;
	messages: Message[];
}

export interface NormalizeMessagesData {
	groupIds: string[];
	groupsById: Record<
		string,
		{
			messageIds: string[];
		}
	>;
	messagesById: Record<string, Message>;
}
