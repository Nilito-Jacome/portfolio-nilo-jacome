import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBarPort from './components/NavBarPort'
import Home from './components/Home'
import About from './components/About'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'



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
          <Route
            element = {<Contacto/>}
            path = "/contacto"
          />             
        </Routes>
      
      </HashRouter>
    </>
  )
}

export default App
