import { ShadAvatar } from "@/shared/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import { conversationsQueryOptions } from "../hooks/Queries/useConversations";
import useOtherUserInfo from "../hooks/useOtherUserInfo";
import { formatChatTimestamp } from "../utils/date";

interface Props {
	username: string;
}

const ConversationItem = ({ username }: Props) => {
	const { data: conversation } = useQuery({
		...conversationsQueryOptions,
		select: (data) => data.byConversationUser_username[username],
	});

	const { fullName, avatarUrl } = useOtherUserInfo(conversation);
	if (!conversation) return null;

	return (
		<NavLink
			to={`@${username}`}
			className={({ isActive }) =>
				`rounded-md transition-shadow focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none ${isActive ? "bg-[#685AFF]" : ""}`
			}
		>
			<div className="w-full px-2 py-3">
				<div className="flex items-center gap-2">
					<div>
						<ShadAvatar
							avatarUrl={avatarUrl}
							alt={conversation.otherUser.username}
							className="size-12"
						/>
					</div>
					<div className="min-w-0 flex-1 flex flex-col">
						<div className="w-full flex items-center justify-between gap-2">
							<p className="truncate">{fullName}</p>
							<p className="text-sm text-muted-foreground text-nowrap">
								{formatChatTimestamp(conversation.lastMessage.inserted_at)}
							</p>
						</div>
						<div className="w-full flex items-center justify-between gap-2">
							<p className="text-sm text-muted-foreground truncate">
								{conversation.lastMessage.content}
							</p>
							<div>
								{conversation.first_unread_message_id.trim() &&
									conversation.first_unread_message_id && (
										<p className="size-2.5 rounded-full bg-destructive" />
									)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default ConversationItem;
