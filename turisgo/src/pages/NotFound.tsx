import { ArrowUUpLeft } from 'phosphor-react';
import TourSvg from '../assets/dog-not-found.svg';
import { Button } from '../components/button/Button';
import { useNavigate } from 'react-router';

export function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center text-center px-4 mt-20">
			<div className="mb-10">
				<img
					src={TourSvg}
					alt="Ilustração de turista perdida"
					className="max-w-3xs mx-auto"
				/>
			</div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-2">
				Oops! Nada foi encontrado.
			</h2>
			<p className="text-gray-600 max-w-md mb-6">
				Parece que o ponto turístico que você procurou não existe ou foi removido.
				Tente uma nova pesquisa ou volte para a página inicial.
			</p>
			<Button
				buttonTitle={
					<>
						<ArrowUUpLeft size={32} /> Voltar ao início
					</>
				}
				onClick={() => navigate("/")}
			/>
		</div>
	)
}
