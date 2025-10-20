import { useEffect, useState } from "react";
import type { State, City, LocationFormProps } from "../../types/Attraction";

export default function LocationForm({ onChange }: LocationFormProps) {
	const [states, setStates] = useState<State[]>([]);
	const [cities, setCities] = useState<City[]>([]);
	const [selectedState, setSelectedState] = useState<string>("");
	const [selectedCity, setSelectedcity] = useState<string>("");

	useEffect(() => {
		fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
			.then((res) => res.json())
			.then((data: State[]) => setStates(data))
			.catch((err) => console.error("Erro ao carregar estados:", err));
	}, []);

	useEffect(() => {
		if (!selectedState) {
			setCities([]);
			if (onChange) onChange("", "");
			return;
		}

		fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
			.then((res) => res.json())
			.then((data: City[]) => setCities(data))
			.catch((err) => console.error("Erro ao carregar cidades:", err));
	}, [selectedState]);

	useEffect(() => {
		if (onChange) onChange(selectedState, selectedCity);
	}, [selectedState, selectedCity]);

	return (
		<div className="flex flex-1 justify-between items-center gap-4">
			<div>
				<select
					value={selectedState}
					onChange={(e) => {
						setSelectedState(e.target.value);
						setSelectedcity("");
					}}
					className="select w-[80px]"
				>
					<option value="">Selecione</option>
					{states.map((state) => (
						<option key={state.id} value={state.sigla}>
							{state.sigla}
						</option>
					))}
				</select>
			</div>

			<div className="w-90">
				<select
					value={selectedCity}
					onChange={(e) => setSelectedcity(e.target.value)}
					disabled={!selectedState}
					className="select w-full"
				>
					<option value="">Selecione...</option>
					{cities.map((city) => (
						<option key={city.id} value={city.nome}>
							{city.nome}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
