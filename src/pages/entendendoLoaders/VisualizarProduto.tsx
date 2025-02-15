import { Link, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function VisualizarProduto() {

    const {title, description, price} = useLoaderData();

    return (
        <Pagina titulo={title}>
            <p className="w-full m-2 text-center overflow-w-auto max-h-48">
                {description}
            </p>
            <p className="text-bolder text-center m-2">
                R${price}
            </p>
            <button className="bg-zinc-700 text-white p-2 w-full rounded-md hover:bg-orange-500">
                <Link to="../">Voltar</Link>
            </button>
        </Pagina>
    )
}

export async function pegaProduto({params}) {
    return await fetch(`https://fakestoreapi.com/products/${params.id}`);
};