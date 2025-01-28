import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [listOfPosts, setlistOfPosts] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {

      setlistOfPosts(response.data)
      console.og
    })
  }, [])

 const Posts = listOfPosts
console.log(Posts)
  return (
    <>
      <div className='App'>
        {Posts.map((value, key) => {
          return (
            <>
              <div className='title'>{value.title}</div>
            </>
          )
        })}
      </div>

    </>
  )
}

export default App
