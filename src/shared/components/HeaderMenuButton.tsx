import { ArrowLeft, EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import TopMenuDropdown from "./TopMenuDropdown";
import { useState } from "react";
import { useSearchUiStore } from "../stores";
import { AnimatePresence, motion } from "motion/react";

const HeaderMenuButton = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const isSearchMode = useSearchUiStore((state) => state.isSearchMode);
	const exitSearchMode = useSearchUiStore((state) => state.exitSearchMode);
	return (
		<div className="relative w-10 h-10 flex items-center justify-center">
			<AnimatePresence mode="sync">
				{isSearchMode ? (
					<motion.div
						key="back"
						initial={{ opacity: 0, scale: 0.85, y: 2 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.85, y: -2 }}
						transition={{ duration: 0.18, ease: "easeOut" }}
						className="absolute"
					>
						<Button
							variant="outline"
							size="icon"
							onClick={() => exitSearchMode(true)}
						>
							<ArrowLeft />
						</Button>
					</motion.div>
				) : (
					<motion.div
						key="menu"
						initial={{ opacity: 0, scale: 0.85, y: 2 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.85, y: -2 }}
						transition={{ duration: 0.18, ease: "easeOut" }}
						className="absolute"
					>
						<TopMenuDropdown
							open={openMenu}
							onOpenChange={(open) => setOpenMenu(open)}
						>
							<Button variant="outline" size="icon">
								<EllipsisVertical />
							</Button>
						</TopMenuDropdown>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default HeaderMenuButton;
