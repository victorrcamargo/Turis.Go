import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import type { AttractionType } from "../types/Attraction";
import { ArrowLeft, Trash } from "phosphor-react";
import { Button } from "../components/button/Button";

export function AttractionDetails() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const [attraction, setAttraction] = useState<AttractionType | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPonto = async () => {
			try {
				const response = await fetch(`http://localhost:5260/api/PontoTuristico/${id}`);
				if (!response.ok) throw new Error("Erro ao buscar ponto turístico");

				const data: AttractionType = await response.json();
				setAttraction(data);
			} catch (error) {
				console.error("Erro ao carregar ponto turístico:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPonto();
	}, [id]);

	const handleDelete = async () => {
		if (!confirm("Tem certeza que deseja excluir este ponto turístico?")) return;

		try {
			const response = await fetch(`http://localhost:5260/api/PontoTuristico/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				const errText = await response.text();
				throw new Error(errText || "Erro ao deletar ponto turístico");
			}

			alert("Ponto turístico excluído com sucesso!");
			navigate("/");
		} catch (error) {
			console.error("Erro ao excluir ponto turístico:", error);
			alert("Erro ao excluir o ponto turístico.");
		}
	};

	if (isLoading) {
		return <div className="text-center p-10 text-gray-500">Carregando...</div>;
	}

	if (!attraction) {
		navigate("/notFound");
		return null;
	}

	return (
		<div className="container mx-auto px-4 py-8 text-left">
			<div className="w-full flex justify-between items-center mb-4">
				<Button
					type="button"
					onClick={() => navigate('/')}
					buttonTitle={
						<>
							<ArrowLeft size={25} className="inline mb-1 mr-1" />
							Voltar
						</>
					}
				/>
				<Button
					type="button"
					onClick={handleDelete}
					buttonTitle={<Trash size={32} />}
				/>
			</div>

			<h1 className="text-3xl font-bold text-[#6C63FF] mt-4 mb-2">{attraction.nome}</h1>
			<p className="text-gray-600 mb-2">{attraction.descritivo}</p>

			<div className="text-sm text-gray-500 mb-4">
				📍 {attraction.cidade} - {attraction.uf}
			</div>

			{attraction.referencia && (
				<p className="text-gray-400 text-sm">Referência: {attraction.referencia}</p>
			)}
		</div>
	);
}
