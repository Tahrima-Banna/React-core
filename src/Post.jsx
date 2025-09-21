
import {use} from 'react'
import Posts from './Posts'
export default function Post({ postPromise}){
    console.log( postPromise);
      const posts = use( postPromise)
    return (
      
        <div className="section">
            <h3>Posts:{ posts.length}</h3>
            {
              posts.map(posts=><Posts key={posts.id} posts={posts}></Posts>)
            }
        </div>
    )
}