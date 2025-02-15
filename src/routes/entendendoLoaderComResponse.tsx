import { Route } from "react-router-dom";
import Consulta, { loaderConsulta } from "../pages/entendendoLoaderComResponse/consulta";


const rotas = <Route path="entendendoLoaderComResponse">
    <Route index element={<Consulta/>} loader={loaderConsulta}></Route>
</Route>

export default rotas;