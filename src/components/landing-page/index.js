import React from 'react';
import './style.css';
import {Card, CardImg, CardBody, CardText} from 'react-bootstrap';
import NavBarComponent from '../navbar'
import RadioBtns from '../radio-btns'



const Saved = () => {
  return (<>
  <NavBarComponent />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="page-header">
            <h1>Bach to the Basics</h1>
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-5">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="images/bach-cool-1.jpg" ></Card.Img>
                <Card.Body>
                  <Card.Text>
                   Let's get Bach to the Basics! Here you can learn scales, compose your own songs, and more!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          <div class="col-7">
            <Card style={{ width: '23rem' }}>
              <Card.Body>
                <Card.Title>The Circle of Fifths</Card.Title>
                <Card.Img variant="top" src="images/circle.png" alt="Circle of fifths"></Card.Img>
                {/* <Card.Link href="#">Card Link</Card.Link> */}
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    < RadioBtns />
</>

  )
}

  export default Saved
