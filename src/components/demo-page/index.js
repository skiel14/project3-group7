import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../DimensionsProvider';
import SoundfontProvider from '../SoundfontProvider';
import {Carousel, Item} from 'react-bootstrap';
import NavBarComponent from '../navbar'
import RadioBtns from '../radio-btns'


import './style.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('c5'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const CreateDemoPage = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeNote, setActiveNote] = useState(null)
  const [infoBox, setInfoBox] = useState("Testing")
  const [gameState, setGameState] = useState(-1)
  const [scaleState, setScaleState] = useState(0)
  const [gameDisable, setGameDisable] = useState(true)

  const correctNote = ["Great!", "Keep going!", "You got this!", "Wow!", "Sounds good!", "Fantastic!"]


  var tempGameState = gameState
  console.log("It rerendered")
  console.log("temp:  " + tempGameState)
  console.log("gamestate:  " + gameState)
  //cGFDBbAEbEAbBC#F# ---2,2,1,2,2,2,1
  const scaleStartingNotes = [
    48,55,53,50,58,57,51,52,54,59,49,53
  ]
  const majorScalePattern = [
    0,2,4,5,7,9,11,12
  ]

  //Advances Slide
  const handleButtonClick = (e) => {
    triggerNewSlide()
  }
  const triggerNewSlide = (e) => {
    setSlideIndex(slideIndex+1)
  }

  //Plays the scales
  const playScale = (e) => {
    if(!gameDisable){
      setGameDisable(true)
    }
    setInfoBox("Listen")
    setTimeout(function(){
      setGameDisable(false)
      setInfoBox("Now you try!")
    }, 8035)
    console.log("current game state of playScale:  " + tempGameState)
    console.log("actual state variable:  " + gameState)
    setTimeout(function(){
      setActiveNote(null)
    },8000)
    majorScalePattern.map(
      function(currentValue, index) {
      setTimeout(
        function(){
          var activeNoteArray = []
          activeNoteArray.push(scaleStartingNotes[tempGameState]+currentValue)
          setActiveNote(activeNoteArray)
        }, (1000*index)
      )}
    )
  }

  //Takes Keyboard input while game is active
  var recordedArray = []
  const recordNote = (midiNumber) => {
    if(!gameDisable){
      if (midiNumber == scaleStartingNotes[tempGameState]+ majorScalePattern[scaleState]) {
        setScaleState(scaleState+1)
        var displayPat = correctNote[Math.floor(Math.random() * correctNote.length)]
        setInfoBox(displayPat)
        if (scaleState == 7) {
          setGameDisable(true)
          setInfoBox("Wow great job!  Onto the next scale...")
          setTimeout(function(){
            setScaleState(0)
            tempGameState++
            setGameState(gameState +1)
            triggerNewSlide()
            playScale()
          }, 1500)
        }
      }
      else {
        setInfoBox("Oops!")
        setGameDisable(true)
        setTimeout(function(){
          setScaleState(0)
          setTimeout(function(){
            scaleGame()
          }, 1000)
        }, 1500)
      }
    }
    recordedArray.push(midiNumber)
    console.log(recordedArray)
  }

  //Starts game from button click
  const startGameButton = () => {
    tempGameState++
    setGameState(tempGameState)
    scaleGame()
  }

  //Demos a scale and waits for response
  function scaleGame() {
    playScale()
  }

  return (<>
   <NavBarComponent />
  <div className="charts col-md-6">
  <Carousel id='bootstrapCarousel' onSelect={triggerNewSlide} activeIndex={slideIndex} fade={true} indicators={false} interval={null} controls={false} data-interval="false">
  <Carousel.Item>
    <img
      className="d-block"
      src="../../../static/Cmajor.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="../../../static/Dmajor.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="../../../static/Emajor.png"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="../../../static/Fmajor.png"
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
  </div>
  <button onClick={handleButtonClick}>Advance Slide</button>
  <button onClick={function(){}/*playScale*/}>Play Scale</button>
  <button onClick={startGameButton}>Start Game</button>
  <p id="infoBox" className="col-md-6">{infoBox}</p>
  < RadioBtns />

  <div className="wrapper">
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={containerWidth}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              activeNotes={activeNote}
              keyboardShortcuts={keyboardShortcuts}
              onPlayNoteInput={recordNote}
              {...props}
            />
          )}
        />
      )}
    </DimensionsProvider>
  </div>
</>
  );
}

export default CreateDemoPage
