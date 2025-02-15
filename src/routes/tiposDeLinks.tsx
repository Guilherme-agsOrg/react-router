import { Route } from 'react-router-dom';
import Inicio from '../pages/shared/inicio';
import Sobre from '../pages/shared/sobre';
import Contato from '../pages/shared/contato';
import MenuTiposDeLinks from '../components/tiposDeLinks/Menu';

const rotas = (
    <Route path='tiposDeLinks'>
      <Route index element={<Inicio menu={<MenuTiposDeLinks/>}/>}/>
      <Route path='sobre' element={<Sobre menu={<MenuTiposDeLinks/>}/>}/>
      <Route path='contato' element={<Contato menu={<MenuTiposDeLinks/>}/>}/>
    </Route>
);


export default rotas;