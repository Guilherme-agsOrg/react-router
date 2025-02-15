import { Route } from "react-router-dom";
import Formulario from "../pages/entendendoUseLocation/Formulario";
import Exibir from "../pages/entendendoUseLocation/Exibir";


const rotas = <Route path="entendendoUseLocation">
    <Route index element={<Formulario/>}/>
    <Route path="exibir" element={<Exibir/>}/>
</Route>

export default rotas;