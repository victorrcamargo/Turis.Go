import SearchBar from "../components/search/search";
import AttractionView from "../components/AttractionView/AttractionView"; // Importe o novo componente
import { useEffect, useState } from "react";
import type { AttractionType } from "../types/Attraction";

export function HomePage() {
	const [attractions, setAttractions] = useState<AttractionType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPontos = async () => {
			try {
				const response = await fetch("http://localhost:5260/api/PontoTuristico");
				if (!response.ok) throw new Error("Falha ao buscar pontos turísticos");

				const data: AttractionType[] = await response.json();
				setAttractions(data);
			} catch (error) {
				console.error("Erro ao carregar pontos turísticos:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPontos();
	}, []);

	return (
		<div className="container mx-auto px-4 py-4 md:py-8 text-center flex flex-col items-center gap-4 md:gap-6">
			<div className="w-full">
				<h1 className="text-xl md:text-2xl font-medium">
					Bem-vindo ao <span className="text-2xl md:text-3xl font-black text-[#6C63FF]">Turis.Go!</span>
				</h1>
				<span className="text-sm md:text-base">Seu guia turístico virtual.</span>
			</div>

			<SearchBar />

			<div className="w-full md:max-w-5/6 mt-4 md:mt-8">
				<h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-left text-[#6C63FF]">
					Os mais conhecidos
				</h2>
				<div className="h-auto overflow-y-auto flex flex-col gap-3 md:gap-4 p-2 bg-gray-100 rounded-lg">
					{isLoading ? (
						<p className="text-gray-500 text-center">Carregando...</p>
					) : attractions.length === 0 ? (
						<p className="text-gray-500 text-center">Nenhum ponto encontrado.</p>
					) : (
						attractions.map((attraction) => <AttractionView key={attraction.id} attraction={attraction} />)
					)}
				</div>
			</div>
		</div>
	)
}
