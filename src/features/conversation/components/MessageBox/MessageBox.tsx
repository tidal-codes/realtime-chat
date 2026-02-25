import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Send, Smile } from "lucide-react";

const MessageBox = () => {
	return (
		<div className="w-full px-25 pb-3">
			<div className="flex items-center gap-2 p-3 flex-col bg-card rounded-lg">
				<div className="w-full">
					<Input className="w-full" />
				</div>
				<div className="w-full flex items-center justify-between">
					<div>
						<Button>
							<Smile />
						</Button>
					</div>
					<Button>
						<Send />
						send
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
