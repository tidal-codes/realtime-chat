import React from "react";
import { useMessages } from "../hooks/Queries/useMessages";
import MessageItem from "./MessageItem";

interface Props {
	groupId: string;
}

const MessageGroup = ({ groupId }: Props) => {
	const { data: messageIds } = useMessages(
		(data) => data.groupsById[groupId].messageIds,
	);

	return (
		<div className="w-full flex flex-col gap-0.5 px-5">
			{messageIds?.map((id, i) => {
				return (
					<MessageItem
						key={id}
						hasTail={messageIds.length - 1 === i}
						messageId={id}
					/>
				);
			})}
		</div>
	);
};

export default React.memo(MessageGroup);
