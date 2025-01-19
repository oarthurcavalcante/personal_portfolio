import { Container , Col , Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Personal Portfolio Logo.png"
import navIcon1 from '../assets/img/Nav Icon 1.svg';
import navIcon2 from '../assets/img/Nav Icon 2.svg';
import navIcon3 from '../assets/img/Nav Icon 3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            < Container >
                < Row className="align-items-center">
                    <MailchimpForm />
                    < Col sm={6} >
                        <img src={logo} alt='logo' class="d-flex justify-content-start" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/arthurcavalcanteprofile/"> <img src={navIcon1} alt="navIcon1" /> </a>
                            <a href="https://www.facebook.com/arthurgustavofreirescavalcante/"> <img src={navIcon2} alt="navIcon2" /> </a>
                            <a href="https://www.instagram.com/oarthurcavalcante/"> <img src={navIcon3} alt="navIcon3" /> </a>
                        </div>
                        <p>Copyrights 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}