import { useState } from "react"

export default function Usuario(){

let fotoInicial = "assets/catanacomics.svg"
const nomeInicial = "catanacomics"
const [foto, setFoto] = useState(fotoInicial)
const [nomeDoUsuario, setNomeDoUsuario] = useState(nomeInicial)


function trocarFoto(){
  const fotoNova = prompt("qual foto deseja colocar?");
  if(!fotoNova){
    alert("você digitou valor inválido")
    
  }else{
    setFoto(fotoNova);
  }
}

function trocarNome(){
  const novoNome = prompt("qual nome deseja colocar?");
  if(!novoNome){
    alert("você digitou valor inválido")
    
  }else{
    setNomeDoUsuario(novoNome);

  }
}

   return (
    <div class="usuario">
    <img data-test="profile-image"src={foto} alt={foto} onClick={trocarFoto}/>
    <div class="texto">
      <span>
        <strong data-test="name">{nomeDoUsuario}</strong>
        <ion-icon data-test= "edit-name" name="pencil"onClick={trocarNome} ></ion-icon>
      </span>
    </div>
  </div>
   )
}