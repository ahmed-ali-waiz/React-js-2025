import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-green-400 text-black
        p-4 rounded-xl'>Tailwind text</h1>
        <Card username = "Ahmad" />
        <Card username='Ali'/>
        <Card username='Waiz'/>
      </div>
     
    </>
  )
}

export default App
