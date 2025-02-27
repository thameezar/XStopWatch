import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // Time in seconds
  const [running, setRunning] = useState(false); // Whether the stopwatch is running or not

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 second
      }, 1000);
    } else {
      clearInterval(interval); // Stop the timer when not running
    }

    return () => clearInterval(interval); // Cleanup the interval when component unmounts or timer stops
  }, [running]);

  // Format time in minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStartStop = () => {
    setRunning(!running); // Toggle the running state
  };

  const handleReset = () => {
    setTime(0); // Reset time to 0
    setRunning(false); // Stop the stopwatch when reset
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <h2>Time</h2>
        <p>{formatTime(time)}</p>
      </div>
      <div className="button-container">
        <button onClick={handleStartStop}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
