import { useEffect, useState } from "react"

const Post=()=>{
    // https://jsonplaceholder.typicode.com/posts?_limit=10
    const [post, setPost]=useState([])
    const [loader,setLoader]=useState(false)
    
        const fetchdata = async ()=>{
            try{
                 setLoader(true)
            const data= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
              const api= await data.json()
            
                setPost(api)
              setLoader(false)
              
            }
    catch(err){
      console.log(err)
      
    }}
   
    // export default function App() {
    //   const [count, setCount] = useState(0);
    
    //   console.log("1");
    
    //   useEffect(() => {
    //     console.log("2");
    //   });
    
    //   console.log("3");
    //   return (
    //     <div>
    //       <div className="flex item-center flex-col justify-center">
    //         <p>Count:{count}</p>
    //         <button
    //           className="bg-red-700 w-6 p-2"
    //           onClick={() => setCount(count + 1)}
    //         >
    //           +
    //         </button>
    //       </div>
    //     </div>
    //   );
    // }


return(
   <div>
    <button onClick={fetchdata}>apiData</button>
    <div>
      {loader ? <h1>Loading...</h1> : 
       post.map((e,index)=>(<p key={index}>{e.title}</p>))}
    </div>
    

   </div>
        

)
}
export default Post