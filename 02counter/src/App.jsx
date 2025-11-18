import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5

  const addValue = () => {
    //  counter = counter + 1
    setCounter(counter + 1);
    // console.log("Clicked", counter)
    if (counter == 100) setCounter(counter); // It adjusts that the counter value should not be greater than 100.
  };

  const removeValue = () => {
    //  counter = counter - 1
    setCounter(counter - 1);
    // console.log("Clicked", counter)
    if (counter < 1) setCounter(counter); // It adjusts that the counter value should not be negative.
  };

  //   const addValue = () => {
  //   setCounter(prevCounter => (prevCounter < 100 ? prevCounter + 1 : 100));
  // };

  // const removeValue = () => {
  //   setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
  // };


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
