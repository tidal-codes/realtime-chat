import AuthPage from "@/pages/AuthPage";
import ChatPage from "@/pages/ChatPage";
import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <AuthPage />,
	},
	{
		path: "/c",
		element: <ChatPage />,
	},
];

export default routes;
