import React, { useState } from 'react';
import {Context} from '../../context';
import '../../fonts/Gordita-Regular.ttf';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import './App.css';
import CanvasJbl from '../CanvasJbl';

function App() {

  const getGLobalWidth = () => {
    if (window.innerWidth/window.innerHeight > 1.62650602) {
      let w = (window.innerHeight -40 ) * 1.62650602;
      return w < 1350 ? w : 1350;
    }
    return window.innerWidth >= 1350 ? 1350 : window.innerWidth - 40;
  }
  
  const [globalWidth, setGlobalWidth] = useState(getGLobalWidth());

  window.addEventListener("resize", () => setGlobalWidth(getGLobalWidth()));

  const appStyle = {
    fontSize: globalWidth/56.25
  }

  const [level, setLevel] = useState('start');

  const changeLevel = (nexLevel) => {
    setLevel(nexLevel);
  }

  return (
    <Context.Provider value={{
      changeLevel
    }}>
      <DndProvider backend={Backend}>
        <div className="App" style={appStyle}>
          <CanvasJbl  globalWidth={globalWidth} lavel={level}/>
        </div>
      </DndProvider>
    </Context.Provider>
  );
}

export default App;
