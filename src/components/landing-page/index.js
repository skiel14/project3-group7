import React from 'react';
import './style.css';
import {Card, CardImg, CardBody, CardText, Col, Row, Container, Image} from 'react-bootstrap';
import NavBarComponent from '../navbar'
import RadioBtns from '../radio-btns'
import { rollIn } from 'react-animations';
import anime from 'animejs'


const Saved = () => {
  return (<>
  <NavBarComponent />
    <Container>
      <Row>
        <Col md={12}>
          <div className="page-header">
            <h1 className="m12">Bach to Basics</h1>
          </div>
        </Col>
      </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="images/bach-cool-1.jpg" ></Card.Img>
            </Card>
          </Col>
          {/* <Col md={4}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>Cats jammin out</Card.Title>
                <Card.Img variant="top" src="images/cat.gif" alt="Cat"></Card.Img>
              </Card.Body>
            </Card>
          </Col> */}
          <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Let's get Bach to the Basics! What are scales? Where should I start? Here you can learn scales, compose your own songs, and more! Learn the "Fun" damentals on our Practice page!!
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="howTo">The Mental Flip Strategy for Reading Music Notes</Card.Title>
                <Card.Text>You must flip the orientation of the sheet music in front of you mentally, so you can read the vertical orientation of the notes.
                    In order to begin to think about and practice this mental flip, there is an extremely helpful strategy you can use. You can actually turn the sheet music so you are reading the notes down the page. Doing so allows you to more easily understand the spacing between the notes and more intuitively grasp where your fingers should be placed on the keys. This technique is also incredibly helpful for visualizing the grand staff as a whole and where the octaves on the keyboard are located.

                    In order to properly perform this strategy and learn how to read sheet music for piano, follow these three simple steps:</Card.Text>

                    <Card.Text>1. Take your original sheet music and flip it clockwise. The line of music you’re working on playing should be read down the page, from top to bottom, instead of across the page.</Card.Text>

                    <Card.Text>2. Begin to identify chord units and think about each measure in terms of chordal units. Most bars or measures of beginning piano music contain one or two chords. Sometimes these chords are arpeggiated, other times there is an alternation pattern of notes in the treble and bass in quick succession. Your success with this technique depends on your ability to identify which chord is being outlined. To do this, simply name the notes. In beginning sheet music you’ll most likely see either major or minor triads.</Card.Text>

                    <Card.Text>3. Match the notes on the page to your fingers on the keyboard. Notice how, with the sheet music turned, the sheet music is actually a diagram of the intervals between each note and how this realization helps you visualize where to place your fingers.</Card.Text>

                    <Card.Text>Here’s how it looks on your sheet music:</Card.Text>
                  <Card.Img src="images/flip.png" alt="sheetmusicflipped"></Card.Img>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="howTo">How to Read Sheet Music: An Intro to Reading Piano Notes</Card.Title>
                <br></br>
                  <Card.Subtitle>Step 1: Label white spaces with FACE and EGBDF for the treble clef</Card.Subtitle>
                  <Card.Text>This is the staff that shows which notes to play with your right hand. If you are learning for the first time, you must familiarize yourself with the letter names of the lines and spaces. On your staff paper, label the white spaces with FACE starting with the first space at the bottom of the page and going up, then the lines EGBDF starting at the bottom line going to the top line. There are little tricks to help you remember the names of the lines and spaces – for example, just remember the phrase “Every Good Boy Deserves Fudge.” Work on memorizing this a little bit each day.</Card.Text>
                  <Card.Img src="images/face.png" alt="trebleclef"></Card.Img>
                  <br></br>
                  <br></br>
                  <Card.Subtitle>Step 2: Name your spaces ACEGB and GBDFA move on to bass clef</Card.Subtitle>
                  <Card.Text>Practice drawing the bass clef, which will start on the F line. Then with the spaces at the bottom of the page, name your spaces ACEGB (remember “All Cows Eat Grass,” and don’t forget to add your B at the top!). Next, name your lines starting at the bottom of the page GBDFA (“Good Boys Deserve Fudge Always”). Memorize these notations as well. Now transfer these letter names of the lines and spaces to your piano song from step #2, and name all the notes with your left hand in the bass clef.</Card.Text>
                  <Card.Img src="images/acegb.png" alt="bassclef"></Card.Img>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
</>

  )
}

  export default Saved
