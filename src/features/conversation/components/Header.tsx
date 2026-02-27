import AppSearchInput from "@/shared/components/AppSearchInput";
import HeaderMenuButton from "@/shared/components/HeaderMenuButton";

const Header = () => {
	return (
		<div className="w-full flex items-center gap-2 px-2 py-3">
			<HeaderMenuButton />
			<AppSearchInput />
		</div>
	);
};

export default Header;
