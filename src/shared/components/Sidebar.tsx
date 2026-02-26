import ConversationList from "@/features/conversation/components/ConversationList";
import Header from "@/features/conversation/components/Header";

const Sidebar = () => {
	return (
		<div className="h-full bg-card flex flex-col">
			<div>
				<Header />
			</div>
			<div className="flex-1">
				<ConversationList />
			</div>
		</div>
	);
};

export default Sidebar;
