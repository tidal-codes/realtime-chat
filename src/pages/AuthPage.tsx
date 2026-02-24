import AuthEntry from "@/features/auth/components/AuthEntry";
import BackgroundPattern from "@/shared/components/BackgroundPattern";

const AuthPage = () => {
	return (
		<div className="w-full h-screen">
			<BackgroundPattern>
				<div className="w-full h-full flex items-center justify-center px-3">
					<AuthEntry />
				</div>
			</BackgroundPattern>
		</div>
	);
};

export default AuthPage;
