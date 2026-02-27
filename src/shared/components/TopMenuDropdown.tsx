import { LogOut, Settings } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSearchParams } from "react-router";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const TopMenuDropdown = ({ children, open, onOpenChange }: Props) => {
	const [, setSearchParams] = useSearchParams();

	return (
		<DropdownMenu open={open} onOpenChange={(open) => onOpenChange(open)}>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={() => {
							setSearchParams({ settings: "profile" });
						}}
					>
						<Settings />
						settings
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-destructive hover:text-destructive! hover:bg-destructive/10!">
					<LogOut className="text-destructive" />
					logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TopMenuDropdown;
