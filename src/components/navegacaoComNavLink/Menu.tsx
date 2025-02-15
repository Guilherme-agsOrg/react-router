import { NavLink } from "react-router-dom";

export default function Menu(){

    const formatacao = ({isActive}) => `text-lg font-bold text-zinc-300
                        py-2 px-4 mx-4 rounded-md
                        hover:bg-zinc-800 hover:text-orange-500
                        ${ isActive ? "text-orange-500" : "text-zinc-300"}`;

    return (
        <nav className="mb-6 flex">
            {/* <NavLink className={formatacao} style={({isActive}) => ({backgroundColor: isActive ? "red" : "blue"})} to="/navegacaoComNavLink" end>Inicio</NavLink> */}
            <NavLink className={formatacao} to="/navegacaoComNavLink" end>Inicio</NavLink>
            <NavLink className={formatacao} to="/navegacaoComNavLink/sobre">Sobre</NavLink>
            <NavLink className={formatacao} to="/navegacaoComNavLink/contato">Contato</NavLink>
        </nav>
    )
}