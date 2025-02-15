import { IconCode } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import React from "react";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, url, mini } = props;

    return (
        <NavLink
            to={url}
            className={({ isActive }) => {
                let formatacaoInicial = `flex items-center gap-2 text-zinc-400 rounded-md
                hover:bg-zinc-800 px-3 py-2 `;
                let formatacao = isActive ? formatacaoInicial + `text-orange-400 bg-zinc-900` : formatacaoInicial;
                return formatacao;
            }}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
        </NavLink>
    );
}
