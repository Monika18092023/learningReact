import { useEffect } from "react"

const Useeffect_cleanUp=()=>{
    useEffect(()=>{
        const handleresize=()=>{
           console.log('window resize', window.innerWidth)
        }
     window.addEventListener('resize',handleresize)
     
     return ()=>{
        window.removeEventListener('resize',handleresize)
        console.log('cleanup')
     }
    },[])
return (
    <div>
      hello
    </div>
)
}
export default Useeffect_cleanUp