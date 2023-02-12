
import StoriesItem from "./StoriesItem"
import story from "./Story"

export default function Stories() {


    return (
        <div class="stories">
            {story.map((f)=>(
                <StoriesItem  key={f.usuario} story={f}/>
            ))}

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
       
    )
}