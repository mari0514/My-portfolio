import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Mari Miyazaki.", "a Front-end Web Developer.", "enthusiastic." ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      <Row className='align-item-center'>
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) => 
            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
              <span className='tagline'>
                Welcome to Mari's portfolio
              </span>
              <h1>
                {`Hello there, `}
                <br />
                {`I am `}
                <span className='wrap'>{text}</span>
              </h1>
              <p>Culpa commodo cillum minim proident cupidatat incididunt id sit eu ad dolore do aute.</p>
              <button>
                <a href='mailto:mari.myzk98@gmail.com?subject=From Portfolio'>
                Let's Connect <ArrowRightCircle size={25} />
                </a>
              </button>
            </div>
          }
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header Image" />
        </Col>
      </Row>
      </Container>
    </section>
  )
}
export default Banner;
