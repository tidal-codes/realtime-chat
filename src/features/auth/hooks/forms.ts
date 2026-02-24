import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CodeSchemaType, EmailSchemaType } from "../@types";
export const emailSchema = z.object({
	email: z.string().email(),
});
export const codeSchema = z.object({
	code: z.string().min(6, "The code must be 6 digits long."),
});

export function useEmailForm() {
	const {
		register,
		setFocus,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<EmailSchemaType>({
		resolver: zodResolver(emailSchema),
	});

	return {
		register,
		setFocus,
		handleSubmit,
		resetField,
		errors,
	};
}
export function useCodeForm() {
	const {
		register,
		setFocus,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<CodeSchemaType>({
		resolver: zodResolver(codeSchema),
	});

	return {
		register,
		setFocus,
		handleSubmit,
		resetField,
		errors,
	};
}
