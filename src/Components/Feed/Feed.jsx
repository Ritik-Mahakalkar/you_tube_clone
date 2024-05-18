import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnil1 from '../../Assets/thumbnail1.png'
import thumbnil2 from '../../Assets/thumbnail2.png'
import thumbnil3 from '../../Assets/thumbnail3.png'
import thumbnil4 from '../../Assets/thumbnail4.png'
import thumbnil5 from '../../Assets/thumbnail5.png'
import thumbnil6 from '../../Assets/thumbnail6.png'
import thumbnil7 from '../../Assets/thumbnail7.png'
import thumbnil8 from '../../Assets/thumbnail8.png'
import {API_KEY, convert} from '../../data'
import { Link } from 'react-router-dom'
import moment from 'moment'
const Feed = ({category}) => {
     const [data,setData]=useState([]);
     const fetchData = async () =>{
          const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=${category}&key=${API_KEY}`
          await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
     }
     useEffect(()=>{
          fetchData();

     },[category])
  return (
    <div className="feed">
     {data.map((item,index)=>{
          return(
               <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{convert(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
    
     </Link>

          )
          

     })}
        
       
    </div>
    
  )
}

export default Feed
