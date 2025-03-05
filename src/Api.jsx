import React, { useEffect, useState } from 'react'

const Api = () => {
   const [userData, setUserData]=useState([])
   const [search, setSearch]=useState("")
console.log(search)
//  fetch("https://jsonplaceholder.typicode.com/users")
 const getUserInformation = async ()=>{
 let data= await fetch("https://jsonplaceholder.typicode.com/users");
 let jsondata= await data.json()
 setUserData(jsondata)
//  console.log(jsondata)
 }
    useEffect(()=>{
getUserInformation()
    },[])
  

    
  return (
    <>
     <div>
      <h1>API Testing</h1>
      <input  value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='search user detail'></input>
      <table>
         <thead>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
            </tr>
         </thead>
         <tbody>
            {
                userData.filter((value)=>value.name.toLowerCase().includes(search.toLowerCase())).map((value, indx)=>{
                    return(
                        <tr key={indx}>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                     
                    </tr>
                    )
                })
            }
          
         </tbody>
      </table>

    </div>
   
    </>
   
  )
}

export default Api
