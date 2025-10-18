import type { AttractionType } from "../../types/Attraction";

export default function AttractionView({ attraction }: { attraction: AttractionType }) {
	return (
		<a
			className="w-full flex justify-center items-center hover:bg-black/15"
			href="/attraction"
		>
			<div className="flex-1 flex-col items-center justify-start gap-4 px-8 text-left">
				<h1 className="text-2xl font-medium text-[#6C63FF]">{attraction.nome}</h1>
				<p className="text-left">
					{attraction.descritivo}
				</p>
			</div>
		</a>
	)
}
