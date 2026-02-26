import { ShadAvatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/shared/ui/input-group";
import { Separator } from "@/shared/ui/separator";
import { Spinner } from "@/shared/ui/spinner";
import { AtSign } from "lucide-react";

const ProfileTab = () => {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col items-center gap-5">
				<div>
					<ShadAvatar className="size-30" />
				</div>
				<div className="flex flex-col gap-3 w-full">
					<Input placeholder="first name" />
					<Input placeholder="last name" />
				</div>
				<Separator />
				<div className="w-full">
					<InputGroup>
						<InputGroupAddon align="inline-end">
							<Spinner />
						</InputGroupAddon>

						<InputGroupInput placeholder="username" />
						<InputGroupAddon>
							<AtSign />
						</InputGroupAddon>
					</InputGroup>
				</div>
				<Separator />
				<div className="w-full flex gap-2 justify-end">
					<Button variant="outline">cancel</Button>
					<Button>save</Button>
				</div>
			</div>
		</div>
	);
};

export default ProfileTab;
