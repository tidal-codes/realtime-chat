import MainLayout from "@/core/Layouts/MainLayout";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/shared/ui/resizable";
import { Outlet } from "react-router";

const ChatPage = () => {
	return (
		<MainLayout>
			<ResizablePanelGroup orientation="horizontal" className="h-screen w-full">
				<ResizablePanel
					className="h-full"
					minSize={300}
					defaultSize={350}
					maxSize={420}
				>
					<div className="w-full h-full bg-card"></div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel className="flex-1">
					<Outlet />
				</ResizablePanel>
			</ResizablePanelGroup>
		</MainLayout>
	);
};

export default ChatPage;
