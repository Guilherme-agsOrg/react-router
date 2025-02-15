import Pagina from "../../components/template/Pagina";

export default function (props) {
    return <Pagina titulo="Inicio" menu={props.menu} links={props.links} descricao="Página Inicial"></Pagina>;
}
