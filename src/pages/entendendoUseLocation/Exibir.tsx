import { useLocation } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir(){

    const location = useLocation();

    const {nome, idade} = location.state;

    return (
        <Pagina titulo="Dados inseridos no formulário">
            <p className="text-xl my-10">{nome} tem {idade} anos de idade.</p>
        </Pagina>
    )
}