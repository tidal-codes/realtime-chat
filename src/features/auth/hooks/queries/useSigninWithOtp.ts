import { useMutation } from "@tanstack/react-query";
import authApi from "../../api";

export default function useSigninWithOtp() {
	return useMutation({
		mutationFn: (email: string) => authApi.supabaseSigninWithOtp(email),
	});
}
