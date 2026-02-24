import { useState } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";
import type { CodeSchemaType, EmailSchemaType } from "../@types";

interface Props {
	handleEmailSubmit: UseFormHandleSubmit<EmailSchemaType>;
	handleCodeSubmit: UseFormHandleSubmit<CodeSchemaType>;
}

export default function useAuthEntry({
	handleCodeSubmit,
	handleEmailSubmit,
}: Props) {
	const [stage, setStage] = useState<"EMAIL" | "CONFIRM">("EMAIL");

	function sendVerificationCode(data: EmailSchemaType) {
		console.log(data);
		setStage("CONFIRM");
	}

	function verifyCodeAndLogin(data: CodeSchemaType) {
		console.log(data);
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
	};
}
