import type { ReactNode } from "react";

type ButtonProps = {
	buttonTitle: string | ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export function Button({ buttonTitle, onClick, disabled, type = "button" }: ButtonProps) {
	return (
		<button className="btn btn-primary" onClick={onClick} disabled={disabled} type={type}>
			{buttonTitle}
		</button>
	)
}
