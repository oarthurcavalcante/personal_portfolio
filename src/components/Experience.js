import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/Color Sharp.png"

export const Experience = () => {
      return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div class="about-experience-section">
                            <h2 class="about-experience-heading">Experience</h2>
                            <div class="about-experience-item">
                                <div class="about-experience-date">2023 - Present</div>
                                <div>
                                    <h2 class="about-experience-title">Vapiano Soul</h2>
                                    <p class="about-experience-description">Leading a staff team along differente shifts and events. Developing business strategies across different levels of the organization. Purchasing and negotiating different types of products for the company.</p>
                                    <div class="about-experience-technologies">
                                        <span class="about-experience-technologies">Project Management</span>
                                        <span class="about-experience-technologies">Supply Management</span>
                                        <span class="about-experience-technologies">Business Analisys</span>
                                        <span class="about-experience-technologies">PDCA & SDCA</span>
                                    </div>
                                </div>
                            </div>
                            <div class="about-experience-item">
                                <div class="about-experience-date">2021 - 2022</div>
                                <div>
                                    <h2 class="about-experience-title">Falconi - Associate</h2>
                                    <p class="about-experience-description">
                                        Analysis of extensive databases and preparation of reports for high-level clients. 
                                        Lead preparation and execution of client meetings, confidently
                                        presenting analyses.
                                        Management of an amount of R$70 million distributed on 200 clients.
                                        Analytical skills to support high-net-worth clients (over $1M invested),
                                        gaining expertise in financial forecasting, and business analysis.</p>
                                    <div class="about-experience-technologies">
                                        <span class="about-experience-technologies">Data Analisys</span>
                                        <span class="about-experience-technologies">Power BI</span>
                                        <span class="about-experience-technologies">Automations</span>
                                        <span class="about-experience-technologies">Advanced Excel</span>
                                    </div>
                                </div>
                            </div>
                            <div class="about-experience-item">
                                <div class="about-experience-date">2021 - 2022</div>
                                <div>
                                    <h2 class="about-experience-title">Falconi</h2>
                                    <p class="about-experience-description">
                                        Advanced knowledge of Microsoft Office Suite. Business Intelligence
                                        (BI) tools such as BI, Tableau, and KNIME.
                                        Operational analysis, systems modeling, and statistical concepts
                                        application. Familiarity with advanced data analysis tools such as SQL,
                                        R and Python.
                                        Project management skills, Agile and SCRUM methodologies.
                                        Confidently apply PDCA and SDCA methodologies.
                                        Exposure to operations, manufacturing, supply chain, and logistics
                                        functions.
                                    </p>
                                    <div class="about-experience-technologies">
                                        <span class="about-experience-technologies">Javascript</span>
                                        <span class="about-experience-technologies">Python</span>
                                        <span class="about-experience-technologies">HTML</span>
                                        <span class="about-experience-technologies">CSS</span>
                                        <span class="about-experience-technologies">Saas</span>
                                        <span class="about-experience-technologies">React</span>
                                        <span class="about-experience-technologies">Next.js</span>
                                        <span class="about-experience-technologies">Typescript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-education-section">
                            <h2 class="about-education-heading">Education</h2>
                            <div class="about-education-item">
                                <div class="about-education-date">2024 - 2026</div>
                                <div>
                                    <h2 class="about-education-title">Griffith University - Master's Degree in Information Technology</h2>
                                    <p class="about-education-description">Majors: Data Analytics, Information Systems and Enterprise Architecture, Networking and Cyber Security, Software Development and Information Technology. </p>
                                </div>
                            </div>
                            <div class="about-education-item">
                                <div class="about-education-date">2019 - 2021</div>
                                <div>
                                    <h2 class="about-education-title">Unileao University - Bachelor's Degree in Business</h2>
                                    <p class="about-education-description">Majors: Business Intelligence, Corporate Finance, Investments and Finance, Economy, Statistics, Industry Operation, Human Resources, Logistics and Marketing. </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" alt="background image left" src={colorSharp} />
        </section>

    )
}