import React from 'react';
import './style.css';
import axios from 'axios';
import Tone from 'tone';
import NexusUi from 'nexusui';
import './tonejs-instruments';
import './keyboardjs'
import './nprogress'
import 'nprogress.css'

var Router = require('react-router');

const CreateDemoPage = () => (<>

  <div id="content">
    <div class="container">
        <h1>Play a song!</h1>
        <p> (all instruments) </p>
        <div id="Selector"></div>
        <br/>
        <div id="Keyboard"></div>
    </div>

  </div>

</>)


export default CreateDemoPage;
