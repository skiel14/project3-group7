import React from 'react';
import './style.css';
import NavBarComponent from '../navbar'



const landingPage = () => (<>
 <NavBarComponent />
 <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>Bach to the Basics</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="images/bach-cool-1.jpg" alt="Cool Bach" class="img-thumbnail">
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
      <!--Create Card taking up 4 Columns-->
      <div class="col-md-4">
        <div class="card mt-2">
          <div class="card-body" id="circle-of-fifths">
            <h5 class="card-title">The Circle of Fifths</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <img src="images/circle-of-fifths3.png" alt="Circle of fifths" width="200">
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>  <!--  row  -->

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <label class="radio-inline"><input type="radio" name="optradio">A</label>
        <label class="radio-inline"><input type="radio" name="optradio">B</label>
        <label class="radio-inline"><input type="radio" name="optradio">C</label>
        <label class="radio-inline"><input type="radio" name="optradio">D</label>
        <label class="radio-inline"><input type="radio" name="optradio">E</label>
        <label class="radio-inline"><input type="radio" name="optradio">F</label>
        <label class="radio-inline"><input type="radio" name="optradio">G</label>
      </div>
    </div>  <!--  row  -->

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-2">
        <label class="radio-inline"><input type="radio" name="optradio">#</label>
        <label class="radio-inline"><input type="radio" name="optradio">&#9837</label>
      </div>
      <div class="col-md-3">
        <label class="radio-inline"><input type="radio" name="optradio">Major</label>
        <label class="radio-inline"><input type="radio" name="optradio">minor</label>
      </div>
    </div>  <!--  row  -->

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <label class="radio-inline"><input type="radio" name="optradio">Ionian<br>(major)</label>
        <label class="radio-inline"><input type="radio" name="optradio">Dorian<br>(minor)</label>
        <label class="radio-inline"><input type="radio" name="optradio">Phrygian</label>
        <label class="radio-inline"><input type="radio" name="optradio">Lydian</label>
        <label class="radio-inline"><input type="radio" name="optradio">Mixolydian<br>(dominant)</label>
        <label class="radio-inline"><input type="radio" name="optradio">Aeolian</label>
        <label class="radio-inline"><input type="radio" name="optradio">Locrian</label>
      </div>
    </div>  <!--  row  -->

  </div>
</>
)

export default landingPage
