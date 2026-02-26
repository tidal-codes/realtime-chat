import { Button } from "@/shared/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/shared/ui/input-group";
import { EllipsisVertical, Search } from "lucide-react";

const Header = () => {
	return (
		<div className="w-full flex items-center gap-2 px-2 py-3">
			<Button variant="outline" size="icon">
				<EllipsisVertical />
			</Button>
			<InputGroup>
				<InputGroupInput placeholder="Search For Usernames" />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
};

export default Header;
