import type { Message } from "@/features/conversation/@types";
import type { GroupedMessages, NormalizeMessagesData } from "../@types";

export default function normalizeMessagesData(
	groupedMessages: GroupedMessages[],
): NormalizeMessagesData {
	const groupIds: string[] = [];
	const groupsById: Record<string, { id: string; messageIds: string[] }> = {};
	const messagesById: Record<string, Message> = {};

	for (const group of groupedMessages) {
		const messageIds: string[] = [];

		for (const msg of group.messages) {
			messageIds.push(msg.id);
			messagesById[msg.id] = msg;
		}

		groupsById[group.id] = {
			id: group.id,
			messageIds,
		};

		groupIds.push(group.id);
	}

	return {
		groupIds,
		groupsById,
		messagesById,
	};
}
