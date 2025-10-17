export default function AttractionView() {
	return (
		<a
			className="w-full flex justify-center items-center hover:bg-black/15"
			href="/attraction"
		>
			<div className="flex-1 flex-col items-center justify-start gap-4 px-8 text-left">
				<h1 className="text-2xl font-medium text-[#6C63FF]">Attraction View</h1>
				<p className="text-left">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</p>
			</div>
		</a>
	)
}
