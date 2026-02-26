import { useMutation, useQueryClient } from "@tanstack/react-query";
import messageApi from "../../api";
import type { NormalizeMessagesData } from "../../@types";
import type { Message } from "@/features/conversation/@types";
import { addNewMessage, updateMessage } from "../../utils/mutates";
import { useAuthStore } from "@/features/auth/store";
import useUpdateConversation from "@/features/conversation/hooks/Queries/useUpdateConversation";

interface NewMessageParams {
	username: string;
	content: string;
}

export default function useNewMessage() {
	const client = useQueryClient();
	const userId = useAuthStore((state) => state.user?.id);
	const update = useUpdateConversation();
	const mutation = useMutation({
		mutationFn: (messageParams: NewMessageParams) =>
			messageApi.sendMessage(messageParams),
		onMutate: (variables) => {
			const optimisticId = "optimistic-" + crypto.randomUUID();
			const newMessage: Message = {
				id: optimisticId,
				sender: userId || "",
				receiver: variables.username,
				content: variables.content,
				inserted_at: new Date().toISOString(),
				is_readed: false,
			};

			update(variables.username, {
				lastMessage: newMessage,
			});
			client.setQueryData(
				["messages", variables.username],
				(oldData: NormalizeMessagesData) => {
					return addNewMessage(newMessage, oldData);
				},
			);

			return { id: optimisticId };
		},

		onError: (err) => {
			console.log(err);
			// toast.error(`${err.message}`)
			// if (ctx?.previousData) {
			//     const queryKey = ["messages", vars.username];
			//     client.setQueryData(queryKey, ctx.previousData);
			// }
		},
		onSuccess: (serverMessage, variables, ctx) => {
			const queryKey = ["messages", variables.username];

			client.setQueryData(queryKey, (oldData: NormalizeMessagesData) => {
				return updateMessage(ctx.id, serverMessage, oldData);
			});
		},
		// onSuccess: (serverMessage, variables, ctx) => {
		//     const queryKey = ["messages", variables.username];

		//     client.setQueryData(queryKey, (old) => {
		//         if (!old) return old;

		//         const optimisticId = ctx.optimisticId;

		//         const newMessagesById = { ...old.messagesById };
		//         delete newMessagesById[optimisticId];
		//         newMessagesById[serverMessage.id] = serverMessage;

		//         const newGroupsById = { ...old.groupsById };

		//         for (const gid of Object.keys(newGroupsById)) {
		//             const ids = newGroupsById[gid].messageIds;
		//             const index = ids.indexOf(optimisticId);
		//             if (index !== -1) {
		//                 ids[index] = serverMessage.id;
		//             }
		//         }

		//         return {
		//             ...old,
		//             messagesById: newMessagesById,
		//             groupsById: newGroupsById
		//         };
		//     });
		// },
	});

	return mutation;
}
