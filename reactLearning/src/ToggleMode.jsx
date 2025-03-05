import { useEffect, useState } from "react";

// const ToggleMode = () => {
//   const [darkmode, setDarkmode] = useState(false);
//   useEffect(() => {
//     document.body.style.backgroundColor = darkmode ? "black" : "white";
//     document.body.style.color = darkmode ? "white" : "black";
//   }, [darkmode]);
//   const Monika=()=>{
//       setDarkmode(!darkmode)
//   }
//   return (
//     <div>
//         <div onClick={Monika}>
//             <img src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg?w=1670" alt="Image" />
//             <p >Name</p>
//             <p>Description</p>
//         </div>
//       {/* <button onClick={Monika}>Toggle Button</button> */}
//     </div>
 
//   );
// };



const ToggleMode=()=>{
 const [count, setCount]= useState(0)
 const [text, setText]= useState("")
 console.log(text)

 useEffect(()=>{
    console.log(`text or count changed`)
 },[count,text])

 return(
    <div>
        <button onClick={()=>{setCount(count+1)}}>button</button>
        <input type="text" value={text} placeholder="give name" onChange={(e)=>{setText(e.target.value)}} />
    </div>
 )
}
export default ToggleMode;
