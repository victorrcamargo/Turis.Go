import SearchBar from "../components/search/search";

export function HomePage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-center flex flex-col items-center gap-6">
				<div>
					<h1 className="text-2xl font-medium">Bem-vindo ao <span className="text-3xl font-black text-[#6C63FF]">Turis.Go!</span></h1>
					<span>Seu guia turístico virtual.</span>
				</div>
				<SearchBar />
			</div>
		</div>
	)
}
