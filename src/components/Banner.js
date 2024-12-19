import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/Header Image.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["/Software Engineer", "/Fullstack Dev", "/Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, isDeleting, delta]); // Update dependencies

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(50); // Speed up deleting
        } else {
            setDelta(100); // Speed up typing
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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="text-start" >
                        <TrackVisibility>
                        { ( { isVisible } ) =>
                        <div className={"isVisible ? animate__animated animate__fadeIn"}>
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
                        <img src={HeaderImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
      )
};