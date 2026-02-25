import { useEffect } from "react";
import { useAuthStore } from "../store";
import supabase from "@/core/supabase/client";

export default function useAuth() {
	const setUser = useAuthStore((state) => state.setUser);
	const setLoading = useAuthStore((state) => state.setLoading);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setUser(data?.session?.user ?? null);
			setLoading(false);
		});
		const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
			setUser(session?.user ?? null);
			setLoading(false);
		});
		return () => listener.subscription.unsubscribe();
	}, []);
}
