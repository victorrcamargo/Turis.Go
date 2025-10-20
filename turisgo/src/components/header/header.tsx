import { useNavigate } from "react-router";
import { Button } from "../button/Button";
import imgUrl from "../../assets/turisgo-logo.png";
import { List, MapPin, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="navbar bg-base-100 shadow-md flex items-center justify-between px-8">
			<img
				src={imgUrl}
				alt="Logo"
				className="h-16 max-h-16 w-auto object-contain hover:cursor-pointer"
				onClick={() => navigate("/")}
			/>
			<div className="hidden sm:block">
				<Button
					buttonTitle={
						<>
							<MapPin size={22} />
							<span className="ml-2">Quero adicionar!</span>
						</>
					}
					onClick={() => navigate("/pontos/novo")}
				/>
			</div>

			<div className="sm:hidden relative z-50">
				<button
					className="p-2 rounded-md hover:bg-base-200 transition-colors duration-200"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <List size={28} />}
				</button>

				{/* Overlay com animação */}
				<div
					className={`
                        fixed inset-0 bg-black/40 z-40 left-0 top-0
                        transition-opacity duration-300 ease-out
                        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}
					style={{ marginTop: '0' }}
					onClick={() => setMenuOpen(false)}
				/>

				{/* Menu dropdown */}
				<div
					className={`
                        absolute right-0 top-16 bg-base-100 shadow-lg z-50
                        rounded-lg border border-base-200 w-56 p-3
                        flex flex-col gap-2
                        transition-all duration-300 ease-out
                        ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
                    `}
					onClick={(e) => e.stopPropagation()}
				>
					<Button
						buttonTitle={
							<>
								<MapPin size={22} />
								<span className="ml-2">Quero adicionar!</span>
							</>
						}
						onClick={() => {
							setMenuOpen(false);
							navigate("/pontos/novo");
						}}
					/>
					<span className="text-gray-500 text-[11px] text-center">Made with ♡ by Victor Machado</span>
				</div>
			</div>
		</header>
	)
}
