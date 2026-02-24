import { Button } from "@/shared/ui/button";
import { useCodeForm, useEmailForm } from "../hooks/forms";
import { ShadField } from "@/shared/ui/field";
import useAuthEntry from "../hooks/useAuthEntry";
import { Pen } from "lucide-react";

const AuthEntry = () => {
	const {
		register: registerEmail,
		handleSubmit: handleEmailSubmit,
		errors: emailErrors,
	} = useEmailForm();
	const {
		register: registerCode,
		handleSubmit: handleCodeSubmit,
		errors: codeErrors,
	} = useCodeForm();

	const { stage, setStage, submit } = useAuthEntry({
		handleEmailSubmit,
		handleCodeSubmit,
	});

	return (
		<div className="w-full max-w-sm bg-card p-3 py-5 rounded-lg">
			<div className="flex flex-col gap-4">
				{stage === "EMAIL" ? (
					<div>
						<h3 className="text-xl capitalize">enter your email to continue</h3>
					</div>
				) : (
					<div>
						<h3 className="text-xl capitalize">enter confirmation code</h3>
						<p className="text-muted-foreground text-sm">
							We’ve sent a confirmation code to your email. If it’s not in your
							inbox, be sure to check your spam folder.
						</p>
					</div>
				)}

				<div className="flex flex-col gap-5">
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
							{stage === "CONFIRM" && (
								<Button
									size="icon-xs"
									className="absolute right-2 top-[50%] -translate-y-[50%]"
									onClick={() => setStage("EMAIL")}
								>
									<Pen />
								</Button>
							)}
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
					<Button className="w-full" onClick={submit}>
						continue
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AuthEntry;
