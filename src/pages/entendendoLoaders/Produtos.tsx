import { Link, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
//import {useEffect, useState} from "react";

export default function Produtos() {

    // const [produtos, setProdutos] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const produtosAPI = await pegaProdutos();
    //         setProdutos(produtosAPI);
    //     })()

    // }, []);

    const produtos = useLoaderData();

    const produtosEmItens = produtos.map(produto => {
        return (
                <li className={`
                    text-gray-300 text-center
                    border-gray-300 border-solid border-2
                    rounded-md p-3 m-2
                    hover:text-orange-500 hover:border-orange-500
                `} key={produto.id}>
                    <Link to={`/entendendoLoaders/${produto.id}`}>
                        O produto {produto.id} de nome {produto.title} custa R${produto.price}
                    </Link>
                </li>
            )
    });

    return (
        <Pagina titulo="Produtos disponíveis">
            <ul className="p-0 overflow-clip">{produtosEmItens}</ul>
        </Pagina>
    )
}

export async function pegaProdutos() {
    const dados = await fetch("https://fakestoreapi.com/products?limit=10");
    const dadosJSON = await dados.json();
    return dadosJSON;
}