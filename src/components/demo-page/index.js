import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../DimensionsProvider';
import SoundfontProvider from '../SoundfontProvider';
import {Col, Row, Image, Container, Overlay, Button} from 'react-bootstrap';
import NavBarComponent from '../navbar';
import Circle from '../circle';
import Select from 'react-select'


import './style.css';
import { cpus } from 'os';

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
  const [activeNote, setActiveNote] = useState(null)
  const [infoBox, setInfoBox] = useState("Testing")
  const [scaleState, setScaleState] = useState(0)
  const [gameDisable, setGameDisable] = useState(true)
  const [modeValue, setModeValue] = useState(0)
  const [startingNoteValue, setStartingNoteValue] = useState(0)

  //Cycle of fifths notes
  const scaleStartingNotes = [48, 55, 50, 57, 52, 59, 54, 49, 56, 51, 58, 53]

  const correctNote = ["Great!", "Keep going!", "You got this!", "Wow!", "Sounds good!", "Fantastic!"]

    //Circle of Fifths
    const scaleCircle = [
      48, 55, 50, 57, 52, 59, 54, 49, 56, 51, 58, 53
    ]

    const scalePatterns = [
      [0,2,4,5,7,9,11,12],
      [0,2,3,5,7,9,10,12],
      [0,1,3,5,7,8,10,12],
      [0,2,4,6,7,9,11,12],
      [0,2,4,5,7,9,10,12],
      [0,2,3,5,7,8,10,12],
      [0,1,3,5,6,8,10,12],
    ]




const dropdownNotes = [
  { value: '0', label: 'C' },
  { value: '1', label: 'G' },
  { value: '2', label: 'D' },
  { value: '3', label: 'A' },
  { value: '4', label: 'E' },
  { value: '5', label: 'B' },
  { value: '6', label: 'F#(G'+ String.fromCharCode(9837) + ')' },
  { value: '7', label: 'C#(D'+String.fromCharCode(9837) + ')' },
  { value: '8', label: 'A'+String.fromCharCode(9837) },
  { value: '9', label: 'E'+String.fromCharCode(9837) },
  { value: '10', label: 'B'+String.fromCharCode(9837) },
  { value: '11', label: 'F' }
]

const dropdownModes = [
  { value: '0', label: 'Ionian (major)' },
  { value: '1', label: 'Dorian (minor)' },
  { value: '2', label: 'Phrygian' },
  { value: '3', label: 'Lydian' },
  { value: '4', label: 'Mixolydian (dominant)' },
  { value: '5', label: 'Aeolian' },
  { value: '6', label: 'Locrian' }
]

console.log("It rerendered")


  const assignStartingNote = (e) => {
    setStartingNoteValue(e.value)
    console.log("Note:  ", e.value)
  }

  const assignMode = (e) => {
    setModeValue(e.value)
    console.log("mode: ", e.value)
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
    setTimeout(function(){
      setActiveNote(null)
    },8000)
    scalePatterns[modeValue].map(
      function(currentValue, index) {
      setTimeout(
        function(){
          var activeNoteArray = []
          activeNoteArray.push(scaleCircle[startingNoteValue]+currentValue)
          setActiveNote(activeNoteArray)
        }, (1000*index)
      )}
    )
  }

  //Takes Keyboard input while game is active
  var recordedArray = []
  const recordNote = (midiNumber) => {
    if(!gameDisable){
      if (midiNumber == scaleStartingNotes[startingNoteValue]+ scalePatterns[modeValue][scaleState]) {
        setScaleState(scaleState+1)
        var displayPat = correctNote[Math.floor(Math.random() * correctNote.length)]
        setInfoBox(displayPat)
        if (scaleState == 7) {
          setGameDisable(true)
          setInfoBox("Wow great job!")
          setTimeout(function(){setInfoBox("--")},2000)
          setScaleState(0)
        }
      }
      else {
        console.log("midinumber: ", midiNumber)
        console.log("scaleStartingNotes:  ", scaleStartingNotes)
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
    scaleGame()
  }

  //Demos a scale and waits for response
  function scaleGame() {
    playScale()
  }

  return (<>
   <NavBarComponent />
   <Row>
      <Col className="charts md-6">
        <Circle />
      </Col>
    </Row>
    <Row className="form-row text-center">
      <Col>
        <Button className="buttons" variant="light" onClick={startGameButton}>Demo Scale</Button>
        <Button className="buttons" variant="light"/*onClick={}*/>Play Jingle</Button>
      </Col>
    </Row>
  <Row>
    <Col>
      <p id="infoBox" className="infobox md-6">{infoBox}</p>
    </Col>
  </Row>
    <Row>
      <Col className="drop1container">
        <Select defaultValue={{ label: "C", value: 0 }} aria-label="Starting Note" className="dropdown1" onChange={assignStartingNote} options={dropdownNotes} />
      </Col>
      <Col className="drop2container">
        <Select defaultValue={{ label: "Ionian (major)", value: 0 }} aria-label="Mode" className="dropdown2" onChange={assignMode} options={dropdownModes} />
      </Col>
      <Col></Col>
      <Col></Col>
    </Row>
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
