import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Personal Portfolio Logo.png';
import navIcon1 from '../assets/img/Nav Icon 1.svg';
import navIcon2 from '../assets/img/Nav Icon 2.svg';
import navIcon3 from '../assets/img/Nav Icon 3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo-nav-bar" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/arthurcavalcanteprofile/" key="icon1"><img src={navIcon1} alt="icon1" /></a>
                            <a href="https://www.facebook.com/arthurgustavofreirescavalcante/" key="icon2"><img src={navIcon2} alt="icon2" /></a>
                            <a href="https://www.instagram.com/oarthurcavalcante/" key="icon3"><img src={navIcon3} alt="icon3" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};