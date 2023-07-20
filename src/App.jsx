import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBarPort from './components/NavBarPort'
import Home from './components/Home'
import About1 from './components/About1'
import Proyectos from './components/Proyectos'

function App() {
 

  return (
    <>
      <HashRouter>
        <NavBarPort/>
        <Routes>
          <Route
            element = {<Home/>}
            path = "/"
          />
          <Route
            element = {<About1/>}
            path = "/about1"
          />
          <Route
            element = {<Proyectos/>}
            path = "/proyectos"
          />                       
        </Routes>
      
      </HashRouter>
    </>
  )
}

export default App
