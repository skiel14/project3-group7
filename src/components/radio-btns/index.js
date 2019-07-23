import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavItem, Link, Brand, Button, FormControl, Form} from 'react-bootstrap';
import './style.css';

var tempSelectedBtn = 3
var tempSelectedBtn2 = 1

class RadioBtns extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedBtn: "3",
      selectedBtn2: "1"
    }
  }

  handleOptionChange = e => {
    this.setState({
      selectedBtn: e.target.value
    });
    tempSelectedBtn = e.target.value
    this.props.radioStateChange(tempSelectedBtn, tempSelectedBtn2)
  };

  handleOptionChange2 = e => {
    this.setState({
      selectedBtn2: e.target.value
    });
    tempSelectedBtn2 = e.target.value
    this.props.radioStateChange(tempSelectedBtn, tempSelectedBtn2)
  };

  render(){
    var type= 'radio'
    return(<>
    <div className="btns">
      <Form>
          <div className="mb-3">
            <label>
            <input  label="#" type={type} name="radioBtn2" value={1} checked={this.state.selectedBtn2 === "1"} onChange={this.handleOptionChange2} />
            #
            </label>
            <label>
            <input  label={String.fromCharCode(9837)} type={type} name="radioBtn2" value={2} checked={this.state.selectedBtn2 === "2"} onChange={this.handleOptionChange2} />
            {String.fromCharCode(9837)}
            </label>
            <br></br>
            <label>
            <input  label="Major" type={type} name="radioBtn" value={3} checked={this.state.selectedBtn === "3"} onChange={this.handleOptionChange}/>
            Major
            </label>
            <label>
            <input  label="Minor" type={type} name="radioBtn" value={4} checked={this.state.selectedBtn === "4"} onChange={this.handleOptionChange}/>
            Minor
            </label>
            <label>
            <input  label="Ionian (major)" type={type} name="radioBtn" value={5} checked={this.state.selectedBtn === "5"} onChange={this.handleOptionChange}/>
            Ionian (major)
            </label>
            <label>
            <input  label="Dorian (minor)" type={type} name="radioBtn" value={6} checked={this.state.selectedBtn === "6"} onChange={this.handleOptionChange}/>
            Dorian (minor)
            </label>
            <label>
            <input  label="Phrygian" type={type} name="radioBtn" value={7} checked={this.state.selectedBtn === "7"} onChange={this.handleOptionChange}/>
            Phrygian
            </label>
            <label>
            <input  label="Lydian" type={type} name="radioBtn" value={8} checked={this.state.selectedBtn === "8"} onChange={this.handleOptionChange}/>
            Lydian
            </label>
            <label>
            <input  label="Mixolydian (dominant)" type={type} name="radioBtn" value={9} checked={this.state.selectedBtn === "9"} onChange={this.handleOptionChange}/>
            Mixolydian (dominant)
            </label>
            <label>
            <input  label="Aeolian" type={type} name="radioBtn" value={10} checked={this.state.selectedBtn === "10"} onChange={this.handleOptionChange}/>
            Aeolian
            </label>
            <label>
            <input  label="Locrian" type={type} name="radioBtn" value={11} checked={this.state.selectedBtn === "11"} onChange={this.handleOptionChange}/>
            Locrian
            </label>
          </div>
      </Form>
    </div>
      </>
    )
    }
  }

export default RadioBtns;
