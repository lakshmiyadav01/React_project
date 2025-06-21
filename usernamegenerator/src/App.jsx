import React, { useState, useCallback, useRef } from 'react';

const App = () => {
  const [name , setName] = useState("")
  const [length, setLength] = useState(6)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charcterallowed, setCharcterAllowed] = useState(false)
  const [username, setUsername]= useState("")

  const usernameRef = useRef(null)

   const generateUsername = useCallback(() => {
    let baseName = (name.trim().replace(/\s+/g, ""));
    if (baseName.length === 0) return;

    let numbers = "0123456789";
    let symbols = "!@#$%&*";
    let randomPool = "";

    if (numberallowed) randomPool += numbers;
    if (charcterallowed) randomPool += symbols;

     if (!randomPool) {
      setUsername(baseName);
      return;
    }

    let randomPart = "";
    for (let i = 0; i < length; i++) {
      randomPart += randomPool.charAt(Math.floor(Math.random() * randomPool.length));
    }

    let finalUsername = ""
    for (let i = 0; i < Math.max(baseName.length, randomPart.length); i++) {
     if (i < baseName.length) finalUsername += baseName[i];
      if (i < randomPart.length) finalUsername += randomPart[i];
}
    setUsername(finalUsername);

  }, [length, numberallowed, charcterallowed, name]);



  const copyUser = useCallback(()=>{
    usernameRef.current?.select();
    usernameRef.current?.setSelectionRange(0, 15);
    window.navigator.clipboard.writeText(username)
  },[username])

  return (
    <>
    <div className='w-full h-screen bg-rose-600 text-slate-50 flex justify-center items-center'>
      <div className='w-150 bg-slate-700 h-100 rounded p-2'>
      <h1 className='text-center text-2xl'>Username Generator</h1>
      <div>
        <label className='text-xl'>Enter Your Name:</label>
        <input
        className='text-l mt-6 ml-2 bg-slate-800 rounded p-2 outline-none'
         type="text" placeholder='Enter your name'
         value={name}
         onChange={(e)=> setName(e.target.value)} />
         <br></br>
         <input className='mt-5 ' type='range' min={4} max={40} 
         value={length}
         onChange={(e)=> setLength(e.target.value)}/>
         <label  className='text-xl ml-2'>Length {length}</label>
         <input className='ml-4' type='checkbox'
         defaultChecked = {numberallowed}
         onChange={()=> setNumberAllowed((prev)=> !prev)}/>
         <label  className='text-xl ml-2'>Number</label>
          <input className='ml-4' type='checkbox'
          defaultChecked = {charcterallowed}
         onChange={()=> setCharcterAllowed((prev)=> !prev)}/>
         <label  className='text-xl ml-2'>Special Character</label>        
      </div>
         <div className='flex justify-center item-center mt-4'>
            <button className='bg-zinc-700 rounded py-2 px-4 text-xl text-slate-100'
            onClick={generateUsername}>Generate</button>
          </div>

          <div className='flex justify-center item-center mt-4'>
            <input
            className='text-2xl mt-6 bg-slate-800 rounded p-2 w-100 outline-none'
             type="text" 
             readOnly 
             ref={usernameRef}
             value={username}/>
              <button  className='text-2xl mt-6 bg-blue-700 rounded p-2 w-20'
              onClick={copyUser}>Copy</button>
          </div>
         
      </div>
    </div>
    </>
  )
}

export default App
