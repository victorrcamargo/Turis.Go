import { Link } from "react-router";
import type { AttractionType } from "../../types/Attraction";

export default function AttractionView({ attraction }: { attraction: AttractionType }) {
	return (
		<Link to={`/pontos/${attraction.id}`}>
			<div className="flex-1 flex-col items-center justify-start gap-4 px-8 py-4 text-left hover:bg-black/15">
				<h1 className="text-md font-medium text-[#6C63FF]">{attraction.nome}</h1>
				<p className="text-left text-sm">
					{attraction.descritivo}
				</p>
			</div>
		</Link>
	)
}
