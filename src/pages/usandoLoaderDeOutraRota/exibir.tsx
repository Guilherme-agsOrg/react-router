import { Link, useRouteLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir(){
    const dados:any = useRouteLoaderData("loaderRotaPai");
    const descricao = `${dados.nome} tem  ${dados.idade} anos.`;
    return (
        <Pagina titulo="Exibir" descricao={descricao}>
            <Link to="/usandoLoaderDeOutraRota/editar" className="hover:underline hover:text-orange-500">Editar</Link>
        </Pagina>
    )
}