import { useLocation, useNavigate } from "react-router";
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
			<ul className="grid gap-4">
				{results.map((ponto) => (
					<li key={ponto.id} className="border p-4 rounded-lg shadow">
						<h2 className="text-lg font-semibold">{ponto.nome}</h2>
						<p>{ponto.descritivo}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
