import React, {useEffect} from "react";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

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


  const getPosts = async(pageNumber = 1) => {
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
    getPosts()
  }

  return (
      <div>
      {posts.map((item) => {
        return (
          <Link
          key={item.id}
          to={`/posts/${item.id}`}
          className="post"
          >
          <h2>{item.title}</h2>
          <span>{item.body}</span>
        </Link>
      )
    })}
    <button onClick={createPost}>Create</button>
  </div>
  )
}

export default Posts
