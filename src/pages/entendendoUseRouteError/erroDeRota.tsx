import { useRouteError } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function ErroDeRota(props){

    const erro:any = useRouteError();
    const mensagem = erro.message ? erro.message : erro.data;

    return (
        <Pagina titulo="Houve um problema" descricao={mensagem} links={props.links}></Pagina>
    )
}