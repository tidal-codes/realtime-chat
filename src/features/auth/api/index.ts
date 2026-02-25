import supabase from "@/core/supabase/client";

const authApi = {
	supabaseSigninWithOtp: async (email: string) => {
		const { data, error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				shouldCreateUser: true,
			},
		});

		if (error) throw error;
		return data;
	},
	verifySigninCode: async ({
		email,
		token,
	}: {
		email: string;
		token: string;
	}) => {
		const { data, error } = await supabase.auth.verifyOtp({
			email,
			token,
			type: "email",
		});
		if (error) throw error;
		return data;
	},
};

export default authApi;
