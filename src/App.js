import './App.css';
import Header from './Header';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';



function App() {
  return (
    <div >
      <Router>
      <Header/>
      
      <Routes>
      <Route path='/chats'
       
       element={ <h3>This is chats</h3> }

      />
        
      
      <Route path='/'  
          
        element={
          <>
          <TinderCards/>
          <SwipeButton/>
          </>
        }
        
      />
        
     
      </Routes>

      
      {/* {cards} */}


      {/* {footer with different buttons} */}

      {/* {chat screen} */}

      {/* {individual chats} */}
      </Router>
    </div>
  );
}

export default App;
