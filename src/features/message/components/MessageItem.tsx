import { useAuthStore } from "@/features/auth/store";
import { useMessages } from "../hooks/Queries/useMessages";
import clsx from "clsx";
import React from "react";

interface Props {
	messageId: string;
}

const MessageItem = ({ messageId }: Props) => {
	const { data: message } = useMessages((data) => data.messagesById[messageId]);
	const userId = useAuthStore((state) => state.user?.id);
	if (!message) return null;
	const isUserMessage = userId === message.sender;

	return (
		<div className={clsx("w-full flex", isUserMessage && "justify-end")}>
			<div
				className={clsx(
					"py-2 px-3 rounded-lg",
					isUserMessage ? "bg-[#685AFF]" : "bg-card",
				)}
			>
				<p>{message.content}</p>
				<p className="text-xs">{messageId}</p>
			</div>
		</div>
	);
};

export default React.memo(MessageItem);
