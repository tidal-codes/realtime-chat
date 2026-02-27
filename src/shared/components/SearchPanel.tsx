import { useDebounce } from "@uidotdev/usehooks";
import { useSearchUiStore } from "../stores";
import { useEffect } from "react";
import { AtSign } from "lucide-react";

const SearchPanel = () => {
	const searchText = useSearchUiStore((state) => state.searchText);
	const searchDebounced = useDebounce(searchText, 400);
	useEffect(() => {
		console.log(searchDebounced);
	}, [searchDebounced]);
	return (
		<div className="w-full h-full bg-card">
			{!searchDebounced.trim() ? (
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex items-center gap-1 text-muted-foreground">
						<AtSign className="size-4" />
						<p className="text-sm">Search For Usernames</p>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default SearchPanel;
