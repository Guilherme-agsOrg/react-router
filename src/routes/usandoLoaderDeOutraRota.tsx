import { Route } from "react-router-dom";
import Exibir from "../pages/usandoLoaderDeOutraRota/exibir";
import Editar from "../pages/usandoLoaderDeOutraRota/editar";

function dadosLoader(){
    return { nome: "Marcos", idade: 12 };
}

const rotas = <Route path="usandoLoaderDeOutraRota" id="loaderRotaPai" loader={dadosLoader}>
    <Route index element={<Exibir/>}/>
    <Route path="editar" element={<Editar/>}/>
</Route>

export default rotas;