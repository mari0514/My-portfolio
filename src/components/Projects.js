import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projectImg1 from '../assets/img/projectImg1.png';
import projectImg2 from '../assets/img/projectImg2.png';
import projectImg3 from '../assets/img/projectImg3.png';
import projectImg4 from '../assets/img/projectImg1.png';
import ProjectCard from './ProjectCard';

export const Projects = () => {

  const projects = [
    {
      title: 'PROJECT ONE',
      description: 'Design & Development',
      imgUrl: projectImg1,
    },
    {
      title: 'PROJECT TWO',
      description: 'Design & Development',
      imgUrl: projectImg2,
    },
    {
      title: 'PROJECT THREE',
      description: 'Design & Development',
      imgUrl: projectImg1,
    },
    {
      title: 'PROJECT Four',
      description: 'Design & Development',
      imgUrl: projectImg2,
    },
    {
      title: 'PROJECT Four',
      description: 'Design & Development',
      imgUrl: projectImg4,
    },
    {
      title: 'PROJECT Four',
      description: 'Design & Development',
      imgUrl: projectImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Quis pariatur cillum culpa nostrud exercitation est culpa commodo ea do non consequat eu. Voluptate incididunt mollit qui Lorem est enim labore esse velit incididunt id magna.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-venter align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Tab One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem Ipsum
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem Ipsum
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;