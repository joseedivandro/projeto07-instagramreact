import { useState } from "react";

export default function PostsItems(props) {

    const curtidas = Number(101);
    const [curtida, setCurtida] =useState(curtidas);
    const [coracao, setCoracao]=useState("heart-outline");
    const [classeRed, setClasseRed]= useState("");



    function mudanca(){
        if(coracao==="heart-outline"){
            setCoracao("heart");
            setClasseRed("vermelho");
            setCurtida(Number(curtida+1));
        }else{
            setCoracao("heart-outline");
            setClasseRed("");
            setCurtida(curtida-1);
        }
    }
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
                <img data-test="post-image" src={props.post.postagem} alt={props.post.usuario} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={classeRed} name={coracao} onClick={mudanca}></ion-icon>
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
                        Curtido por <strong>{props.post.curtidoPorUser}</strong> e <strong>outras {curtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>


   

    )
}