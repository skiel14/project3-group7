import React from 'react';
import './style.css';
import {Card, CardImg, CardBody, CardText, Col, Row, Container} from 'react-bootstrap';
import NavBarComponent from '../navbar'
import RadioBtns from '../radio-btns'



const Saved = () => {
  return (<>
  <NavBarComponent />
    <Container>
      <Row>
        <Col md={12}>
          <div className="page-header">
            <h1>Bach to the Basics</h1>
          </div>
        </Col>
      </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src="images/bach-cool-1.jpg" ></Card.Img>
            </Card>
          </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Let's get Bach to the Basics! What are scales? Why should people learn them? Where should I start? Here you can learn scales, compose your own songs, and more! Learn the "Fun" damentals on our Practice page!! Regular piano playing offers different physical and physiological advantages to players. It sharpens fine motor skills, improves dexterity and hand-eye coordination.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card style={{ width: '23rem' }}>
              <Card.Body>
                <Card.Title>Cats jammin out</Card.Title>
                <Card.Img variant="top" src="images/cat.gif" alt="Cat"></Card.Img>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
</>

  )
}

  export default Saved
