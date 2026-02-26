import React, { useEffect, useRef } from "react";

interface Props {
	value: string;
	onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current && divRef.current.textContent !== value) {
			divRef.current.textContent = value;
		}
	}, [value]);

	const handleInput = () => {
		const text = divRef.current?.textContent || "";
		onChange(text);
	};

	return (
		<div className="relative w-full">
			<div
				ref={divRef}
				contentEditable
				suppressContentEditableWarning
				onInput={handleInput}
				className="min-h-[40px] w-full p-2.5 rounded-md text-base leading-6 
        focus:outline-none break-words whitespace-pre-wrap relative z-10"
			/>
			{!value.trim() && (
				<span className="absolute top-2.5 left-2.5 text-muted-foreground pointer-events-none">
					Message
				</span>
			)}
		</div>
	);
};

export default Input;
