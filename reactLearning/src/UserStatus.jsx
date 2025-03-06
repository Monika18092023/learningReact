import { useEffect, useState } from "react"

const UserStatus= ()=>{
    const [status, setStatus]= useState(navigator.onLine)
    useEffect(()=>{
      const updateStatus=()=>{setStatus(navigator.onLine)}
       window.addEventListener("online",updateStatus)
       window.addEventListener("offline",updateStatus)

       return ()=>{ window.removeEventListener("online",updateStatus)
               window.removeEventListener("offline",updateStatus)
           }
    },[])
return(
    <div>
       {status?"🟢 Online" : "🔴 Offline"}
    </div>
)
}
export default UserStatus