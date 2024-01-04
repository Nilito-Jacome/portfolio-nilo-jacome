import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="soy">
        <br />
        <p className="soy1">
          I studied at the Salesian Polytechnic University the career of
          electrical engineering, I have found in programming a passion for
          creation and research. The constant updates of my knowledge and
          technological skills, make it possible to offer best solutions, this
          added to my experience in data analysis, personnel management and
          direction of construction projects, make can offer a different level
          than just a programmer, I am in looking for new opportunities, to continue developing in this profession.
        </p>
        <br />
        <p className="soy1">
          I consider myself a calm, homelike person who likes the action movies,
          science fiction and anime.
        </p>
        <p className="soy1">
          Football (soccer) is another of my passions, I am from Quito Ecuador.
        </p>
      </div>
      <div className="card-certificates">
        <h1 className="title1">CERTIFICATES</h1>
        <div className="certificates">
          <img 
          src="./icon/titulo.jpg" 
          alt="titulo" 
          className="titul" 
          />
          <img
            src="./icon/full-stack.png"
            alt="full-stack"
            className="full-stack"
          />
          <img
            src="./icon/node_j.png"
            alt="node_js"
            className="node_js"
          />
          <img 
          src="./icon/react1.png" 
          alt="react1" 
          className="react1" 
          />
          <img
            src="./icon/fundamentos.png"
            alt="fundamentos"
            className="fundamentos"
          />
          <img
            src="./icon/Scrum.jpg"
            alt="scrum"
            className="scrum"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
