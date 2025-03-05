import { useEffect, useState } from "react"

// Wait , i am reading your code...
const TestApi= ()=>{
    const [userTableData, setUserTableData]=useState([])
    const [search, setSearch]=useState("")
    console.log(userTableData)
    const userData=async()=>{
        const api= await fetch("https://jsonplaceholder.typicode.com/users")
        const tableData= await api.json()
        setUserTableData(tableData)
        console.log(tableData)
    }
    useEffect(()=>{
        userData()
    },[])

    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {userTableData.filter(value=>value.name.toLowerCase().includes(search.toLowerCase())).map((value, index)=>{
                    return(
                        <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        </tr>
                    )
                })}
              
            </tbody>
          </table>
        </div>
    )
}
export default TestApi