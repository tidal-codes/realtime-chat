import type { Message } from "@/features/conversation/@types";
import type { GroupedMessages } from "../@types";
import { differenceInMinutes, parseISO } from "date-fns";

export function groupMessages(messages: Message[]): GroupedMessages[] {
	if (!messages || messages.length === 0) return [];

	const sortedMessages = messages
		.slice()
		.sort(
			(a, b) =>
				new Date(a.inserted_at).getTime() - new Date(b.inserted_at).getTime(),
		);

	const groups: GroupedMessages[] = [];
	let currentGroup: Message[] = [];

	for (let i = 0; i < sortedMessages.length; i++) {
		const msg = sortedMessages[i];

		if (currentGroup.length === 0) {
			currentGroup.push(msg);
			continue;
		}

		const lastMsg = currentGroup[currentGroup.length - 1];

		if (shouldGroupMessages(lastMsg, msg)) {
			currentGroup.push(msg);
		} else {
			groups.push({
				id: currentGroup.map((m) => m.id).join("_"),
				messages: currentGroup,
			});

			currentGroup = [msg];
		}
	}

	if (currentGroup.length > 0) {
		groups.push({
			id: currentGroup.map((m) => m.id).join("_"),
			messages: currentGroup,
		});
	}

	return groups;
}

export function shouldGroupMessages(prev: Message, current: Message): boolean {
	const minutesDiff = differenceInMinutes(
		parseISO(current.inserted_at),
		parseISO(prev.inserted_at),
	);

	return prev.sender === current.sender && minutesDiff <= 5;
}
