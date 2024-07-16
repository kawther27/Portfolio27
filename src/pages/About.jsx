import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/About.css';
import profilePhoto from '../assets/images/photoProfile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={profilePhoto} alt="Profile" className="img-fluid rounded-circle profile-photo" />
          </Col>
          <Col md={8}>
            <div className="about-text">
              <h2>About Me</h2>
              <h3>Hi There! I'm <span className='name'>Kawther</span> </h3> 
              <p className="lead">
               I'm a dedicated Computer Science student with 
               a passion for developing fun and intuitive 
               applications. I strive to create seamless
               user experiences through innovative interface design. 
               I hold a diploma in Mechatronics and have a deep interest 
               in mechanics and cars.I LOVE MINIMAL
               AND BRUTALIST DESIGN
               Beyond tech, I enjoy exploring fashion, art, and diverse
               cultures through travel and culinary adventures</p>
              <Button variant="warning" href="./src/assets/files/CV.pdf" download className="download-cv">Download CV</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
