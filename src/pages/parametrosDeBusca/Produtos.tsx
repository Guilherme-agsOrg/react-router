import { Link, Outlet } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Produtos(){
    return (
        <Pagina titulo="Produtos" descricao="Produtos disponíveis" className="justify-between">
            <ul className="m-2 mb-2 list-disc">
                <li><Link to="/parametrosDeBusca/produto?nome=caderno&preco=10.99" className="hover:underline">Caderno</Link></li>
                <li><Link to="/parametrosDeBusca/produto?nome=lapis&preco=1.99" className="hover:underline">Lapis</Link></li>
                <li><Link to="/parametrosDeBusca/produto?nome=borracha&preco=2.50" className="hover:underline">Borracha</Link></li>
            </ul>
            <Outlet/>
        </Pagina>
    )
}