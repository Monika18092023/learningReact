import { useState } from "react"
import { useEffect } from "react"

const PostById=()=>{
     const [id,setId]=useState(1)
     const [data, setData]=useState(null)
     console.log( data)
     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(kuchnhi=>setData(kuchnhi))
     },[id])
    return (
        <div className="flex align-center flex-col justify-center">
        <h1 className="bg-green-100">{JSON.stringify(data,null,2)}</h1>
        <button className="bg-gray-300 p-5 w-fit " onClick={()=>(setId(id+1))}>fetchNext</button>
        </div>
    )
}
export default PostById




















// import { useState, useEffect } from "react";

// function StockPrice() {
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     const fetchStockPrice = async () => {
//       // Simulate fetching stock price from an API
//       const newPrice = (Math.random() * 10000).toFixed(0);
//       setPrice(newPrice);
//     };

//     fetchStockPrice(); // Fetch immediately

//     const interval = setInterval(() => {
//       fetchStockPrice();
//     }, 600); // Fetch new price every 5 seconds

//     return () => {
//       clearInterval(interval);
//       console.log("Cleanup: Stopped fetching stock prices");
//     };
//   }, []);

//   return <h2>Stock Price: ₹{price}</h2>;
// }

// export default StockPrice;
