import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Proyectos from "./proyectos/Proyectos";
import Contact from "./contacto/Contact";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <HashRouter>        
        <Routes>
          <Route
            path = "/"
            element = {<Home/>}            
          />
          <Route
            path = "/about"
            element = {<About/>}            
          />
          <Route
            path = "/proyectos"
            element = {<Proyectos/>}            
          />  
          <Route
            path = "/contact"
            element = {<Contact/>}            
          />                     
        </Routes>      
      </HashRouter>

    </div>
  );
}

export default App;
