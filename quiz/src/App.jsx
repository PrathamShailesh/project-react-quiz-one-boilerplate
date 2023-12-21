import React from 'react';
import './App.css'; 

import {FirstPage} from './components/FirstPage'
import {GamePage} from './components/GamePage'
import {Resultpage} from './components/Resultpage'


function App() {
  return (
    <div className="App">
      <FirstPage />
      <GamePage/>
      {/* <Resultpage/> */}
      
 
    </div>
  );
}

export default App;
