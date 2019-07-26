import React from 'react';
import ReactPlayer from 'react-player';
import {Col, Row, Container} from 'react-bootstrap';
import './style.css';


// import YouTube from 'react-youtube';

const Video  = () => {
  return (<>
    <Container className='player-wrapper'>
        <Col className='text-center'>
          <ReactPlayer
            url='https://youtu.be/cITjLbNdgys'
            className='react-player'
            playing
            // width='100%'
            // height='100%'
          />
        </Col>
    </Container>
    </>
  )
}

export default Video;
