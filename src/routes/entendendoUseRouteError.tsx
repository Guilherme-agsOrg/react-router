import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import ErroDoLoader from "../pages/entendendoUseRouteError/erroDeRota";

const links = [
    {url: "/entendendoUseRouteError", text: "Inicio"},
    {url: "/entendendoUseRouteError/sobre", text: "Sobre"},
];

const rotas = <Route path="entendendoUseRouteError"
errorElement={<ErroDoLoader texto="Algo de errado não esta certo" links={links}/>}
                >
    <Route 
        index 
        element={<Inicio links={links}/>} 
        loader={() => {throw new Error("Houve um erro em Início")}}
    />
    <Route 
        path="sobre" 
        element={<Sobre links={links}/>} 
        loader={() => {throw new Response("Houve um erro em Sobre")}}
    />

</Route>

export default rotas;