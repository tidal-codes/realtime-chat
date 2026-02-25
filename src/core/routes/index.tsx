import ConversationView from "@/features/conversation/components/ConversationView";
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
		children: [
			{
				path: ":username",
				element: <ConversationView />,
			},
		],
	},
];

export default routes;
