import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import gitHubIcon from '../assets/img/github-icon.png';
import linkedInIcon from '../assets/img/linkedin-icon.png';
import instaIcon from '../assets/img/instagram-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo Image" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a className='me-3' href="https://github.com/mari0514">
                  <img src={gitHubIcon} alt='' />
                </a>
                <a className='me-3' href="https://www.linkedin.com/in/mari-miyazaki-4404a6247/">
                  <img src={linkedInIcon} alt='' />
                </a>
                <a className='me-3' href="https://www.instagram.com/marie.0514/">
                  <img src={instaIcon} alt='' />
                </a>
            </div>
            <p>CopyRight 2023. All Right Reservrd &copy; MariMiyazaki</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;