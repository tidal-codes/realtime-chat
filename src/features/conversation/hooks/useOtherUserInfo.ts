import { useMemo } from "react";
import type { Conversation } from "../@types";

export default function useOtherUserInfo(
	conversation: Conversation | undefined,
) {
	const otherUser = conversation?.otherUser;
	const fullName = useMemo(() => {
		return `${otherUser?.first_name} ${otherUser?.last_name}`;
	}, [otherUser?.first_name, otherUser?.last_name]);

	return {
		avatarUrl: otherUser?.avatar_url ?? undefined,
		fullName: fullName ?? undefined,
	};
}
