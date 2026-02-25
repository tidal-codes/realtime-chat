import { useParams } from "react-router";
import ConversationViewHeader from "./ConversationViewHeader";
import { useQuery } from "@tanstack/react-query";
import { removeAtsine } from "@/shared/utils/utils";
import { conversationsQueryOptions } from "../hooks/Queries/useConversations";
import MessageBox from "./MessageBox/MessageBox";

const ConversationView = () => {
	const { username } = useParams();
	const { isLoading } = useQuery(conversationsQueryOptions);

	if (!username || isLoading) return null;

	return (
		<div className="w-full h-full">
			<div className="h-full flex flex-col items-center">
				<ConversationViewHeader username={removeAtsine(username)} />
				<div className="flex-1"></div>
				<MessageBox />
			</div>
		</div>
	);
};

export default ConversationView;
