import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavItem, Link, Brand, Button, FormControl, Form} from 'react-bootstrap';

class RadioBtns extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  render(){
    return(<>
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
      </div>
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
        </div>
      </>
    )
    }
  }

export default RadioBtns;
