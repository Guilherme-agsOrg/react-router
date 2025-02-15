import { NavLink } from "react-router-dom";

export default function MenuInterno(props) {
    const formatacaoLink = (isActive) => {
        return `hover:bg-zinc-800 
                text-lg font-bold text-zinc-300 hover:text-orange-500
                py-2 px-4 rounded-md mx-4 
                ${isActive ? " text-orange-500" : ""}`;
    };

    const navlinks = props.links?.map(link=>{
        return (<NavLink to={link.url} key = {link.url} className={({ isActive }) => formatacaoLink(isActive)} end>
            {link.text}
        </NavLink>)
    })

    return (
        <nav className="mb-6 flex ">
            {navlinks}
        </nav>
    );
}
