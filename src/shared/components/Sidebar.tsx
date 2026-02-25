import ConversationList from "@/features/conversation/components/ConversationList";

const Sidebar = () => {
	return (
		<div className="h-full bg-card flex flex-col">
			<div className="flex-1">
				<ConversationList />
			</div>
		</div>
	);
};

export default Sidebar;
