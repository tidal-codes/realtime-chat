import ConversationList from "@/features/conversation/components/ConversationList";
import Header from "@/features/conversation/components/Header";
import { AnimatePresence, motion } from "motion/react";
import { useSearchUiStore } from "../stores";
import SearchUsernamePanel from "@/features/users/components/SearchForUsernames/SearchUsernamePanel";

const Sidebar = () => {
	const isSearchMode = useSearchUiStore((state) => state.isSearchMode);
	return (
		<div className="h-full bg-card flex flex-col">
			<div>
				<Header />
			</div>
			<div className="flex-1 relative overflow-hidden">
				<AnimatePresence mode="sync">
					{isSearchMode ? (
						<motion.div
							key="search"
							initial={{
								opacity: 0,
								scale: 1.05,
								y: 10,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								scale: 1.05,
								y: 10,
							}}
							transition={{ duration: 0.15, ease: "easeOut" }}
							className="absolute inset-0"
						>
							<SearchUsernamePanel />
						</motion.div>
					) : (
						<motion.div
							key="conversations"
							initial={{
								opacity: 0,
								scale: 1.1,
								y: 20,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								scale: 1.1,
								y: 20,
							}}
							transition={{ duration: 0.28, ease: "easeOut" }}
							className="absolute inset-0"
						>
							<ConversationList />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Sidebar;
