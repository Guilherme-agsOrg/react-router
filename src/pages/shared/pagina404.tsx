import Pagina from "../../components/template/Pagina";

export default function (props) {
    return <Pagina titulo="404" menu={props.menu} descricao="Página não encontrada" 
            className={`flex flex-col justify-center align-center h-full`}></Pagina>;
}
