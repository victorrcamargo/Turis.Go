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

export default function LocationForm() {
	const [estados, setEstados] = useState<State[]>([]);
	const [cidades, setCidades] = useState<City[]>([]);
	const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");
	const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("");

	useEffect(() => {
		fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
			.then((res) => res.json())
			.then((data: State[]) => setEstados(data))
			.catch((err) => console.error("Erro ao carregar estados:", err));
	}, []);

	useEffect(() => {
		if (!estadoSelecionado) {
			setCidades([]);
			return;
		}

		fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
			.then((res) => res.json())
			.then((data: City[]) => setCidades(data))
			.catch((err) => console.error("Erro ao carregar cidades:", err));
	}, [estadoSelecionado]);

	return (
		<div className="flex flex-1 justify-between items-center gap-4">
			<div>
				<label className="block text-sm font-medium">Estado</label>
				<select
					value={estadoSelecionado}
					onChange={(e) => {
						setEstadoSelecionado(e.target.value);
						setCidadeSelecionada("");
					}}
					className="select w-full"
				>
					<option value="">Selecione</option>
					{estados.map((estado) => (
						<option key={estado.id} value={estado.sigla}>
							{estado.sigla}
						</option>
					))}
				</select>
			</div>

			<div className="w-90">
				<label className="block text-sm font-medium">Cidade</label>
				<select
					value={cidadeSelecionada}
					onChange={(e) => setCidadeSelecionada(e.target.value)}
					disabled={!estadoSelecionado}
					className="select w-full"
				>
					<option value="">Selecione...</option>
					{cidades.map((cidade) => (
						<option key={cidade.id} value={cidade.nome}>
							{cidade.nome}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
