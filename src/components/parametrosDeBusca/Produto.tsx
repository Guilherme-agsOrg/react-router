import { Link, useSearchParams} from "react-router-dom";

export default function Produto(){

    const [params] = useSearchParams();
    //params.has("outro");
    const nome = params.get("nome");
    const preco = params.get("preco");


    return (
        <div className="flex flex-col rounded-md p-7">
            <Link to=".." className="bg-zinc-700 text-white text-center p-2 m-2 black rounded w-full hover:bg-orange-500">Voltar</Link>
            <span className="text-2xl">{nome} custa {preco}</span>
        </div>
    )
}