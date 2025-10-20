import SearchBar from "../components/search/search";
import AttractionView from "../components/attractionView/AttractionView";
import { useEffect, useState } from "react";
import type { AttractionType } from "../types/Attraction";
import imgUrl from "../assets/turisgo-logo.png";

export function HomePage() {
	const [attractions, setAttractions] = useState<AttractionType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const fetchPontos = async () => {
			try {
				const response = await fetch("http://localhost:5260/api/PontoTuristico");
				if (!response.ok) throw new Error("Falha ao buscar pontos turísticos");

				const data: AttractionType[] = await response.json();
				setAttractions(data);
				setTimeout(() => setIsVisible(true), 100);
			} catch (error) {
				console.error("Erro ao carregar pontos turísticos:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPontos();
	}, []);

	return (
		<div className="container mx-auto px-4 py-4 md:py-8 text-center flex flex-col items-center gap-4 md:gap-6 overflow-hidden">
			<div className="w-full space-y-2 transition-all duration-700 ease-out transform translate-y-0 opacity-100">
				<div className="text-xl md:text-2xl font-medium text-gray-600 flex flex-col md:flex-row items-center justify-center gap-2">
					<h1>Bem-vindo ao</h1>
					<img src={imgUrl} alt="Turis.Go Logo" className="h-16 max-h-16 w-auto object-contain" />
				</div>
				<span className="text-sm md:text-base text-gray-600">Seu guia turístico virtual.</span>
			</div>

			<div className="w-full transition-all duration-500 ease-out delay-200 transform translate-y-0 opacity-100 flex justify-center">
				<SearchBar />
			</div>

			<div className={`
	            w-full md:max-w-4/6 mt-4 md:mt-8
	            transition-all duration-700 ease-out transform
	            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
	        `}>
				<h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-left text-[#6C63FF] flex items-center">
					<span>Os mais conhecidos</span>
					<div className="h-0.5 flex-1 ml-4 bg-gradient-to-r from-[#6C63FF] to-transparent"></div>
				</h2>

				<div className="rounded-xl bg-white shadow-lg border border-gray-100 overflow-auto md:max-h-[400px]">
					{isLoading ? (
						<div className="flex items-center justify-center h-32">
							<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6C63FF]"></div>
						</div>
					) : attractions.length === 0 ? (
						<div className="text-gray-500 text-center py-8">
							<p className="text-lg">Nenhum ponto encontrado</p>
							<p className="text-sm text-gray-400">Que tal adicionar o primeiro?</p>
						</div>
					) : (
						<div className="divide-y divide-gray-100">
							{attractions.map((attraction, index) => (
								<div
									key={attraction.id}
									className={`
	                                    transition-all duration-500 ease-out
	                                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
	                                `}
									style={{ transitionDelay: `${index * 100}ms` }}
								>
									<AttractionView attraction={attraction} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
