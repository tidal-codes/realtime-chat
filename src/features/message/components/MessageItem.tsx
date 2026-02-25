import { useAuthStore } from "@/features/auth/store";
import { useMessages } from "../hooks/Queries/useMessages";
import clsx from "clsx";

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
			<div className="bg-card py-2 px-3">{message.content}</div>
		</div>
	);
};

export default MessageItem;
