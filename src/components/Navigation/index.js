import React, {useEffect, useState} from "react";

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=> {
    getPosts()
  }, [])

  const getPosts = async (pageNumber) => {
    const response = await fetch ('')
    const data = await response.json()
    setPosts(data)
  }

  const createPosts = async () => {
    const response = await fetch ('', {
      method: 'POST',
      body: JSON.stringify({
        userID:1,
        title: "TEST TITLE",
        body: "TEST TEXT"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    getPosts()
  }

  return (
    <div>
      {posts.map((item=> {
        return (
          <div key = {item.id}>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
          </div>
        )
      }))}
    </div>
  )
}