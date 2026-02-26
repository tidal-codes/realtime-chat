import useNewMessage from "@/features/message/hooks/Queries/useNewMessage";
import { useState } from "react";
import { useParams } from "react-router";
import Input from "./Input";
import Actions from "./Actions";
import SendButton from "./SendButton";
import { removeAtsign } from "@/shared/utils/utils";

const MessageBox = () => {
	const [content, setContent] = useState("");
	const { username } = useParams();
	const { mutate } = useNewMessage();

	if (!username) return null;

	const handleSend = () => {
		mutate({
			username: removeAtsign(username),
			content,
		});
		setContent("");
	};

	return (
		<div className="w-full md:px-30 xl:px-55 py-3">
			<div className="flex items-center gap-2 p-3 flex-col bg-card rounded-xl border">
				<div className="w-full">
					<Input value={content} onChange={(v) => setContent(v)} />
				</div>
				<div className="w-full flex items-center justify-between">
					<div>
						<Actions setContent={setContent} />
					</div>
					<SendButton handleSend={handleSend} disabled={!content.trim()} />
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
