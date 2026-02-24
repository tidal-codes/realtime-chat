import { Button } from "@/shared/ui/button";
import EmailField from "./EmailField";
import { useState } from "react";
import ConfirmCodeField from "./ConfirmCodeField";

const AuthEntry = () => {
	const [stage, setStage] = useState<"EMAIL" | "CONFIRM">("EMAIL");
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

				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-1">
						<EmailField disabled={stage === "CONFIRM"} />
					</div>
					{stage === "CONFIRM" && <ConfirmCodeField />}
					<Button className="w-full" onClick={() => setStage("CONFIRM")}>
						continue
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AuthEntry;
