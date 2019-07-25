import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Image, Container, Overlay} from 'react-bootstrap';



const Circle = () => {
  return (<>
    <Container>
      <Row>
        <Col>
          <Image src="../../../static/circle1.png" width="300px" roundedCircle />
          <Overlay src="../../../static/emptycircle.png" width="300px" roundedCircle />
        </Col>
      </Row>
    </Container>
  </>

  )
}

  export default Circle
