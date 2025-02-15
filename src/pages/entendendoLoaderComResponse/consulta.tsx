//import { useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Consulta() {

    //const info = useLoaderData();

    return (
        <Pagina titulo="Resultado da Pesquisa">
            {/* <strong>{info}</strong> */}
        </Pagina>
    )
}

export async function loaderConsulta(){
    const dados = await fetch("https://fakestoreapi.com/products/1");
    //const response = new Response("Olá da response", {status:200}); //Exemplo de response.
    //throw new Response("Houve um problema"); //Exemplo de response de erro.
    return dados;
}