import { useNavigate } from "react-router";

import { ArrowLeft, PlusCircle } from "phosphor-react";
import LocationForm from "../components/locationForm/LocationForm";
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
		if (!name.trim() || !uf.trim() || !city.trim() || !description.trim()) {
			alert("Preencha todos os campos obrigatórios antes de salvar.");
			return;
		}

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
		<div className="container mx-auto px-4 py-6 flex flex-col items-center justify-center">
			<h1 className="text-xl md:text-2xl font-medium text-[#6C63FF] mb-6">
				Cadastre o ponto desejado
			</h1>

			<div className="w-full max-w-md space-y-4">
				<div className="w-full">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nome"
						className="input w-full"
					/>
				</div>

				<div className="w-full">
					<LocationForm
						onChange={(uf, selectedCity) => {
							setUf(uf);
							setCity(selectedCity);
						}}
					/>
				</div>

				<div className="w-full">
					<input
						type="text"
						value={reference}
						onChange={(e) => setReference(e.target.value)}
						placeholder="Referência"
						className="input w-full"
					/>
				</div>

				<div className="w-full">
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Descrição"
						className="textarea w-full h-20"
					/>
				</div>

				<div className="w-full flex items-center justify-between pt-4">
					<Button
						buttonTitle={
							<div className="flex items-center gap-2">
								<ArrowLeft size={20} />
								<span>Voltar</span>
							</div>
						}
						onClick={() => navigate("/")}
					/>

					<Button
						type="button"
						onClick={handleSubmit}
						buttonTitle={
							<div className="flex items-center gap-2">
								<PlusCircle size={20} />
								<span>Salvar</span>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
}
