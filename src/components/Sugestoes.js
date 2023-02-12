import sugestao from "./Sugestao";
import SugestoesItems from "./SugestoesItems";

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestao.map((f)=>(
                <SugestoesItems key={f.usuario} sugestao={f} />
            ))}
        </div>
    )
}