import type { ReactNode } from "react";

export type AttractionType = {
	id: number;
	nome: string;
	localizacao: string;
	uf: string;
	cidade: string;
	referencia: string;
	descritivo: string;
}

export type State = {
	id: number;
	nome: string;
	sigla: string;
}
export type City = {
	id: number;
	nome: string;
}

export type LocationFormProps = {
	onChange?: (uf: string, city: string) => void;
}

export type ButtonProps = {
	buttonTitle: string | ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}
