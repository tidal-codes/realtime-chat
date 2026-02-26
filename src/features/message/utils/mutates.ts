import type { Message } from "@/features/conversation/@types";
import type { NormalizeMessagesData } from "../@types";

import { shouldGroupMessages } from "./groupMessages";

export function addNewMessage(
	newMessage: Message,
	oldData: NormalizeMessagesData,
): NormalizeMessagesData {
	const lastGroupId = getLast(oldData.groupIds);
	const lastGroup = oldData.groupsById[lastGroupId];
	const lastMsgId = getLast(lastGroup.messageIds);
	const lastMessage = oldData.messagesById[lastMsgId];

	const shouldGroup = shouldGroupMessages(lastMessage, newMessage);

	if (shouldGroup) {
		const newGroupId = createNewGroupId(lastGroupId, newMessage.id);

		if (newGroupId === lastGroupId) return oldData;

		return {
			...oldData,

			groupIds: oldData.groupIds.map((id) =>
				id === lastGroupId ? newGroupId : id,
			),

			groupsById: {
				...oldData.groupsById,
				[newGroupId]: {
					messageIds: [...lastGroup.messageIds, newMessage.id],
				},
			},

			messagesById: {
				...oldData.messagesById,
				[newMessage.id]: newMessage,
			},
		};
	}

	return {
		...oldData,

		groupIds: [...oldData.groupIds, newMessage.id],

		groupsById: {
			...oldData.groupsById,
			[newMessage.id]: {
				messageIds: [newMessage.id],
			},
		},
		messagesById: {
			...oldData.messagesById,
			[newMessage.id]: newMessage,
		},
	};
}

export function updateMessage(
	oldMessageId: string,
	updatedMessage: Message,
	oldData: NormalizeMessagesData,
): NormalizeMessagesData {
	// پیام قدیمی وجود داره؟
	if (!oldData.messagesById[oldMessageId]) return oldData;

	// پیدا کردن گروه پیام قدیمی
	const groupId = oldData.groupIds.find((gid) =>
		oldData.groupsById[gid].messageIds.includes(oldMessageId),
	);

	if (!groupId) return oldData; // اگر گروه پیدا نشد

	const group = oldData.groupsById[groupId];

	// اگر id پیام تغییر کرده، messageIds گروه رو هم آپدیت می‌کنیم
	const newMessageIds = group.messageIds.map((mid) =>
		mid === oldMessageId ? updatedMessage.id : mid,
	);

	// داده نهایی
	return {
		...oldData,

		groupIds: [...oldData.groupIds],

		groupsById: {
			...oldData.groupsById,
			[groupId]: {
				messageIds: newMessageIds,
			},
		},

		messagesById: {
			...oldData.messagesById,
			// حذف پیام قدیمی اگر id تغییر کرده
			...(oldMessageId !== updatedMessage.id
				? {
						[updatedMessage.id]: {
							...oldData.messagesById[oldMessageId],
							...updatedMessage,
						},
					}
				: {
						[oldMessageId]: {
							...oldData.messagesById[oldMessageId],
							...updatedMessage,
						},
					}),
		},
	};
}

const getLast = <T>(arr: T[]) => arr[arr.length - 1];

function createNewGroupId(prevId: string, msgId: string) {
	return `${prevId}_${msgId}`;
}
