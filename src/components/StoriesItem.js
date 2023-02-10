


export default function StoriesItem(props){

    return (
    
    <div class="story">
    <div class="imagem">
        <img src={props.story.imagem} alt={props.story.usuario} />
    </div>
    <div class="usuario">
      <p>{props.story.usuario}</p>  
    </div>
</div>

);
}