import "./css/style1.css";
import myPic from "./img/mariam2.jpg";
import nlp from "./img/nlp2.jpg";
import web from "./img/web.png";
import tour from "./img/netherlandsMapTour.png";
import rdf from "./img/RDF.png";
import classdiagram2 from "./img/classdiagram2.png";
import game from "./img/game1.jpg";
import githubIcon from './img/github.png';
import researchgate from './img/researchgate.png';
import linkelinIcon from './img/linkelin icon.png'
import weather from "./img/weatherApp.png";
import chat from "./img/chatBox.png";
import Todo from "./img/todolist.png";

const Home = () => {
  return (
    <div>
      <section className="intro" id="home">
        <h1 className="section--title section--title--intro">
          Welcome to my portfolio, I am <strong>Maryam Sajjadian</strong>
        </h1>
        <p className="section--subtitle section--subtitle--intro"> Geodata Specialist </p>
        <img src={myPic} alt="" className="intro--img" />
      </section>
      <section className="about-me" id="about">
        <p className="about-me__body">I am Maryam Sajjadian, a data analyst. I am skilled at data management, programming, and Web applications
          development; I have a working knowledge of python, JavaScript (react), rational and graph databases, and query
          languages. You can consider me as a curious and devoted employee with a lot of experience. I am an optimistic and
          passionate professional with solid technical and analytical skills. I have a strong ability to work autonomously and find
          novel approaches to a problem.</p>
      </section>
      {/* my work */}
      <section className="my--work" id="myWork">
        <h2 className="section--title section--title--myWork">My Work</h2>
        <p className="section--subtitle section--subtitle--myWork"> Selected projects </p>
        {/* portfolio image item   */}
        <div className="portfolio">
          <a href="https://github.com/mariamsajadian/NLPcodes" target="_blank" rel="noreferrer" className="portfolio--item">
            <img src={nlp} alt="" className="portfolio--img" />
          </a>
          <a href="https://www.researchgate.net/publication/355152792_GeodataVisitor_a_component-based_Self-_service_GIS_application_Internship_Report" target="_blank" rel="noreferrer" className="portfolio--item">
            <img src={web}  alt="" className="portfolio--img" />
          </a>
          <a href="https://netherlandstour.netlify.app/" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={tour} alt="" className="portfolio--img" />
          </a>
          <a href="https://github.com/mariamsajadian/Tic-Tac-Toe-in-React-" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={game} alt="" className="portfolio--img" />
          </a>

          <a href="https://github.com/mariamsajadian/Workflow-annotation" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={rdf} alt="" className="portfolio--img" />
          </a>

          <a href="img/classdiagram2.png" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={classdiagram2} alt="" className="portfolio--img" />
          </a>
          <a href="https://github.com/mariamsajadian/ChatBox" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={chat} alt="" className="portfolio--img" />
          </a>
          <a href="https://github.com/mariamsajadian/weatherAPP" target="_blank" className="portfolio--item"rel="noreferrer">
            <img src={weather} alt="" className="portfolio--img" />
          </a>
          <a href="https://hardcore-newton-e67456.netlify.app/" target="_blank" className="portfolio--item" rel="noreferrer">
            <img src={Todo} alt="" className="portfolio--img" />
          </a>
        </div>
      </section>
      <section>
      </section>
      <footer className="footer">
        <a href="mailto:mariamsajadian@yahoo.com" className="footer--link">mariamsajadian@yahoo.com</a>
        <ul className="social--list">
          <li className="social--list--item">
            <a className="social--list--link" href="https://www.linkedin.com/in/maryam-sajjadian-a91a771ba/"
              target="_blank" rel="noreferrer"><img src={linkelinIcon} alt="" className="socialMediaIcon" /></a>
          </li>
          <li className="social--list--item">
            <a className="social--list--link" href="https://www.researchgate.net/profile/Mariam-Sajadian"
              target="_blank" rel="noreferrer"><img src={researchgate} alt="" className="socialMediaIcon" /></a>
          </li>
          <li className="social--list--item">
            <a className="social--list--link" rel="noreferrer" href="https://github.com/mariamsajadian" target="_blank"><img
              src={githubIcon} alt="" className="socialMediaIcon" /></a>
          </li>
        </ul>
      </footer>
    </div>

  );
}

export default Home;