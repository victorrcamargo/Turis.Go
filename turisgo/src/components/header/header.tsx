import { useNavigate } from "react-router";
import { Button } from "../button/Button";

export function Header() {
	const navigate = useNavigate();
	return (
		<div className="navbar bg-base-100 shadow-md flex items-center justify-between px-8">
			<span className="text-3xl font-black text-[#6C63FF] hover:cursor-pointer hover:bg-black/10 p-2 rounded-md" onClick={() => navigate("/")}>Turis.Go!</span>
			<Button
				buttonTitle="Adicionar Ponto Turístico"
				onClick={() => navigate("/pontos/novo")}
			/>
		</div>
	)
}
