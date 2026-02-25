import { useParams } from "react-router";
import ConversationViewHeader from "./ConversationViewHeader";
import { useQuery } from "@tanstack/react-query";
import { removeAtsign } from "@/shared/utils/utils";
import { conversationsQueryOptions } from "../hooks/Queries/useConversations";
import MessageBox from "./MessageBox/MessageBox";
import MessageList from "@/features/message/components/MessageList";

const ConversationView = () => {
	const { username } = useParams();
	const { isLoading } = useQuery(conversationsQueryOptions);

	if (!username || isLoading) return null;

	const usernameWithoutAtsign = removeAtsign(username);
	return (
		<div className="w-full h-full">
			<div className="h-full flex flex-col items-center">
				<ConversationViewHeader username={usernameWithoutAtsign} />
				<div className="w-full flex-1">
					<MessageList />
				</div>
				<MessageBox />
			</div>
		</div>
	);
};

export default ConversationView;
