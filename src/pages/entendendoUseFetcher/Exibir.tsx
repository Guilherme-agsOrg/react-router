import { useActionData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir(){

    const {ok, nome, idade} = useActionData();

    return (
        <Pagina titulo="Dados inseridos no formulário">
            {
                ok ? <p className="text-xl my-10">{nome} tem {idade} anos de idade.</p>
                    : <p className="text-xl my-10">Deu ruim</p>
            }
        </Pagina>
    )
}

export async function actionFormulario({request}){
    
    const dadosFormulario = await request.formData();
    const dadosParaSalvar = {
        nome: dadosFormulario.get("nome"),
        idade: dadosFormulario.get("idade"),
    };
    const resposta = salvar(dadosParaSalvar);

    return resposta;
};

function salvar(dados){
    const dadosFinais = {
        nome: !!dados.nome ? dados.nome : "Desconhecido",
        idade: dados.idade,
    }
    // Salva os dados no backend e retorna true ou false
    const retorno = !!dados.nome ? true : false;

    return {ok: retorno, ...dadosFinais}
};