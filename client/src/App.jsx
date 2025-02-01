import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom'
import './App.css'
import Home from'./pages/Home'
import createPost from './pages/createPost'


function App() {
     return(
      <>

     <div className="App">
    <Router>
    <Link to={"/createpost"}>Create A Post</Link>
     <Link to={"/"}>Home page</Link>
    <Routes>
    <Route path="/" exact Component={Home} />
    <Route path="/createpost" exact Component={createPost} />
    </Routes>
    </Router>

  </div>
  </>
  )
}

export default App
