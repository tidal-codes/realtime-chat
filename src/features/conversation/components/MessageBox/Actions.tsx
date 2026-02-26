import EmojiPickerPopover from "@/shared/components/EmojiPickerPopover";
import { Button } from "@/shared/ui/button";
import { Paperclip, Smile } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	setContent: Dispatch<SetStateAction<string>>;
}

const Actions = ({ setContent }: Props) => {
	return (
		<div className="flex items-center gap-2">
			<EmojiPickerPopover
				onEmojiSelect={(e) => setContent((prev) => prev + e)}
				trigger={
					<Button variant="outline" size="icon">
						<Smile />
					</Button>
				}
			/>
			<Button variant="outline" size="icon">
				<Paperclip />
			</Button>
		</div>
	);
};

export default Actions;
