import React, { useEffect, useState } from 'react'

function Progress({value=0}) {
    const[percent,setpercent]=useState(value)
    useEffect(()=>{
        if(percent<100){
            setTimeout(() => {setpercent((prev)=>prev+1)
                
            }, 200);
        }
    },[percent])
  return (
    <>
         <div className="w-4/12 h-5 rounded-full border flex items-start">
              <div style={{width:`${percent}%`}}
              className="bg-green-500 h-full rounded-full text-white flex items-center justify-center mb-3"
              >{percent}%</div>
              
         </div>
         <div>{percent<100?<p className="mt-2 text-lg">Loading...</p>:<p className="mt-2 text-lg">Complete!</p>}</div>
    </>
  )
}

export default Progress