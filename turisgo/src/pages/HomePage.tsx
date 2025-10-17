import SearchBar from "../components/search/search";
import AttractionView from "../components/AttractionView/AttractionView"; // Importe o novo componente

export function HomePage() {
	return (
		<div className="container mx-auto px-4 py-8 text-center flex flex-col items-center gap-6">
			<div>
				<h1 className="text-2xl font-medium">Bem-vindo ao <span className="text-3xl font-black text-[#6C63FF]">Turis.Go!</span></h1>
				<span>Seu guia turístico virtual.</span>
			</div>

			<SearchBar />

			<div className="w-full max-w-5/6 mt-8">
				<h2 className="text-xl font-semibold mb-4 text-left text-[#6C63FF]">Os mais conhecidos</h2>
				<div className="h-96 overflow-y-auto flex flex-col gap-4 p-2 bg-gray-100 rounded-lg">
					{Array.from({ length: 5 }).map((_, idx) => (
						<AttractionView key={idx} />
					))}
				</div>
			</div>
		</div>
	)
}
