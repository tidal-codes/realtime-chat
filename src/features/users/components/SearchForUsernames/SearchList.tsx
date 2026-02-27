import { useEffect } from "react";
import { Spinner } from "@/shared/ui/spinner";
import { useSearchForUsernames } from "../../hooks/Queries/useSearchForUsernames";
import SearchResultItem from "./SearchResultItem";

interface Props {
	searchUsername: string | undefined;
}

const SearchList = ({ searchUsername }: Props) => {
	const { mutate, data, isPending } = useSearchForUsernames();

	useEffect(() => {
		if (!searchUsername?.trim()) return;
		mutate(searchUsername);
	}, [searchUsername]);

	return (
		<>
			{isPending ? (
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex items-center gap-1 text-muted-foreground">
						Searching
						<Spinner className="size-4" />
					</div>
				</div>
			) : data?.length === 0 ? (
				<div className="h-full flex items-center justify-center text-muted-foreground text-sm">
					No results found
				</div>
			) : (
				<div className="w-full flex flex-col gap-1">
					{data?.map((profile) => (
						<SearchResultItem profile={profile} searchText={searchUsername!} />
					))}
				</div>
			)}
		</>
	);
};

export default SearchList;
