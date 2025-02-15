import {Link} from "react-router-dom";
import Flex from "./Flex";
import React from "react";
import { IconArrowsRandom } from "@tabler/icons-react";

interface LogoProps {
    subtitulo?: string;
    grande?: boolean;
    col?: boolean;
    className?: string;
}

export default function Logo(props: LogoProps) {
    return (
        <Link to="/" className="cursor-pointer">
            <Flex col={props.col} centerCross className={props.className}>
                <div
                    className={`
                    flex justify-center items-center
                    bg-orange-400 rounded-full
                    ${props.grande ? "w-[150px] h-[150px]" : "w-[50px] h-[50px]"}
                `}
                >
                    <IconArrowsRandom size={props.grande ? 100 : 30} />
                </div>
                <Flex col centerCross gap={0}>
                    <div
                        className={`
                        ${props.grande ? "text-4xl" : "text-2xl"}
                        font-black
                    `}
                    >
                        React Router
                    </div>
                    {props.subtitulo && <div className="text-zinc-500 text-sm">{props.subtitulo}</div>}
                </Flex>
            </Flex>
        </Link>
    );
}
