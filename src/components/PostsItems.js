export default function PostsItems(props) {

    const curtidas = 101;

    return (
    
    
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.post.imagem} alt={props.post.usuario} />
                    {props.post.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post.postagem} alt={props.post.usuario} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.post.curtidoPorFoto} alt={props.post.curtidoPorUser} />
                    <div class="texto">
                        Curtido por <strong>{props.post.curtidoPorUser}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>


   

    )
}