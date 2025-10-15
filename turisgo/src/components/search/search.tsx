import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router";

function SearchBar() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const trimmed = query.trim();
		if (!trimmed) return;

		navigate("/notfound");

		// navigate(`/pontos?busca=${encodeURIComponent(trimmed)}`);
	}

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-md">
			<label className="input outline-0 w-full h-[50px]">
				<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2.5"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</g>
				</svg>
				<input
					type="search"
					required
					placeholder="Que ponto turístico iremos visitar hoje?"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</label>
		</form>
	)
}

export default SearchBar
