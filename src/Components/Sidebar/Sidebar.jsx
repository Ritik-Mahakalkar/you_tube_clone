import React from 'react'
import './Sidebar.css'
import home from '../../Assets/home.png';
import game_icon from '../../Assets/game_icon.png';
import autombile from '../../Assets/automobiles.png';
import sport from '../../Assets/sports.png';
import entertainment from '../../Assets/entertainment.png';
import tech from '../../Assets/tech.png';
import Music from '../../Assets/music.png';
import blog from '../../Assets/blogs.png';
import news from '../../Assets/news.png';
import jack from '../../Assets/jack.png';
import simon from '../../Assets/m.png';
import tom from '../../Assets/tom.png';
import megan from '../../Assets/megan.png';
import cameron from '../../Assets/cameron.png';
const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-link">
            <div className={`side-link ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>

            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
                
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={autombile} alt="" /><p>Automobile</p>
                
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sport} alt="" /><p>Sports</p>
                
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
                
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Technology</p>
                
            </div>
            <div className={`side-link ${category===10?"active":""}`}onClick={()=>setCategory(10)}>
                <img src={Music} alt="" /><p>Music</p>
                
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blog} alt="" /><p>Blogs</p>
                
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
                
            </div>
            
            <div className={`side-link ${category===1?"active":""}`} onClick={()=>setCategory(1)}>
                <img src={news} alt="" /><p>Film & Animation</p>
                
            </div>
            
            
            
            <hr/>
        </div>
        <div className="suscribe-list">
            <h3>OWNERSHIP</h3>
            <div className="side-link">
                <img src={simon} alt="" /><p>Mahakalkar's</p>
                
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
