import { useEffect, useState } from "react"

const Useeffect_one=()=>{
  const [data, setData]=useState([])
const api=async ()=>{
    const apiData=await fetch('https://jsonplaceholder.typicode.com/todos/1')
     const userdata=   await apiData.json()
     console.log(userdata)
     setData(userdata)
   
}
    useEffect(()=>{
       
       api()
    },[])
return (
    <div>
    <ul>
    {data
    }
    </ul>
      
     
    </div>
)
}

// export default Useeffect_one
// const Useeffect_one=()=>{
//   const [data, setData]=useState(null)
// console.log(data)
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(json=>setData(json))
       
//     },[])
// return (
//     <div>
//      <p>
//      {JSON.stringify(data,null)}
//      </p>
//     </div>
// )
// }

export default Useeffect_one


