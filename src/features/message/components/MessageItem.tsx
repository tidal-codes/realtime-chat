import { useAuthStore } from "@/features/auth/store";
import { useMessages } from "../hooks/Queries/useMessages";
import clsx from "clsx";
import React from "react";
import { cn } from "@/shared/utils/utils";
import { extractTime } from "../utils";

interface Props {
	messageId: string;
	hasTail: boolean;
}

const MessageItem = ({ messageId, hasTail }: Props) => {
	const { data: message } = useMessages((data) => data.messagesById[messageId]);
	const userId = useAuthStore((state) => state.user?.id);
	if (!message) return null;
	const isUserMessage = userId === message.sender;
	const tailClass = isUserMessage ? "rounded-br-none" : "rounded-bl-none";
	return (
		<div className={clsx("w-full flex", isUserMessage && "justify-end")}>
			<div
				className={cn(
					"py-2 px-3 rounded-xl min-w-20",
					isUserMessage ? "bg-[#685AFF]" : "bg-card",
					hasTail && tailClass,
				)}
			>
				<p>{message.content}</p>
				<div>
					<p className="text-xs text-end">{extractTime(message.inserted_at)}</p>
				</div>
			</div>
		</div>
	);
};

export default React.memo(MessageItem);
