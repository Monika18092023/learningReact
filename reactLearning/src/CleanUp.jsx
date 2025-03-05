import { useState,useEffect } from "react"

const CleanUp=()=>{
    const [count, setCount]= useState(0)  
    console.log(count)

    useEffect(()=>{
      const intervalId = setInterval(()=>{
         setCount(prev=>prev+1)
         
      },1000)
      console.log(intervalId)
    // return clearInterval(IntervalId)
    return ()=>{clearInterval(intervalId)}
    },[])
  return(
    <div>
      <h2>counter : {count}</h2>
    </div>
  )
}
export default CleanUp