import { Button } from "@/shared/ui/button";
import { useCodeForm, useEmailForm } from "../hooks/forms";
import { ShadField } from "@/shared/ui/field";
import useAuthEntry from "../hooks/useAuthEntry";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Spinner } from "@/shared/ui/spinner";

const AuthEntry = () => {
	const {
		register: registerEmail,
		handleSubmit: handleEmailSubmit,
		getValues,
		setFocus: emailFocus,
		errors: emailErrors,
	} = useEmailForm();
	const {
		register: registerCode,
		handleSubmit: handleCodeSubmit,
		setFocus: codeFocus,
		resetField,
		errors: codeErrors,
	} = useCodeForm();

	const { stage, setStage, submit, emailPending, verifyPending } = useAuthEntry(
		{
			handleEmailSubmit,
			emailFocus,
			codeFocus,
			handleCodeSubmit,
			email: getValues("email"),
		},
	);

	return (
		<div className="w-full max-w-sm bg-card p-3 py-4 rounded-xl">
			<div className="flex flex-col gap-4">
				<div>
					<h3 className="capitalize text-lg">
						{stage === "EMAIL" ? "enter your email" : "enter confirmation code"}
					</h3>
				</div>

				{stage === "CONFIRM" && (
					<p className="text-muted-foreground text-sm">
						We’ve sent a confirmation code to your email. If it’s not in your
						inbox, be sure to check your spam folder.
					</p>
				)}

				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-3">
						<div className="w-full flex flex-col h-fit relative">
							<ShadField
								type="text"
								register={registerEmail}
								errors={emailErrors}
								field="email"
								disabled={stage === "CONFIRM"}
								placeholder="email@x.com"
							/>
						</div>
						{stage === "CONFIRM" && (
							<ShadField
								type="text"
								register={registerCode}
								errors={codeErrors}
								field="code"
								disabled={false}
								placeholder="xxxxxx"
							/>
						)}
					</div>
					<div className="w-full flex items-center gap-2">
						{stage === "CONFIRM" && (
							<Button
								className="flex-1"
								variant="secondary"
								onClick={() => {
									setStage("EMAIL");
									resetField("code");
								}}
							>
								edit your email
							</Button>
						)}
						<Button
							disabled={emailPending || verifyPending}
							className="flex-1"
							onClick={submit}
						>
							{emailPending || verifyPending ? (
								<Spinner />
							) : stage === "EMAIL" ? (
								<>
									continue
									<ArrowRight />
								</>
							) : (
								<>
									verify
									<CircleCheck />
								</>
							)}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthEntry;
