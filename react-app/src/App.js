import React from 'react';
import Draggable from 'react-draggable';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div >
  );
}

export default App;
