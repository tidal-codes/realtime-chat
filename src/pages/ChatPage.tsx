import MainLayout from "@/core/Layouts/MainLayout";
import SettingsDialog from "@/shared/components/SettingsDialog/SettingsDialog";
import Sidebar from "@/shared/components/Sidebar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/shared/ui/resizable";
import { Outlet } from "react-router";

const ChatPage = () => {
	return (
		<MainLayout>
			<SettingsDialog />
			<ResizablePanelGroup orientation="horizontal" className="h-screen w-full">
				<ResizablePanel
					className="h-full"
					minSize={300}
					defaultSize={350}
					maxSize={420}
				>
					<Sidebar />
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
