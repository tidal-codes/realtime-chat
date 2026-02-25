import type { ReactNode } from "react";

const BackgroundPattern = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative w-full h-full bg-zinc-950 overflow-hidden">
			<div
				className="
                    absolute inset-0 pointer-events-none

                    bg-gradient-to-br from-blue-500 to-cyan-500
                    [mask-image:url('/backgroundPattern.svg')]
                    [mask-repeat:repeat-x]
                    [mask-size:auto_100%]
                    [mask-type:luminance]

                    [-webkit-mask-image:url('/backgroundPattern.svg')]
                    [-webkit-mask-repeat:repeat-x]
                    [-webkit-mask-size:auto_100%]
                    [-webkit-mask-type:luminance]
                    opacity-70
                "
			/>

			<div className="relative z-10 w-full h-full">{children}</div>
		</div>
	);
};

export default BackgroundPattern;
