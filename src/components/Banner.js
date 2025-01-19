import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/Header Image.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useMemo } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

const toRotate = useMemo(() => ["/Software Engineer", "/Fullstack Dev", "/Web Developer"], []);

useEffect(() => {
    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(50); // Faster deleting
        } else {
            setDelta(100); // Faster typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(200);
        }
    };

    const ticker = setInterval(() => {
        tick();
    }, delta);

    return () => clearInterval(ticker);
}, [loopNum, isDeleting, text, delta, period, toRotate]);


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="text-start" >
                        <TrackVisibility>
                        { ({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                {'Hi, I am Arthur Cavalcante'} 
                                <br/>
                                <span className="wrap">{text || "/"}</span>
                            </h1>
                            <p>
                                A Software Engineer with Business background in Australia 🇦🇺⚡
                            </p>
                            <button onClick={() => console.log('connect')}>
                                Let's Connect! <ArrowRightCircle size={25} />
                            </button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt=" " />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};