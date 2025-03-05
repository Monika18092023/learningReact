import { useState } from "react";

 const Counter=()=>{
   const [count,setCount]=useState(0)
   const incre=()=>{
    setCount(count+1)
   }
   const decre=()=>{
    setCount(count-1)
   }
   const reset=()=>{
    setCount(0)
   }
    return(
        <div>
            <h1>count: {count}</h1>
            {count%2==0?`Counter is even`:`Counter is odd`}
 <button onClick={incre}>increse</button><br />
 <button onClick={reset}>reset</button><br />
 <button onClick={decre} disabled={count==0}>decrease</button>
        </div>
    )
 }
 export default Counter;