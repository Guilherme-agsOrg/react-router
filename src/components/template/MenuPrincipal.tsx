import { IconActivity, IconClock, IconDirectionSign, IconExchange, IconFileAlert, IconLayoutNavbarCollapse, IconLoader, IconLocation, IconMenu, IconRefreshAlert, IconRoute, IconRouteOff, IconSearch, IconShare, IconX } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import Flex from "./Flex";
import { useState } from "react";

const itens: MenuItem[] = [
    {titulo: "Tipos de Links", url: "/tiposDeLinks", icone:<IconLayoutNavbarCollapse/>},
    {titulo: "Navegação Com NavLink", url: "/navegacaoComNavLink", icone:<IconDirectionSign/>},
    {titulo: "Pagina 404", url: "/pagina404", icone:<IconFileAlert/>},
    {titulo: "Parametros De Rota", url: "/parametrosDeRota", icone:<IconRoute/>},
    {titulo: "Parametros De Busca", url: "/parametrosDeBusca", icone:<IconSearch/>},
    {titulo: "Entendendo Use Location", url: "/entendendoUseLocation", icone:<IconLocation/>},
    {titulo: "Entendendo Actions", url: "/entendendoActions", icone:<IconActivity/>},
    {titulo: "Entendendo Loaders", url: "/entendendoLoaders", icone:<IconLoader/>},
    {titulo: "Lidando Com Erros Do Loader", url: "/lidandoComErrosDoLoader", icone:<IconRefreshAlert/>},
    {titulo: "Entendendo Loader Com Response", url: "/entendendoLoaderComResponse", icone:<IconRefreshAlert/>},
    {titulo: "Entendendo UseRoute Error", url: "/entendendoUseRouteError", icone:<IconRouteOff/>},
    {titulo: "Usando Loader De Outra Rota", url: "/usandoLoaderDeOutraRota", icone:<IconShare/>},
    {titulo: "Entendendo Defer", url: "/entendendoDefer", icone:<IconClock/>},
    {titulo: "Entendendo User Fetcher", url: "/entendendoUseFetcher", icone:<IconExchange/>},
];

export default function MenuPrincipal() {
    const [mini, setMini] = useState(false);

    function renderizarItens() {
        return itens.map((item: MenuItem) => (
            <MenuPrincipalItem icone={item.icone} titulo={item.titulo} url={item.url} mini={mini} />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={() => setMini(!mini)}>
                    {mini ? <IconMenu /> : <IconX />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarItens()}</nav>
        </aside>
    );
}
