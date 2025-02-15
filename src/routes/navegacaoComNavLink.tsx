import { Route } from 'react-router-dom';
import Inicio from '../pages/shared/inicio';
import Sobre from '../pages/shared/sobre';
import Contato from '../pages/shared/contato';
import MenuNavegacaoComNavLink from '../components/navegacaoComNavLink/Menu';

const rotas = (
    <Route path='navegacaoComNavLink'>
      <Route index element={<Inicio menu={<MenuNavegacaoComNavLink/>}/>}/>
      <Route path='sobre' element={<Sobre menu={<MenuNavegacaoComNavLink/>}/>}/>
      <Route path='contato' element={<Contato menu={<MenuNavegacaoComNavLink/>}/>}/>
    </Route>
);


export default rotas;