import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import react from '../assets/img/react.png';
import javascript from '../assets/img/java-script.png';
import colorSharp from '../assets/img/color-sharp.jpg';

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Officia consequat adipisicing do commodo.<br></br>Nulla eiusmod eiusmod occaecat laborum.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={react} alt="Item Image" />
                  <h5>Web Development1</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Item Image" />
                  <h5>Web Development2</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Item Image" />
                  <h5>Web Development3</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Item Image" />
                  <h5>Web Development4</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="Color Image" /> */}
    </section>
  )
}

export default Skills;