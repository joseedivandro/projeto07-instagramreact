import { useState } from "react";

export default function PostsItems(props) {

    const curtidas = Number(101);
    const [curtida, setCurtida] =useState(curtidas);
    const [coracao, setCoracao]=useState("heart-outline");
    const [classe, setClasse]= useState("");
    const [salvar,setSalvar]=useState("bookmark-outline");



    function mudanca(){
        if(coracao==="heart-outline"){
            setCoracao("heart");
            setClasse("vermelho");
            setCurtida(Number(curtida+1));
        }else{
            setCoracao("heart-outline");
            setClasse("");
            setCurtida(curtida-1);
        }
    }

    function salva(){
        if(salvar==="bookmark-outline"){
            setSalvar("bookmark");
        }else{
            setSalvar("bookmark-outline");
        }

    }
    return (
    
    
        <div class="post"  data-test="post">
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
                <img data-test="post-image" onDoubleClick={mudanca} src={props.post.postagem} alt={props.post.usuario} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={classe} name={coracao} onClick={mudanca}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={salvar} onClick={salva} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.post.curtidoPorFoto} alt={props.post.curtidoPorUser} />
                    <div class="texto">
                        Curtido por <strong data-test="likes-number">{props.post.curtidoPorUser}</strong> e <strong>outras {curtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>


   

    )
}