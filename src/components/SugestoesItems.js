export default function SugestoesItems(props) {
    return (
       

            <div class="sugestao">
                <div class="usuario">
                    <img src={props.sugestao.imagem} alt={props.sugestao.usuario} />
                    <div class="texto">
                        <div class="nome">{props.sugestao.usuario}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
       
    )
}