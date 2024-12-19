import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/neon_lp.jpeg";
import projImg2 from "../assets/img/movers_lp.png";
import projImg3 from "../assets/img/portfolio_lp.jpeg";
import colorSharp2 from "../assets/img/Color Sharp 2.png";
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
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>

                    <TrackVisibility>
                        { ( { isVisible } ) =>
                        <div className={"isVisible ? animate__animated animate__slideInUp"}>
                            <h2>Projects</h2>
                            <p>Some Projects I am developing currently:</p>
                        </div>}
                    </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                            {projects.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                    </Row>
                                </Tab.Pane>
                
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>

                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="Background Design"
            />
        </section>
    );
};