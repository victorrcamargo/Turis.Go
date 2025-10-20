import type { ButtonProps } from "../../types/Attraction";

export function Button({ buttonTitle, onClick, disabled, type = "button" }: ButtonProps) {
	return (
		<button
			className="
			px-4 rounded-full py-2 bg-[#6C63FF] flex text-white
			transition-all duration-300 ease-in-out
			hover:bg-[#5651d5] hover:shadow-md
			disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center
		"
			onClick={onClick}
			disabled={disabled}
			type={type}>
			{buttonTitle}
		</button>
	)
}
