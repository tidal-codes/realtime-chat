import { useSearchUiStore } from "../stores";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";

const AppSearchInput = () => {
	const exitSearchMode = useSearchUiStore((state) => state.exitSearchMode);
	const enterSearchMode = useSearchUiStore((state) => state.enterSearchMode);
	const setSearchText = useSearchUiStore((state) => state.setSearchText);
	const searchText = useSearchUiStore((state) => state.searchText);
	return (
		<InputGroup>
			<InputGroupInput
				placeholder="Search For Usernames"
				onFocus={enterSearchMode}
				onBlur={() => exitSearchMode()}
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<InputGroupAddon>
				<Search />
			</InputGroupAddon>
		</InputGroup>
	);
};

export default AppSearchInput;
