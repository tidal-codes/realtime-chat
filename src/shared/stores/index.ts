import { create } from "zustand";
import type { SearchUiStore } from "../@types";

export const useSearchUiStore = create<SearchUiStore>((set, get) => ({
	isSearchMode: false,
	searchText: "",
	setSearchText: (v) => set({ searchText: v }),
	enterSearchMode: () => {
		set({ isSearchMode: true });
	},
	exitSearchMode: (force) => {
		if (force) {
			set({ isSearchMode: false, searchText: "" });
			return;
		}
		const text = get().searchText.trim();
		if (text === "") {
			set({ isSearchMode: false });
		}
	},
}));
