import React, { useState } from 'react'

const App = () => {
  const [color,  setColor] = useState("black")
  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    onClick={()=> setColor("black")}
    ></div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Red"}}
          onClick={()=> setColor("Red")}
          >red</button>

            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
           onClick={()=> setColor("blue")}
          >Blue</button>

            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
           onClick={()=> setColor("green")}
          >Green</button>

            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
           onClick={()=> setColor("orange")}
          >Orange</button>

            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}
           onClick={()=> setColor("purple")}
          >Purple</button>


            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}
           onClick={()=> setColor("Pink")}
          >Pink</button>


            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Brown"}}
           onClick={()=> setColor("brown")}
          >Brown</button>


            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Silver"}}
           onClick={()=> setColor("silver")}
          >Silver</button>


            <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Olive"}}
           onClick={()=> setColor("olive")}
          >Olive</button>
      </div>
    </div>
    </>
  )
}

export default App
