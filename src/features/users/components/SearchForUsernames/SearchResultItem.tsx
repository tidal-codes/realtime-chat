import { ShadAvatar } from "@/shared/ui/avatar";
import { Link } from "react-router";
import type { Profile } from "../../@types";

const SearchResultItem = ({
	profile,
	searchText,
}: {
	profile: Profile;
	searchText: string;
}) => {
	function highlightMatch(text: string, query: string) {
		if (!query) return [text];
		const regex = new RegExp(`(${query})`, "ig");
		return text.split(regex);
	}
	return (
		<Link
			to={`@${profile.username}`}
			className={`rounded-md transition-shadow focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none`}
		>
			<div className="w-full px-2 py-3">
				<div className="flex items-center gap-2">
					<div>
						<ShadAvatar
							avatarUrl={profile.avatar_url ?? undefined}
							alt={profile.username}
							className="size-10"
						/>
					</div>
					<div className="min-w-0 flex-1 flex flex-col">
						<div className="w-full flex items-center justify-between gap-2">
							<p className="truncate">{`${profile.first_name} ${profile.last_name}`}</p>
							<p className="text-sm text-muted-foreground text-nowrap">
								<span className="text-destructive">@</span>
								{highlightMatch(profile.username, searchText).map(
									(part, idx) => {
										const isMatch =
											part.toLowerCase() === searchText.toLowerCase() &&
											idx <= 1;
										return (
											<span
												key={idx}
												className={isMatch ? "text-destructive" : ""}
											>
												{part}
											</span>
										);
									},
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SearchResultItem;
