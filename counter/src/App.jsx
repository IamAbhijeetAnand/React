import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 5;

  const addValue =() => {
    console.log("Clicked Add", counter);

    // counter = counter+1;
    // setCounter(counter);
    
    // Or we can write 
     setCounter(counter+1);
  }

  const removeValue = () => {
    console.log("Clicked Remove", counter);
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>

      <br />
      <button
      onClick={removeValue}>
        Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
