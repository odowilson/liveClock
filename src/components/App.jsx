import React, { useState } from "react";

function App() {
  setInterval(checkTime, 1000);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function checkTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={checkTime}>Get Time</button>
    </div>
  );
}

export default App;
