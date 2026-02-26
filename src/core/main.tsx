// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";
import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Toaster } from "@/shared/ui/sonner";
import App from "./App";

const client = new QueryClient();
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
	// <StrictMode>
	<QueryClientProvider client={client}>
		<ThemeProvider defaultTheme="dark">
			<RouterProvider router={router} />
			<App />
			<Toaster />
		</ThemeProvider>
	</QueryClientProvider>,
	// </StrictMode>,
);
