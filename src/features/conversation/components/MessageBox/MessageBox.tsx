import useNewMessage from "@/features/message/hooks/Queries/useNewMessage";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { removeAtsign } from "@/shared/utils/utils";
import { Send, Smile } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

const MessageBox = () => {
	const [content, setContent] = useState("");
	const { username } = useParams();
	const { mutate } = useNewMessage();
	if (!username) return null;
	return (
		<div className="w-full px-25 pb-3">
			<div className="flex items-center gap-2 p-3 flex-col bg-card rounded-lg">
				<div className="w-full">
					<Input
						className="w-full"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<div className="w-full flex items-center justify-between">
					<div>
						<Button>
							<Smile />
						</Button>
					</div>
					<Button
						onClick={() =>
							mutate({
								username: removeAtsign(username),
								content,
							})
						}
					>
						<Send />
						send
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
