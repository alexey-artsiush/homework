import React, {Component, useEffect} from "react";
import { useState } from "react/cjs/react.development";

// class Posts extends Component {
// state = {
//   posts:[]
// }

//   componentDidMount = () =>{
//     this.getPosts()
//   }

//   getPosts = () => {
//     //getPosts = async () => {                    ЕСЛИ ЧЕРЕЗ AWAIT
//     //const response = await fetch("https://jsonplaceholder.typicode.com/posts")  
//     //const data = await response.json()
//     //this.setState({posts:data})


//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response=> response.json())
//     .then(data=> {
//       this.setState({posts:data})
//     })
//   }

//   render(){
//     return (
//       <div>
//         {this.state.posts.map((item) => {
//           return (
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <span>{item.body}</span>
//             </div>
//           )
//         })}
//       </div>
//     )
// }}





const Posts = () =>{

  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts()
  }, [])


  const getPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")  
    const data = await response.json()
    setPosts(data)
  }

  const createPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        iserId: 1,
        title: 'TEST TITLE',
        body: 'TEST TEXT'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json() 
    console.log(data)
    setPosts( [...posts, data] ); // через push нельзя! это мутабельное изменение ( и там и там)
  }

  return (
      <div>
      {posts.map((item) => {
        return (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <span>{item.body}</span>
        </div>
      )
    })}
    <button onClick={createPost}>Create</button>
  </div>
  )
}

export default Posts
