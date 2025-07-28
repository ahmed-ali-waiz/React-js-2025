import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" 
    style = {{backgroundColor : color}}
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-amber-50 px-4 py-2 rounded-xl">

    <button
    onClick={()=> setColor("red")}
    className="outline-none px-4 bg-red-500 rounded-full text-amber-50 shadow-xl">
      Red
    </button>
    <button
    onClick={()=> setColor("green")}
    className="outline-none px-4 bg-green-500 rounded-full text-amber-50 shadow-xl">
      Green
    </button>
    <button
    onClick={()=> setColor("blue")}
    className="outline-none px-4 bg-blue-500 rounded-full text-amber-50 shadow-xl">
      Blue
    </button>
    <button
    onClick={()=> setColor("yellow")}
    className="outline-none px-4 bg-yellow-500 rounded-full text-amber-50 shadow-xl py-2">
      Yellow
    </button>
      </div>
     </div>
    </div>
  );
}

export default App;
