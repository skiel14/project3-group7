import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Image, Container} from 'react-bootstrap';



const Circle = () => {
  return (<>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="../../../static/circle1.png" width="450px" roundedCircle />
        </Col>

      </Row>
    </Container>
  </>

  )
}

  export default Circle
