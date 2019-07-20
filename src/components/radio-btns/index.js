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
    var type= 'radio'
    return(<>
      <Form>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="#" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="&#9837" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Major" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Minor" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Ionian (major)" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Dorian (minor)" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Phrygian" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Lydian" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Mixolydian (dominant)" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Aeolian" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Locrian" type={type} id={`inline-${type}-2`} />
          </div>
      </Form>
      </>
    )
    }
  }

export default RadioBtns;
