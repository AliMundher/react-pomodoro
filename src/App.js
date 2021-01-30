
import './App.css';
import React, { useState } from 'react';
import Circle from './components/circle';
import useSound from 'use-sound';



function App() {

  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [clearInterve, setInterve] = useState();
  const [status, setStatus] = useState(0);
  const [style, noStyle] = useState("disabled");

  var updateH = time.h, updateM = time.m, updateS = time.s, updateMs = time.ms;
  const [played] = useSound("./ding.mp3", { volume: 0.25 });


  // Play Function Count by One
  const play = () => {
    noStyle("abled");
    played();
    run();
    setStatus(1)
    setInterve(setInterval(run, 10));
  };

  // Stop Function
  const stope = () => {
    clearInterval(clearInterve);
    setStatus(0);
  }
  // Reset Function
  const reset = () => {
    setTime({ ms: 0, s: 0, m: 0, h: 0 });

  }



  // Run Function
  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });

  };

  // Function Decrement Count by One
  const decrement = () => {
    setTime({ h: updateH, m: updateM, s: updateS, ms: time.ms - 1 })
  }

  // Function Increment Count by One
  const increment = () => {
    setTime({ h: updateH, m: updateM, s: updateS, ms: time.ms + 1 })
  }


  return (

    <div className="App">
      <div className="main">
        <Circle time={time} />

        <div className="buttons">
          <button onClick={increment} className={style}>+</button>
          {(status === 0) ?
            <button onClick={play}>play</button> : <button onClick={stope}>stop</button>}

          <button onClick={reset} className={style}>reset</button>
          <button onClick={decrement} className={style}>-</button>
        </div>
      </div>
    </div>
  );

}

export default App;
