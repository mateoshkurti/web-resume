import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Relevant Experience</h2><br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Work Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Awards & Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h3>Sr. Technical Client Support Analyst</h3>
                        <p><strong>KUBRA Data Transfer Ltd. • 2022 - Present</strong></p>
                        <ul>
                          <li>Spearheading and collaborating on extensive company-wide projects across the entire software development life-cycle.</li>
                          <li>Providing immediate support to cross-functional teams during escalations, tight project schedules, and resource shortages.</li>
                          <li>Playing a key role in charting the course for solution road maps and release planning.</li>
                          <li>Actively involved in coding and shaping software architecture.</li>
                          <li>Analyzing client needs and translating them into actionable product implementations.</li>
                          <li>Addressing escalated support tickets to ensure timely resolutions.</li>
                          <li>Guiding the onboarding process for new recruits while offering ongoing assistance to team members.</li>
                        </ul>
                        <br />
                        <h3>Technical Client Support Analyst</h3>
                        <p><strong>KUBRA Data Transfer Ltd. • 2020 - 2022</strong></p>
                        <ul>
                          <li>Extensive involvement in programming and customer support activities.</li>
                          <li>Communicating effectively with clients via phone and/or email upon receiving cases/tickets.</li>
                          <li>Conducting thorough investigation, analysis, debugging, and issue resolution.</li>
                          <li>Implementing code changes, application edits, and cosmetic redesigns within established application functions and procedures, including rewriting and adding new functions and procedures.</li>
                          <li>Analyzing, designing, implementing, and coordinating parallel testing and migration with both clients and quality assurance teams.</li>
                          <li>Creating and publishing comprehensive knowledge base articles.</li>
                          <li>Providing on-call after-hours support as needed.</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h3>KUBRA iAssist</h3>
                        <p><strong>Solution Architect & Project Technical Lead</strong></p>
                        <p>This cloud-based application is designed to assist both internal and external users with all KUBRA products. It provides automated and after-hours support, eliminating the need for constant management. Additionally, it serves as a knowledge base, offering answers to product and procedural questions, and handling small-scale support tasks efficiently.</p>

                        <h3>KUBRA iMonitor</h3>
                        <p><strong>Initiator, Solution Architect & Lead</strong></p>
                        <p>This application, developed using C#, ASP.Net, and MS SQL, is automated and multi-threaded. It monitors all enterprise services and logs, with a particular emphasis on post-change monitoring. It provides extensive data and reports on recurring issues, facilitating transparency and enabling potential process improvements.</p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h3>Awards</h3>
                        <p>Judge's Choice • 2023<br />KUBRA, Hackathon</p>
                        <p>BEST MARKETING PLAN • 2019<br />Junior Achievement</p>
                        <br/>
                        <h3>Education</h3>
                        <p>Diploma in Computer Systems Technician: Software Engineering • 2021<br />Sheridan College</p>

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
