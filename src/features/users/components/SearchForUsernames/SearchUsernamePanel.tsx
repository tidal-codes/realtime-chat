import { useSearchUiStore } from "@/shared/stores";
import { AtSign } from "lucide-react";
import useDebouncedValue from "@/shared/hooks/useDebouncedValue";
import SearchList from "./SearchList";

const SearchUsernamePanel = () => {
	const searchText = useSearchUiStore((state) => state.searchText);
	const searchDebounced = useDebouncedValue(searchText, 500);
	return (
		<div className="w-full h-full bg-card">
			{!searchDebounced?.trim() ? (
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex items-center gap-1 text-muted-foreground">
						<AtSign className="size-4" />
						<p className="text-sm">Search For Usernames</p>
					</div>
				</div>
			) : (
				<SearchList searchUsername={searchDebounced} />
			)}
		</div>
	);
};

export default SearchUsernamePanel;
