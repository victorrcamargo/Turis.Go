import { useNavigate } from "react-router";
import { Button } from "../button/Button";
import LocationForm from "../LocationForm/LocationForm";
import { ArrowLeft, PlusCircle } from "phosphor-react";

export default function NewAttraction() {
	const navigate = useNavigate();
	return (
		<div className="w-full h-[800px] flex flex-col items-center justify-center">

			<h1 className="w-full text-center text-2xl ">Cadastre o ponto desejado</h1>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<fieldset className="fieldset w-full">
					<input type="text" className="input  w-full" placeholder="Nome" />
				</fieldset>
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<LocationForm />
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<fieldset className="fieldset w-full">
					<input type="text" className="input w-full" placeholder="Referência" />
				</fieldset>
			</div>

			<div className="w-1/3 py-2 flex items-center justify-center">
				<fieldset className="fieldset w-full">
					<textarea className="textarea h-24 w-full" placeholder="Descrição"></textarea>
				</fieldset>
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
