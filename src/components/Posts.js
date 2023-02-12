import PostsItems from "./PostsItems";
import post from "./Post";


export default function Posts (){


    return (   
        
    <div class="posts">
   {post.map((f)=> (
    <PostsItems key={f.usuario} post={f}/>
   ))}
</div>
    );
}