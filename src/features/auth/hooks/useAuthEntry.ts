import { useEffect, useState } from "react";
import type { UseFormHandleSubmit, UseFormSetFocus } from "react-hook-form";
import type { CodeSchemaType, EmailSchemaType } from "../@types";
import { toast } from "sonner";
import useSigninWithOtp from "./queries/useSigninWithOtp";
import useVerifyCode from "./queries/useVerifyCode";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store";

interface Props {
	handleEmailSubmit: UseFormHandleSubmit<EmailSchemaType>;
	emailFocus: UseFormSetFocus<EmailSchemaType>;
	codeFocus: UseFormSetFocus<CodeSchemaType>;
	handleCodeSubmit: UseFormHandleSubmit<CodeSchemaType>;
	email: string;
}

export default function useAuthEntry({
	handleCodeSubmit,
	codeFocus,
	emailFocus,
	handleEmailSubmit,
	email,
}: Props) {
	const [stage, setStage] = useState<"EMAIL" | "CONFIRM">("EMAIL");
	const { mutateAsync: signin, isPending: emailPending } = useSigninWithOtp();
	const { mutateAsync: verify, isPending: verifyPending } = useVerifyCode();
	const navigate = useNavigate();
	const setUser = useAuthStore((state) => state.setUser);

	useEffect(() => {
		if (stage === "EMAIL") {
			emailFocus("email");
		} else {
			codeFocus("code");
		}
	}, [stage]);

	async function sendVerificationCode(data: EmailSchemaType) {
		try {
			await signin(data.email);
			setStage("CONFIRM");
		} catch (e) {
			toast.error(`${e}`);
		}
	}

	async function verifyCodeAndLogin(data: CodeSchemaType) {
		try {
			const res = await verify({ email, token: data.code });
			if (res.user) {
				setUser(res.user);
				navigate("/c");
				toast.success(`Logged In As ${res.user?.email}`);
			} else {
				toast.error("unknown error!");
			}
		} catch (e) {
			toast.error(`${e}`);
		}
	}

	const submitEmailForm = handleEmailSubmit(sendVerificationCode);
	const submitCodeForm = handleCodeSubmit(verifyCodeAndLogin);

	function submit() {
		if (stage === "EMAIL") {
			submitEmailForm();
		} else {
			submitCodeForm();
		}
	}
	return {
		stage,
		setStage,
		submit,
		emailPending,
		verifyPending,
	};
}
