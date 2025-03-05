
// import Counting from "./counter";

import { useState, useEffect } from "react"

function App() {

// const [count,setCount]=useState(0)
// const [calculation, setCalculation]=useState(0)
// useEffect(()=>{
//    setCalculation(count*2)
// })
 const [message,setMessage]=useState('Hi there, how are you?')
 useEffect(()=>{
   console.log('useEffect trigger')
   setTimeout(()=>{setMessage('I am fine. Thanks for asking')},1000)
 })
 
   return (
      <div>
       
         {/* <p>Count: {count}</p>
         <button onClick={()=>setCount((c)=>c+1)}>+</button>
         <p>Calculation: {calculation}</p> */}
   <h1 className="mt-9 bg-blue-800">{message}</h1>
      </div>
   )
}
export default App
