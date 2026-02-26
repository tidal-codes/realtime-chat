import { useState, type ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
	EmojiPicker,
	EmojiPickerContent,
	EmojiPickerSearch,
} from "../ui/emoji-picker";

interface Props {
	trigger: ReactNode;
	onEmojiSelect: (emoji: string) => void;
}

const EmojiPickerPopover = ({ trigger, onEmojiSelect }: Props) => {
	const [open, setOpen] = useState(false);
	return (
		<Popover open={open} onOpenChange={(open) => setOpen(open)}>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent className="p-0">
				<EmojiPicker
					className="h-[342px] w-full"
					onEmojiSelect={({ emoji }) => onEmojiSelect(emoji)}
				>
					<EmojiPickerSearch />
					<EmojiPickerContent />
				</EmojiPicker>
			</PopoverContent>
		</Popover>
	);
};

export default EmojiPickerPopover;
