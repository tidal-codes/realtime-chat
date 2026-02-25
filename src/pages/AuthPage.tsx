import MainLayout from "@/core/Layouts/MainLayout";
import AuthEntry from "@/features/auth/components/AuthEntry";

const AuthPage = () => {
	return (
		<MainLayout>
			<div className="w-full h-full flex items-center justify-center px-3">
				<AuthEntry />
			</div>
		</MainLayout>
	);
};

export default AuthPage;
