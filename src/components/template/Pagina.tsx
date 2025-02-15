import MenuInterno from "./MenuInterno";
interface PaginaProps {
    titulo: string;
    descricao?: string;
    links?: any;
    children?: any;
    className?: any;
    menu?:any
}


export default function Pagina(props: PaginaProps) {
    return (
        <main
            className={`w-full h-full flex flex-col 
             max-h-full ${props.links || props.menu ? "": "mt-12"}`}
        >
            {props.links ? <MenuInterno links={props.links} />:""}
            {props.menu}
            <div
                className={`text-zinc-300 p-6 rounded-md min-h-max 
                flex flex-col items-center text-lg ${props.className}`}
            >
                <h1 className="text-3xl">
                    <strong>{props.titulo}</strong>
                </h1>
                <p className="text-xl text-justify mb-8">{props.descricao}</p>
                {props.children}
            </div>
        </main>
    );
}
