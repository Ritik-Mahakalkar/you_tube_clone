import React from 'react'
import './Nevbar.css'
import menu_icon from '../../Assets/menu.png';
import logo from '../../Assets/youTube.png'
import search_icon from '../../Assets/search.png'
import upload_icon from '../../Assets/upload.png'
import morre_icon from '../../Assets/more.png'
import notification_icon from '../../Assets/notification.png'
import profile_icon from '../../Assets/user_profile.jpg'


const Nevbar = ({setSidebar}) => {
  return (
    <div >
     <nav className='flex-div'>
        <div className="nev-left flex-div">
            <img src={menu_icon}  onClick={()=>setSidebar(prev=>prev===false?true:false)} className="menu_icon"alt="" />
            <img src={logo} alt="" className='logo' />
        </div>
        <div className="nav-middle flex-div">
            <div className="seach-box">
                 <input type="text" placeholder='search' />
                 <img src={search_icon} alt="" />
            </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={morre_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} alt="" className='user-icon' />
        </div>
    </nav> 
    </div>
  )
}

export default Nevbar
