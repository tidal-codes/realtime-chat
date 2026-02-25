import { queryOptions, useQuery } from "@tanstack/react-query";
import messageApi from "../../api";
import { groupMessages } from "../../utils/groupMessages";
import type { NormalizeMessagesData } from "../../@types";
import normalizeMessagesData from "../../utils/normalizeData";
import { useParams } from "react-router";
import { removeAtsign } from "@/shared/utils/utils";

export const messagesQueryOptions = (username: string | undefined) => {
	return queryOptions<NormalizeMessagesData>({
		queryKey: ["messages", username],
		queryFn: async () => {
			if (!username) throw new Error("username not found");
			const msgs = await messageApi.getMessages(removeAtsign(username));
			return normalizeMessagesData(groupMessages(msgs));
		},
	});
};

export function useMessages<SelectOutput>(
	select: (data: NormalizeMessagesData) => SelectOutput,
) {
	const { username } = useParams();
	const query = useQuery({
		...messagesQueryOptions(username),
		select,
	});

	return query;
}
