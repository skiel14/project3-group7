import React from 'react';
import './style.css';
import {Card, CardImg, CardBody, CardText} from 'react-bootstrap';
import NavBarComponent from '../navbar'
import RadioBtns from '../radio-btns'



const Saved = () => {
  return (<>
  <NavBarComponent />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header">
            <h1>Bach to the Basics</h1>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="col-4">
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src="images/bach-cool-1.jpg" ></Card.Img>
              </Card>
              </div>
              <div className="col-8">
              <Card>
                <Card.Body>
                  <Card.Text>
                    Let's get Bach to the Basics! Here you can learn scales, compose your own songs, and more!
                  </Card.Text>
                </Card.Body>
              </Card>
            

            {/* <Card style={{ width: '23rem' }}>
              <Card.Body>
                <Card.Title>The Circle of Fifths</Card.Title>
                <Card.Img variant="top" src="images/circle.png" alt="Circle of fifths"></Card.Img>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </div>
</>

  )
}

  export default Saved
