import { useState,useCallback } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password , setpassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    
  } , [])

  return (
   <div className="h-screen bg-[#212121] text-white flex items-center justify-center">
    <h1 className='text-4xl text-center '>
    I am Ahmad
    </h1>
   </div>
  )
}

export default App
