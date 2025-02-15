import { Route } from "react-router-dom";
import Produtos from "../pages/entendendoLoaders/Produtos";
import { pegaProdutos } from "../pages/entendendoLoaders/Produtos";
import VisualizarProduto, { pegaProduto } from "../pages/entendendoLoaders/VisualizarProduto";

const rotas = <Route path="entendendoLoaders">
    <Route index element={<Produtos/>} loader={pegaProdutos}></Route>
    <Route path=":id" element={<VisualizarProduto/>} loader={pegaProduto}></Route>
</Route>

export default rotas;