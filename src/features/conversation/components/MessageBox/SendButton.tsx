import { Button } from "@/shared/ui/button";
import { Send } from "lucide-react";

interface Props {
	handleSend: () => void;
	disabled: boolean;
}

const SendButton = ({ handleSend, disabled }: Props) => {
	return (
		<Button onClick={handleSend} disabled={disabled}>
			<Send />
			send
		</Button>
	);
};

export default SendButton;
