import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  let addValue = ()=>{
   if(counter<20){
     counter = counter + 1;
    setCounter(counter)
    console.log("Clicked", counter,Math.random())
   }
  }

  let removeValue = ()=>{
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter)
    console.log("Clicked",counter)
    } 
  }

  return (
    <>
     <h1>My counter app</h1>
     <h2>Counter value :{counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />

     <button 
     onClick = {removeValue}
     >Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
