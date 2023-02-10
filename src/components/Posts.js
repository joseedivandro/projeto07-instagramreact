import PostsItems from "./PostsItems";
import post from "./Post";


export default function Posts (){


    return (   
        
    <div class="posts">
   {post.map((f)=> (
    <PostsItems post={f}/>
   ))}
</div>
    );
}