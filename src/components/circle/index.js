import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Image, Container, Overlay} from 'react-bootstrap';

const Circle = () => {
  return (<>
    <Container>
      <Row className="justify-content-md-center">
        <Col className="justify-content-md-center">
          <Image className="centerCircle" src="../../../static/circle1.png" width="300px" roundedCircle />
          <Overlay className="centerCircle" src="../../../static/emptycircle.png" width="300px" roundedCircle />
        </Col>
      </Row>
    </Container>
  </>

  )
}

  export default Circle
