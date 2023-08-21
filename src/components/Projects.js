import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img(1).png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Garagio",
      imgUrl: projImg1,
    },
    {
      title: "Tech-Blog",
      imgUrl: projImg2,
    },
    {
      title: "Workout-Tracker",
      imgUrl: projImg3,
    },
    {
      title: "Book-Search-Engine",
      imgUrl: projImg4,
    },
    {
      title: "Text-Editor",
      imgUrl: projImg5,
    },
    {
      title: "Password-Challenge",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
