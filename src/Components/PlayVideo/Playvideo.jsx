import React, { useEffect, useState } from 'react'
import './Playvideo.css'
//import video1 from '../../Assets/video.mp4'
import like from  '../../Assets/like.png'
import dislike from  '../../Assets/dislike.png'
import share from  '../../Assets/share.png'
import save from  '../../Assets/save.png'
import jack from  '../../Assets/m.png'
import profile from  '../../Assets/user_profile.jpg'
import { API_KEY, convert } from '../../data'
import moment from 'moment'
const Playvideo = ({videoId}) => {
    const [apidata,setapidata]=useState(null);
    
    
    
    const fetchVideoData = async () =>{
        const videodetailUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;
        await fetch(videodetailUrl).then(res=>res.json()).then(data=>setapidata(data.items[0]));
    }
    useEffect(()=>{
        fetchVideoData();
    },[])

   

  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted></video>*/}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apidata?apidata.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apidata?convert(apidata.statistics.viewCount):"16k"} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():""} </p>
        
           <div>
                 <span><img src={like} alt="" />{apidata?convert(apidata.statistics.likeCount):155}</span>
                 <span><img src={dislike} alt="" /></span>
                 <span><img src={save} alt="" />Saved</span>
                 <span><img src={share} alt="" /> Share</span>
           </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={jack} alt="" />
        
            <div>
                 <p>{apidata?apidata.snippet.channelTitle:""}</p>
                 <span>1M Suscribers</span>
            </div>
            <button>Suscribe</button>
       </div> 
       <div className="vido-discription">
        <p>{apidata?apidata.snippet.description.slice(0,300):"Description Here"}</p>
        <p>suscribe Mahakalkar channel for more Videos</p>
        <hr/>
        <h4>{apidata?convert(apidata.statistics.commentCount):10} Comments</h4>
        <div className="comment">
            <img src={profile}alt="" />
            <div>
                <h3>mahakalkar soft<span> 1 day ago</span></h3>
                <p>aesop was one of the great greek scientiest he known about everythng</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={profile}alt="" />
            <div>
                <h3>mahakalkar soft<span> 1 day ago</span></h3>
                <p>aesop was one of the great greek scientiest he known about everythng</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={profile}alt="" />
            <div>
                <h3>mahakalkar soft<span> 1 day ago</span></h3>
                <p>aesop was one of the great greek scientiest he known about everythng</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={profile}alt="" />
            <div>
                <h3>mahakalkar soft<span> 1 day ago</span></h3>
                <p>aesop was one of the great greek scientiest he known about everythng</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Playvideo
