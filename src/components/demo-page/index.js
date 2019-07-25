<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, {useState, Component} from 'react';
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../DimensionsProvider';
import SoundfontProvider from '../SoundfontProvider';
<<<<<<< HEAD
import { Carousel, Item, Button } from 'react-bootstrap';
=======

>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
import NavBarComponent from '../navbar';
import Circle from '../circle';
import Select from 'react-select'


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
  const [activeNote, setActiveNote] = useState(null)
  const [infoBox, setInfoBox] = useState("Testing")
  const [scaleState, setScaleState] = useState(0)
  const [gameDisable, setGameDisable] = useState(true)
  const [modeValue, setModeValue] = useState(0)
  const [startingNoteValue, setStartingNoteValue] = useState(0)
  
  //Cycle of fifths notes
  const scaleStartingNotes = [48, 55, 50, 57, 52, 59, 54, 49, 56, 51, 58, 53]

  const correctNote = ["Great!", "Keep going!", "You got this!", "Wow!", "Sounds good!", "Fantastic!"]

<<<<<<< HEAD
  var tempGameState = gameState
  console.log("It rerendered")
  console.log("temp:  " + tempGameState)
  console.log("gamestate:  " + gameState)

  //newscale starting notes-- cycle
  const sharpScaleStartingNotes = [
    48, 55, 50, 57, 52, 59, 54, 49, 56, 51, 58, 53
  ]
  const flatScaleStartingNotes = [
    53, 58, 51, 56, 59, 54, 59, 52, 57, 50, 55, 48
  ]

  const majorScalePattern = [
    0, 2, 4, 5, 7, 9, 11, 12
  ]

  //Changes state from radio buttons
  const radioStateChange = (radioState1, radioState2) => {
    setRadioState11(radioState1)
    setRadioState22(radioState2)
  }

  //Advances Slide
  const handleButtonClick = (e) => {
    triggerNewSlide()
  }
  const triggerNewSlide = (e) => {
    setSlideIndex(slideIndex + 1)
=======
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
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
  }


  //Plays the scales
  const playScale = (e) => {
    if (!gameDisable) {
      setGameDisable(true)
    }
    setInfoBox("Listen")
    setTimeout(function () {
      setGameDisable(false)
      setInfoBox("Now you try!")
    }, 8035)
<<<<<<< HEAD
    console.log("current game state of playScale:  " + tempGameState)
    console.log("actual state variable:  " + gameState)
    setTimeout(function () {
      setActiveNote(null)
    }, 8000)
    majorScalePattern.map(
      function (currentValue, index) {
        setTimeout(
          function () {
            var activeNoteArray = []
            console.log("looking at data:  ", scaleStartingNotes)
            activeNoteArray.push(scaleStartingNotes[tempGameState] + currentValue)
            setActiveNote(activeNoteArray)
          }, (1000 * index)
        )
      }
=======
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
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
    )
  }

  //Takes Keyboard input while game is active
  var recordedArray = []
  const recordNote = (midiNumber) => {
<<<<<<< HEAD
    if (!gameDisable) {
      if (midiNumber == scaleStartingNotes[tempGameState] + majorScalePattern[scaleState]) {
        setScaleState(scaleState + 1)
=======
    if(!gameDisable){
      if (midiNumber == scaleStartingNotes[startingNoteValue]+ scalePatterns[modeValue][scaleState]) {
        setScaleState(scaleState+1)
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
        var displayPat = correctNote[Math.floor(Math.random() * correctNote.length)]
        setInfoBox(displayPat)
        if (scaleState == 7) {
          setGameDisable(true)
<<<<<<< HEAD
          setInfoBox("Wow great job!  Onto the next scale...")
          setTimeout(function () {
            setScaleState(0)
            tempGameState++
            setGameState(gameState + 1)
            triggerNewSlide()
            playScale()
          }, 1500)
=======
          setInfoBox("Wow great job!")
          setTimeout(function(){setInfoBox("--")},2000)
          setScaleState(0)
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
        }
      }
      else {
        console.log("midinumber: ", midiNumber)
        console.log("scaleStartingNotes:  ", scaleStartingNotes)
        setInfoBox("Oops!")
        setGameDisable(true)
        setTimeout(function () {
          setScaleState(0)
          setTimeout(function () {
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
<<<<<<< HEAD
    <NavBarComponent />
    <div className="charts col-md-6">
      <Circle />
    </div>
    <button onClick={handleButtonClick}>Advance Slide</button>
    <button onClick={function () { console.log(radioState11, radioState22) }/*playScale*/}>Play Scale</button>
    <button onClick={startGameButton}>Start Game</button>
    <p id="infoBox" className="col-md-6">{infoBox}</p>
    < RadioBtns radioStateChange={radioStateChange} />

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
=======
   <NavBarComponent />
  <div className="charts col-md-6">
    <Circle />
  </div>
 
  <button onClick={startGameButton}>Demo Scale</button>
  <button /*onClick={}*/>Play Jingle</button>
  <p id="infoBox" className="col-md-6">{infoBox}</p>
  <div className="row">
    <div className="col-3"></div>
    <div className="col-3 drop1container">
      <Select defaultValue={{ label: "C", value: 0 }} aria-label="Starting Note" className="dropdown1" onChange={assignStartingNote} options={dropdownNotes} />
    </div>
    <div className="col-3 drop2container">
      <Select defaultValue={{ label: "Ionian (major)", value: 0 }} aria-label="Mode" className="dropdown2" onChange={assignMode} options={dropdownModes} />
    </div>
    <div className="col-3"></div>
  </div>
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
>>>>>>> 071eb1214f42333601ffc87eb1201e4fafcdbc91
  );
}

export default CreateDemoPage
