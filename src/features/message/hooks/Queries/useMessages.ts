import { queryOptions, useQuery } from "@tanstack/react-query";
import messageApi from "../../api";
import { groupMessages } from "../../utils/groupMessages";
import type { NormalizeMessagesData } from "../../@types";
import normalizeMessagesData from "../../utils/normalizeData";
import { useParams } from "react-router";
import { removeAtsign } from "@/shared/utils/utils";

export const messagesQueryOptions = (username: string | undefined) => {
	if (!username) throw new Error("username not found");
	const noAtsignUsername = removeAtsign(username);

	return queryOptions<NormalizeMessagesData>({
		queryKey: ["messages", noAtsignUsername],
		queryFn: async () => {
			const msgs = await messageApi.getMessages(noAtsignUsername);
			return normalizeMessagesData(groupMessages(msgs));
		},
		staleTime: 1000 * 60 * 10,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
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
