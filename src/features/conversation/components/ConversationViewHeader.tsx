import { useQuery } from "@tanstack/react-query";
import { conversationsQueryOptions } from "../hooks/Queries/useConversations";
import { ShadAvatar } from "@/shared/ui/avatar";
import useOtherUserInfo from "../hooks/useOtherUserInfo";

interface Props {
	username: string;
}

const ConversationViewHeader = ({ username }: Props) => {
	const { data: conversation } = useQuery({
		...conversationsQueryOptions,
		select: (data) => data.byConversationUser_username[username],
	});
	const { fullName, avatarUrl } = useOtherUserInfo(conversation);
	if (!conversation) return null;
	return (
		<div className="w-full bg-card">
			<div className="w-full px-5 py-1.5 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<ShadAvatar
						className="size-12"
						avatarUrl={avatarUrl}
						alt={username}
					/>
					<p>{fullName}</p>
				</div>
			</div>
		</div>
	);
};

export default ConversationViewHeader;
