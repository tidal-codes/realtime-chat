import { useMutation } from "@tanstack/react-query";
import authApi from "../../api";

export default function useVerifyCode() {
	return useMutation({
		mutationFn: ({ email, token }: { email: string; token: string }) => {
			return authApi.verifySigninCode({ email, token });
		},
	});
}
