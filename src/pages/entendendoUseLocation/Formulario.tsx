import { useNavigate } from "react-router-dom";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { useState } from "react";

export default function Formulario() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const navigate = useNavigate();

    function envia(e){
        e.preventDefault();
        navigate("/entendendoUseLocation/exibir", {state:{
            nome: !!nome ? nome : "Desconhecido", idade
        }});
    }

    return (
        <Pagina titulo="Formulario - useLocation">
            <form method="post" onSubmit={envia} className="flex flex-col justify-center text-xl text-center">
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade}/>
            </form>
        </Pagina>
    )
}