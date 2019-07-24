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
                    Let's get Bach to the Basics! What are scales? Why should people learn them? What is the point? Where should I start? Here you can learn scales, compose your own songs, and more! Learn the "Fun" damentals on our Practice page!! Regular piano playing offers different physical and physiological advantages to players. It sharpens fine motor skills, improves dexterity and hand-eye coordination. Music has also been shown to reduce heart and respiratory rates, cardiac complications, and to lower blood pressure and increase immune response.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card style={{ width: '23rem' }}>
              <Card.Body>
                <Card.Title>Cats jammin out</Card.Title>
                <Card.Img variant="top" src="images/cat.gif" alt="Cat"></Card.Img>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
</>

  )
}

  export default Saved
