import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";

interface Props {
	value: string;
	onValueChange: (value: string) => void;
}

const SettingTabs = ({ value, onValueChange }: Props) => {
	return (
		<Tabs value={value} onValueChange={(value) => onValueChange(value)}>
			<TabsList>
				<TabsTrigger value="profile">profile</TabsTrigger>
				<TabsTrigger value="theme">theme</TabsTrigger>
			</TabsList>
		</Tabs>
	);
};

export default SettingTabs;
