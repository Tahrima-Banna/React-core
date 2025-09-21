export default function Posts({posts}){

    const {title,body}=posts
    return(
        <div>
            <p>Title:{posts.title.slice(0,5)}</p>
             <p>Body:{posts.body.slice(0,50)}....</p>
        </div>
    )
}