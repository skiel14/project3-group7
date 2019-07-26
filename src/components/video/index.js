import React from 'react';
import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';

const Video  = () => {
  return (<>
    <div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=rnwlWn603g4'
        className='react-player'
        playing
        width='100%'
        height='100%'
      />
    </div>
    </>
  )
}

export default Video;
