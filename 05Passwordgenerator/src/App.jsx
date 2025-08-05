import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) {
      str += "0123456789"
    }
    if (charallowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberallowed, charallowed, setpassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-700'>
        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3  bg-blue-50"
            placeholder="Password"
            readOnly
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md transition-all duration-300 hover:scale-105"
          >
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex item-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {charallowed}
            onChange={()=>{
              charallowed((prev)=>!prev)
            }}
             />
             <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
