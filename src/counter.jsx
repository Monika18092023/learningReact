import{useState} from "react";
import "./card.css";

 function Counter(){
    let [count, setCount]= useState(0); // -1 
    // count = initail var
    // SetCount = function 
    // useState = var value store karta hai.


    // filter , map, reducer, [], {}, , table , 

 console.log(count)
    let increCount= ()=>{
        setCount(count+1); // 1 => 0+1=1, 2. => 1+1=2, 3. => 2+1=3, 2+1=3 
    }
  
    let decreCount= ()=>{

         setCount(count-1);  // 3-1 =2 , 
    
}
    return (
        <div className="card">
            <h3>Count = <span>{count}</span></h3>
            <button onClick={increCount} id="plusbutton">count increase</button>
            <button disabled={count==0} onClick={decreCount} id="minusbutton">count decrease</button>
        </div>
    )
}
export default Counter;