import { Await, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
import {Suspense} from "react";
//import {useEffect, useState} from "react";

export default function Produtos() {

    const dadosDoLoader:any = useLoaderData();

    const produtosEmItens = (produtos) => {
        const produtosFormatados = produtos.map(produto => {
            return (
                    <li className={`
                        text-gray-300 text-center
                        border-gray-300 border-solid border-2
                        rounded-md p-3 m-2
                        hover:text-orange-500 hover:border-orange-500
                    `} key={produto.id}>
                        O produto {produto.id} de nome {produto.title} custa R${produto.price}
                    </li>
                )
        })
        return produtosFormatados;
    };

    return (
        <Pagina titulo="Produtos disponíveis">
            <ul className="p-0 overflow-clip">
                <Suspense fallback={<p className="text-xl">Carregando...</p>}>
                    <Await 
                        resolve={dadosDoLoader.produtos}
                        children={(produtos) => { return produtosEmItens(produtos);}}
                    >
                    </Await>
                </Suspense>
            </ul>
        </Pagina>
    )
}

async function preparaProdutos(){
    const dados = await fetch("https://fakestoreapi.com/products?limit=10");
    const dadosJSON = await dados.json();
    return dadosJSON;
}

export async function pegaProdutos() {
    return ({produtos: preparaProdutos()});
}