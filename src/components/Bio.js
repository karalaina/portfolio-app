import React from 'react';
import {
  Container, Row,
  Col, Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bio = () => (
  <div>
    <Container>
      <h1>KARA CAMPBELL</h1>
      <Row>
        <Col xs={12} md={4} className="profile-image">
          <Image
            src={require('../images/profile.jpg')}
            alt=""
            roundedCircle
          />
        </Col>
        <Col md={6}>
          <p className="bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non tortor et augue placerat convallis id tempus mauris. Nullam ut quam ac diam vestibulum fermentum. In ut ante mauris.</p>
          <div className="profile-icons">
            <a href="https://github.com/karalaina" title="GitHub"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
            <a href="https://www.linkedin.com/in/kara-campbell-b9063110b/" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://www.twitter.com" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter-square']} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Bio;
