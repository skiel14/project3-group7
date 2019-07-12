import React from 'react';
import './style.css';
import './piano'


const CreateDemoPage = () => (<>

  <section id="wrap">
    <header>
      <h1>JS Mini Practice Piano</h1>
      <h2>Use your keyboard. Hover for hints.</h2>
    </header>
    <section id="main">
      <div className="nowplaying"></div>
      <div className="keys">
        <div data-key="65" className="key" data-note="C">
            <span className="hints">A</span>
        </div>
        <div data-key="87" className="key sharp" data-note="C#">
            <span className="hints">W</span>
        </div>
        <div data-key="83" className="key" data-note="D">
            <span className="hints">S</span>
        </div>
        <div data-key="69" className="key sharp" data-note="D#">
            <span className="hints">E</span>
        </div>
        <div data-key="68" className="key" data-note="E">
            <span className="hints">D</span>
        </div>
        <div data-key="70" className="key" data-note="F">
            <span className="hints">F</span>
        </div>
        <div data-key="84" className="key sharp" data-note="F#">
            <span className="hints">T</span>
        </div>
        <div data-key="71" className="key" data-note="G">
            <span className="hints">G</span>
        </div>
        <div data-key="89" className="key sharp" data-note="G#">
            <span className="hints">Y</span>
        </div>
        <div data-key="72" className="key" data-note="A">
            <span className="hints">H</span>
        </div>
        <div data-key="85" className="key sharp" data-note="A#">
            <span className="hints">U</span>
        </div>
        <div data-key="74" className="key" data-note="B">
            <span className="hints">J</span>
        </div>
        <div data-key="75" className="key" data-note="C">
            <span className="hints">K</span>
        </div>
        <div data-key="79" className="key sharp" data-note="C#">
            <span className="hints">O</span>
        </div>
        <div data-key="76" className="key" data-note="D">
            <span className="hints">L</span>
        </div>
        <div data-key="80" className="key sharp" data-note="D#">
            <span className="hints">P</span>
        </div>
        <div data-key="186" className="key" data-note="E">
            <span className="hints">;</span>
        </div>
      </div>

      <audio data-key="65" src="./sounds/040.wav"></audio>
      <audio data-key="87" src="./sounds/041.wav"></audio>
      <audio data-key="83" src="./sounds/042.wav"></audio>
      <audio data-key="69" src="./sounds/043.wav"></audio>
      <audio data-key="68" src="./sounds/044.wav"></audio>
      <audio data-key="70" src="./sounds/045.wav"></audio>
      <audio data-key="84" src="./sounds/046.wav"></audio>
      <audio data-key="71" src="./sounds/047.wav"></audio>
      <audio data-key="89" src="./sounds/048.wav"></audio>
      <audio data-key="72" src="./sounds/049.wav"></audio>
      <audio data-key="85" src="./sounds/050.wav"></audio>
      <audio data-key="74" src="./sounds/051.wav"></audio>
      <audio data-key="75" src="./sounds/052.wav"></audio>
      <audio data-key="79" src="./sounds/053.wav"></audio>
      <audio data-key="76" src="./sounds/054.wav"></audio>
      <audio data-key="80" src="./sounds/055.wav"></audio>
      <audio data-key="186" src="./sounds/056.wav"></audio>
      </section>
  </section>

</>)


export default CreateDemoPage;
