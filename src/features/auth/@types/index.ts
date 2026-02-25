import { type z } from "zod";
import type { codeSchema, emailSchema } from "../hooks/forms";
import type { User } from "@supabase/supabase-js";
export type EmailSchemaType = z.infer<typeof emailSchema>;
export type CodeSchemaType = z.infer<typeof codeSchema>;

export interface AuthStore {
	user: User | null;
	isLoading: boolean;
	setUser: (user: User | null) => void;
	setLoading: (loading: boolean) => void;
}
