import { Route } from "react-router-dom";
import Formulario from "../pages/entendendoUseFetcher/Formulario";
import Exibir, { actionFormulario } from "../pages/entendendoUseFetcher/Exibir";


const rotas = <Route path="entendendoUseFetcher">
    <Route index element={<Formulario/>}/>
    <Route path="exibir" element={<Exibir/>} action={actionFormulario}/>
</Route>

export default rotas;