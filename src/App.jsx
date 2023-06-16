import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBarPort from './components/NavBarPort'
import Home from './components/Home'
import About from './components/About'
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
            element = {<About/>}
            path = "/about"
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
