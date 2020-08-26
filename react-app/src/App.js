import React from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
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
        // style={{ width: 100, height: 200 }}
      >
        <Resizable width={200} height={200}
          minConstraints={[100, 100]} maxConstraints={[300, 300]}>
          <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Resizable>
      </Draggable>
      {/* </Resizable> */}
    </div >
  );
}

export default App;
