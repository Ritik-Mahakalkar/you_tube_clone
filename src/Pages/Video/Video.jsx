import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recomandation from '../../Components/Recomandation/Recomandation'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId}= useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recomandation/>
    </div>
  )
}

export default Video
