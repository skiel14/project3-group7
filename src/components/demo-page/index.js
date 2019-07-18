import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import DimensionsProvider from '../DimensionsProvider';
import SoundfontProvider from '../SoundfontProvider';
import {Carousel, Item} from 'react-bootstrap';
import NavBarComponent from '../navbar'

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
  
  const handleButtonClick = (e) => {
    triggerNewSlide()
  }

  const triggerNewSlide = (e) => {
    setSlideIndex(slideIndex+1)
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
              keyboardShortcuts={keyboardShortcuts}
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
