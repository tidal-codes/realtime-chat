import { format } from "date-fns";

export function extractTime(str: string) {
	const date = new Date(str);
	return format(date, "HH:mm");
}
