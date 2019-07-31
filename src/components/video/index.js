import React from 'react';
import ReactPlayer from 'react-player';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';


// import YouTube from 'react-youtube';


const Video = () => {
  return (<>
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://youtu.be/cITjLbNdgys'
        width='100%'
        height='100%'
      />
    </div>
  </>
  )
}

export default Video;
