import BackgroundPattern from "@/shared/components/BackgroundPattern";
import { type ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-full h-screen">
			<BackgroundPattern>{children}</BackgroundPattern>
		</div>
	);
};

export default MainLayout;
