import React, {useState} from "react";
import { useEffect } from "react";

import {useParams } from 'react-router-dom'

const Post = () => {
  const params = useParams()
  console.log(params)

  const [post, setPost] = useState({})


  const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()
    setPost(data)
  }

  useEffect(()=>{
    getPost()
  }, [])
  

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post