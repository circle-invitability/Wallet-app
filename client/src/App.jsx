import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom'
import './App.css'
import Home from'./pages/Home'


function App() {
     return(
      <>

     <div className="App">
    <Router>
    <Routes>
    <Route path="/" exact Component={Home} />
    </Routes>
    </Router>

  </div>
  </>
  )
}

export default App
