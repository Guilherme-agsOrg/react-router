import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function Formulario() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const fetcher = useFetcher();
    const {data, state} = fetcher;

    useEffect(() => {
        if(state==="loading" && data){
            window.alert(`${data.nome} tem ${data.idade} anos.`)
        }
    }, [data, state])

    return (
        <Pagina titulo="Formulario - Entendendo Use Fetcher">
            <fetcher.Form method="post" action="/entendendoUseFetcher/exibir" className="flex flex-col justify-center text-xl text-center">
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade}/>
            </fetcher.Form>
        </Pagina>
    )
}