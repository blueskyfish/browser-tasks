import React, { useState } from 'react';
import './App.css';
import Header from './core/Header';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = (isOpen: boolean): void => {
    setOpen(isOpen);
  }
  return (
    <div className="App">
      <Header title="Hello" isOpen={open} onMenu={handleOpen}/>
      <div className="App">
        <p>Browser Task</p>
      </div>
    </div>
  );
}

export default App;
