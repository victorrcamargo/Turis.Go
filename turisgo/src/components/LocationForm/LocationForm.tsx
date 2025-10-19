import { useEffect, useState } from "react";

interface State {
	id: number;
	nome: string;
	sigla: string;
}
interface City {
	id: number;
	nome: string;
}

interface LocationFormProps {
	onChange?: (uf: string, city: string) => void;
}

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
				<label className="block text-sm font-medium">Estado</label>
				<select
					value={selectedState}
					onChange={(e) => {
						setSelectedState(e.target.value);
						setSelectedcity("");
					}}
					className="select w-full"
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
				<label className="block text-sm font-medium">Cidade</label>
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
