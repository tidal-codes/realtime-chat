import { Dialog, DialogContent } from "@/shared/ui/dialog";
import { useState } from "react";
import { useSearchParams } from "react-router";
import SettingTabs from "./SettingTabs";
import ProfileTab from "./ProfileTab";

type SettignTab = "profile" | "theme";

const SettingsDialog = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState<SettignTab>("profile");
	const open = searchParams.has("settings");

	const onOpenChange = (next: boolean) => {
		const params = new URLSearchParams(searchParams);

		if (next) {
			params.set("settings", "");
		} else {
			params.delete("settings");
		}

		setSearchParams(params);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-sm!">
				<SettingTabs
					value={activeTab}
					onValueChange={(v) => setActiveTab(v as SettignTab)}
				/>
				<div>{activeTab === "profile" && <ProfileTab />}</div>
			</DialogContent>
		</Dialog>
	);
};

export default SettingsDialog;
