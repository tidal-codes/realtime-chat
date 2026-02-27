export interface SearchUiStore {
	isSearchMode: boolean;
	searchText: string;
	setSearchText: (test: string) => void;
	enterSearchMode: () => void;
	exitSearchMode: (force?: boolean) => void;
}
