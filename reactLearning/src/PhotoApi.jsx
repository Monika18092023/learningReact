import { useEffect, useState } from "react"

const PhotoApi=()=>{
    // 

    const [data,setData]= useState([])
    const [search, setSearch]= useState("")
    useEffect(()=>{
        const apiData= async ()=>{
           const allData= await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
           const jsonData= await allData.json()
        //    console.log(jsonData)
        //    console.log(jsonData[0].url)
           setData(jsonData)
        }
        apiData()
    },[])

    return(
        <div>
            <input type="text" placeholder="Search text" value={search} onChange={(e)=>(setSearch(e.target.value))}/>
           {data.filter((el)=>(el.title.toLowerCase().includes(search.toLowerCase()))).map((el,index)=>{return <div className="bg-amber-600 p-1 m-1" key={index}>
            
             <h3>{el.title}</h3>
             <img src={el.url} alt="Image" />
             <img src={el.thumbnailUrl
               } alt="thumbnail" />
            
            </div>})}
        </div>
    )
}
export default PhotoApi