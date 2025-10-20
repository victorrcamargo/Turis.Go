import { Link, useLocation, useNavigate } from "react-router";
import type { AttractionType } from "../types/Attraction";

export function SearchResults() {
	const location = useLocation();
	const navigate = useNavigate();
	const state = location.state as { results?: AttractionType[] };
	const results = state?.results ?? [];

	if (results.length === 0) {
		navigate("/notfound");
	}

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Resultados da busca</h1>
			{results.map((ponto) => (
				<Link
					className="w-full flex justify-center items-center hover:bg-black/15 transition duration-300 hover:rounded-lg mb-4"
					to={`/pontos/${ponto.id}`}
					key={ponto.id}
				>
					<div className="w-full p-4 rounded-lg shadow">
						<h1 className="text-3xl font-bold text-[#6C63FF] mt-4 mb-2">{ponto.nome}</h1>
						<p className="text-gray-600 mb-2">{ponto.descritivo}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
