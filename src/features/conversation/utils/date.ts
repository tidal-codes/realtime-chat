import { format, isToday, differenceInDays, isSameYear } from "date-fns";
import { enUS } from "date-fns/locale";

export function formatChatTimestamp(timestamp: string) {
	const date = new Date(timestamp);

	if (isToday(date)) {
		return format(date, "hh:mm a", { locale: enUS });
	}

	const diffDays = differenceInDays(new Date(), date);

	if (diffDays >= 1 && diffDays < 7) {
		return format(date, "EEEE", { locale: enUS });
	}

	if (isSameYear(new Date(), date)) {
		return format(date, "d MMMM", { locale: enUS });
	}

	return format(date, "d MMMM yyyy", { locale: enUS });
}
