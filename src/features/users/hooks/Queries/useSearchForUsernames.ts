import { useMutation } from "@tanstack/react-query";
import { searchByUsername } from "../../api";

export function useSearchForUsernames() {
	return useMutation({
		mutationFn: async (username: string) => {
			return searchByUsername(username);
		},
	});
}
