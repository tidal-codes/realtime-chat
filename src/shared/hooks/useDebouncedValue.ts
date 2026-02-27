import { useState, useEffect, useRef } from "react";

export default function useDebouncedValue<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<T | undefined>(
		undefined,
	);
	const handlerRef = useRef<number>(null);

	useEffect(() => {
		if (handlerRef.current) {
			clearTimeout(handlerRef.current);
		}

		handlerRef.current = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			if (handlerRef.current) clearTimeout(handlerRef.current);
		};
	}, [value, delay]);

	return debouncedValue;
}
