import React from 'react';
import './style.css';
import axios from 'axios';
import './tonejs-instruments';
import './keyboard'
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
