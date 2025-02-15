import MenuPrincipal from "./MenuPrincipal";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Flex from "./Flex";

interface LayoutProps {
    titulo?: string;
    subtitulo?: string;
    children?: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div
            className={`
            flex h-screen w-screen
            bg-zinc-900 text-white
        `}
        >
            <MenuPrincipal />
            <Flex col className={`flex-1 p-5`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo></Conteudo>
            </Flex>
        </div>
    );
}
