import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [listOfPosts, setlistOfPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
       setlistOfPosts(response.data);
      

    })
  }, []);

  

 console.log(listOfPosts);
 //console.log(postings[1].title);
// console.log(postings[2].title);

 return (
    <>
      <div className='App'>
        {listOfPosts.map((value, key) => {
          return (
            <>
            <div className='post'>
              <div className='title'> {value.title}</div>
               <div className='body'> {value.postTitle}</div>
                <div className='footer'> {value.username}</div>
              </div>
            </>
          )
        })}
      </div>

    </>
  ) 
}

export default App
