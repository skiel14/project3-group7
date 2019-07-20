import React from 'react';
import './style.css';
import NavBarComponent from '../navbar'


const Saved = () => {
  return (<>
     <NavBarComponent />
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>Bach to the Basics</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="images/bach-cool-1.jpg" alt="Cool Bach" class="img-thumbnail"></img>
          </div>
          <div class="col-md-9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique,
              nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae
              felis vulputate pretium. Nullam commodo, est ac auctor ornare, eros nisi fringilla sem,
              non pulvinar tortor lorem sit amet sem.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mt-2">
          <div class="card-body" id="circle-of-fifths">
            <h5 class="card-title">The Circle of Fifths</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <img src="../../../public/static/circle-of-fifths3.png" alt="Circle of fifths" width="200"></img>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>

    {/* <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <label class="radio-inline"><input type="radio" name="optradio">A</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">B</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">C</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">D</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">E</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">F</input></label>
        <label class="radio-inline"><input type="radio" name="optradio">G</input></label>
      </div>
    </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-2">
          <label class="radio-inline"><input type="radio" name="optradio">#</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">&#9837</input></label>
        </div>
        <div class="col-md-3">
          <label class="radio-inline"><input type="radio" name="optradio">Major</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">minor</input></label>
        </div>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
        <div class="col-md-10">
          <label class="radio-inline"><input type="radio" name="optradio">Ionian (major)</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Dorian (minor)</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Phrygian</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Lydian</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Mixolydian (dominant)</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Aeolian</input></label>
          <label class="radio-inline"><input type="radio" name="optradio">Locrian</input></label>
        </div>
    </div> */}
  </div>

  </>)
  }

  export default Saved
