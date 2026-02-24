import AuthPage from "@/pages/AuthPage";
import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <AuthPage />,
	},
];

export default routes;
