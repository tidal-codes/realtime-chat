import { useMessages } from "../hooks/Queries/useMessages";
import MessageGroup from "./MessageGroup";

const MessageList = () => {
	const { data: groupIds } = useMessages((data) => data.groupIds);
	return (
		<div className="w-full h-full flex flex-col gap-2">
			{groupIds?.map((id) => (
				<MessageGroup key={id} groupId={id} />
			))}
		</div>
	);
};

export default MessageList;
