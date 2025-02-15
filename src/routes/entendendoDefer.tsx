import { Route } from "react-router-dom";
import Produtos from "../pages/entendendoDefer/produtosDefer";
import { pegaProdutos } from "../pages/entendendoDefer/produtosDefer";


const rotas = <Route path="entendendoDefer" element={<Produtos/>} loader={pegaProdutos}>
</Route>

export default rotas;