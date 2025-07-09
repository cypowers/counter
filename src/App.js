import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';
import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    console.log("aaa"+ value + " " +  count);
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // const intervalID = setInterval(() => {
    //   console.log("깜빡");
    // }, 1000);
    
    // return () => {
    //   clearInterval(intervalID);
    //   console.log("cleanup");
    // }
    if( !didMountRef.current ) {
      didMountRef.current = true;
      console.log("Mounted");
      return;
    } else {
      console.log("Updated");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>      
      <section>
        <input value={text} onChange={handleChangeText} placeholder="Type something..." />
      </section>      
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>      
    </div>
  )
}

export default App;
