import { Spinner } from "@/shared/ui/spinner";
import { useMessages } from "../hooks/Queries/useMessages";
import MessageGroup from "./MessageGroup";

const MessageList = () => {
	const { data: groupIds, isLoading } = useMessages((data) => data.groupIds);

	return (
		<>
			{isLoading ? (
				<div className="w-full h-full flex items-center justify-center">
					<Spinner className="size-9" />
				</div>
			) : (
				<div className="w-full h-full flex flex-col gap-2 overflow-y-auto">
					{groupIds?.map((id) => (
						<MessageGroup key={id} groupId={id} />
					))}
				</div>
			)}
		</>
	);
};

export default MessageList;
