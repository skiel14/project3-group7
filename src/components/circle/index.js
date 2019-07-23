import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Image, Container} from 'react-bootstrap';
import './style.css';


const Circle = () => {
  return (<>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="circle.png" roundedCircle />
        </Col>

      </Row>
    </Container>
  </>

  )
}

  export default Circle
