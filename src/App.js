
import React, { useState } from 'react';
import './App.css';
import Nevbar from './Components/Nevbar/Nevbar';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
const App = () =>{
    const [sidebar,setSidebar]=useState(true)
  return (
    <div >
       <React.Fragment>
        <Nevbar setSidebar={setSidebar}/>
          <Router>
            <Routes>
              <Route path='/' element={<Home sidebar={sidebar}/>}/>
              <Route path='/Video/:categoryId/:videoId' element={<Video/>}/>
            </Routes>
          </Router>
        </React.Fragment>
        
    </div>
  );
}

export default App;
