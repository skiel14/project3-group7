import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Image, Container, Overlay} from 'react-bootstrap';



const Circle = () => {
  return (<>
    <Container>
      <Row>
        <Col className='text-center'>
          <Image src="../../../static/circle5th.png" width="300px" fluid />
          <Overlay src="../../../static/emptycircle.png" width="300px" fluid />
        </Col>
      </Row>
    </Container>
  </>

  )
}

  export default Circle
