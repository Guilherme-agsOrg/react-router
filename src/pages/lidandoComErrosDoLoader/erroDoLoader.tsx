import Pagina from "../../components/template/Pagina";

export default function ErroDoLoader(props){
    return (
        <Pagina titulo="Houve um problema" descricao={props.texto} links={props.links}></Pagina>
    )
}