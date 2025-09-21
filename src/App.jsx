
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import User from './User'
import Post from './Post'
import Friends from './Friends'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//                    .then(res=>res.json())
// {
// const fetchFriends =async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     return res.json();
// }}

 const fetchPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
 }

function App() { 
  
  // const friendsPromise = fetchFriends();
     const postPromise = fetchPosts()
  return (
    <>
      
      <h1>Vite + React</h1>
{/* {  <Suspense fallback={<h3>loading....</h3>}>
      <User fetchUsers={fetchUsers}></User>
  </Suspense>} */}
      {/* {<Suspense fallback={<h3>messages....</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>} */}
      <Suspense fallback={<h3>messages are coming......</h3>}>
       <Post  postPromise={ postPromise}></Post>
      </Suspense>
      <Counter></Counter>
     <Batsman></Batsman>
     
    </>
  )
}

export default App
