import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('Mounting...'+count)
        return()=>{
          console.log('Unmounting.....'+count);
          
        }
      },[count])

    return (
        
        <div>
            {console.log("//////////"+count)}
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <h1>Hey everybody: {count }</h1> 
        </div>
    )
}

export default Counter
