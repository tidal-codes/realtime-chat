import { useQuery } from "@tanstack/react-query";
import ConversationItem from "./ConversationItem";
import { conversationsQueryOptions } from "../hooks/Queries/useConversations";
import ConversationSkeleton from "./ConversationSkeleton";

const ConversationList = () => {
	const { data: conversation_usernames, isLoading } = useQuery({
		...conversationsQueryOptions,
		select: (data) => data.conversationUser_usernames,
	});

	return (
		<div className="h-full flex flex-col gap-1 p-2">
			{isLoading ? (
				Array.from({ length: 5 }).map(() => <ConversationSkeleton />)
			) : (
				<>
					{conversation_usernames?.map((username) => (
						<ConversationItem key={username} username={username} />
					))}
				</>
			)}
		</div>
	);
};

export default ConversationList;
