import React from 'react';
import './style.css';
import './piano'

const CreateDemoPage = () => (<>

  <section id="wrap">
    <header>
      <h1>JS Piano</h1>
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

      <audio data-key="65" src="/040.wav"></audio>
      <audio data-key="87" src="/041.wav"></audio>
      <audio data-key="83" src="/042.wav"></audio>
      <audio data-key="69" src="/043.wav"></audio>
      <audio data-key="68" src="/044.wav"></audio>
      <audio data-key="70" src="/045.wav"></audio>
      <audio data-key="84" src="/046.wav"></audio>
      <audio data-key="71" src="/047.wav"></audio>
      <audio data-key="89" src="/048.wav"></audio>
      <audio data-key="72" src="/049.wav"></audio>
      <audio data-key="85" src="/050.wav"></audio>
      <audio data-key="74" src="/051.wav"></audio>
      <audio data-key="75" src="/052.wav"></audio>
      <audio data-key="79" src="/053.wav"></audio>
      <audio data-key="76" src="/054.wav"></audio>
      <audio data-key="80" src="/055.wav"></audio>
      <audio data-key="186" src="/056.wav"></audio>
      </section>
  </section>


  {/* <div id="content">
    <div class="container">
        <h1>Play a song!</h1>
        <p> (all instruments) </p>
        <div id="Selector"></div>
        <br/>
        <div id="Keyboard"></div>
    </div>

  </div> */}

</>)


export default CreateDemoPage;
