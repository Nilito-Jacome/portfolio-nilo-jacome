import "./Home.css";
import Spining from "../home/Spining";

function Home() {

    return(
        <div className="Home">
            <div className="container">
                <div className="container1">
                    <Spining text="DEVELOPER WEB FULL-STACK "/>
                </div>
                <div className="container2">
                    <h1 className="title"></h1>
                    <h2 className="who"> My name is Nilo Jácome</h2>
                    <p className="info">I am an Electrical Engineer and FULL-STACK web developer, I handle some technologies, my desire is to belong to a software or application development company, I consider that my skills and aptitudes fit this profile.</p>
                </div>
            </div>
            <div className="technologies">
                <div className="skill">                    
                    <h2>Technological Skills</h2>
                </div>
                <div className="iconos1">
                    <div className="vert"></div>
                    <div className="iconos">
                        <div className="html">
                            <img src="./icon/html.png" alt="" />  
                        </div>
                        <div className="css">
                            <img src="./icon/css.png" alt="" />
                        </div>
                        <div className="javascript">
                            <img src="./icon/javascript.png" alt="" />               
                        </div>
                        <div className="react">
                            <img src="./icon/react.png" alt="" />
                        </div>
                        <div className="node">
                            <img src="./icon/node.png" alt="" />
                        </div>
                        <div className="postgre">
                            <img src="./icon/postgre.png" alt="" />
                        </div>
                        <div className="github">
                            <img src="./icon/github2.png" alt="" />
                        </div>
                        <div className="dbeaver">
                            <img src="./icon/dbeaver.png" alt="" />
                        </div>
                        <div className="redux">
                            <img src="./icon/redux.png" alt="" />
                        </div>
                        <div className="boots">
                            <img src="./icon/boots.png" alt="" />
                        </div>
                        <div className="expres">
                            <img src="./icon/expres.png" alt="" />
                        </div>
                    </div>
                    <div className="vert"></div>
                </div>
            </div>
        </div>
    );    
}

export default Home;
