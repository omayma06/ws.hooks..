import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

const Trailer = ({movies}) => {
    const params = useParams();
    const {id} = params
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      const movieDetails = movies.find((movies)=>movies.id == id)
  return (
    <div>
      <h1> Movie Details</h1>
      <YouTube videoId="movieDetails.trailer_ID" opts={opts} onReady={onReady} />
    </div>
  )
}

export default Trailer
