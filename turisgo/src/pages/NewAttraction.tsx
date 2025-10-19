import { useNavigate } from "react-router";

import { ArrowLeft, PlusCircle } from "phosphor-react";
import LocationForm from "../components/LocationForm/LocationForm";
import { Button } from "../components/button/Button";
import { useState } from "react";

export function NewAttraction() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [uf, setUf] = useState("");
	const [city, setCity] = useState("");
	const [reference, setReference] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = async () => {
		const payload = {
			nome: name,
			uf: uf,
			cidade: city,
			referencia: reference,
			descritivo: description,
		};

		try {
			const res = await fetch("http://localhost:5260/api/PontoTuristico", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			console.log("Status da resposta:", res.status);

			if (!res.ok) {
				const errText = await res.text();
				console.error("Erro no POST:", errText);
				alert("Erro ao adicionar o ponto turístico: " + errText);
				return;
			}

			alert("Ponto turístico adicionado!");
			navigate("/");
		} catch (err) {
			console.error("Erro de conexão com servidor:", err);
			alert("Erro de conexão com o servidor!");
		}
	};

	return (
		<div className="w-full h-[800px] flex flex-col items-center justify-center">

			<h1 className="w-full text-center text-2xl ">Cadastre o ponto desejado</h1>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Nome"
					className="input w-full"
				/>
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<LocationForm onChange={(uf, selectedCity) => {
					setUf(uf);
					setCity(selectedCity);
				}} />
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<input
					type="text"
					value={reference}
					onChange={(e) => setReference(e.target.value)}
					placeholder="Referência"
					className="input w-full"
				/>
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Descrição"
					className="textarea h-24 w-full"
				/>
			</div>

			<div className="w-1/3 py-2 flex items-center justify-between">
				<Button
					buttonTitle={
						<>
							<ArrowLeft size={24} />
							Voltar
						</>
					}
					onClick={
						() => navigate("/")
					}
				/>

				<Button
					type="button"
					onClick={handleSubmit}
					buttonTitle={
						<>
							<PlusCircle size={24} />
							Salvar
						</>
					}
				/>
			</div>
		</div>
	)
}
