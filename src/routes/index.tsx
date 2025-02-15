import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/template/Layout';
import Pagina404 from '../pages/shared/pagina404';
import rotasTiposDeLinks from './tiposDeLinks';
import rotasNavegacaoComNavLink from './navegacaoComNavLink';
import rotasPagina404 from './pagina404';
import rotasParamentrosDeRota from './parametrosDeRota';
import rotasParametrosDeBusca from './parametrosDeBusca';
import rotasEntendendoUseLocation from './entendendoUseLocation';
import rotasEntendendoActions from './entendendoActions';
import rotasEntendendoLoaders from './entendendoLoaders';
import rotasLidandoComErrosDoLoader from './lidandoComErrosDoLoader';
import rotasEntendendoLoaderComResponse from './entendendoLoaderComResponse';
import rotasEntendendoUseRouteError from './entendendoUseRouteError';
import rotasUsandoLoaderDeOutraRota from './usandoLoaderDeOutraRota';
import rotasEntendendoDefer from './entendendoDefer';
import rotasEntendendoUseFetcher from './entendendoUseFetcher';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element= {<Layout/>}>
    {rotasTiposDeLinks}
    {rotasNavegacaoComNavLink}
    {rotasPagina404}
    {rotasParamentrosDeRota}
    {rotasParametrosDeBusca}
    {rotasEntendendoUseLocation}
    {rotasEntendendoActions}
    {rotasEntendendoLoaders}
    {rotasLidandoComErrosDoLoader}
    {rotasEntendendoLoaderComResponse}
    {rotasEntendendoUseRouteError}
    {rotasUsandoLoaderDeOutraRota}
    {rotasEntendendoDefer}
    {rotasEntendendoUseFetcher}
    <Route path='*' element={<Pagina404/>}/>
  </Route>
));

export default router;