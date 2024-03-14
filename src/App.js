import logo from './logo.svg';
import './App.css';
import Progress from './component/Progress';
import { useEffect, useState } from 'react';

function App() {
  const[progress,setprogress]=useState(0)

  useEffect(()=>{
    setInterval(() => {
      setprogress((val)=>val+1)
      
    }, 100);
  },[])
  return (
   <>
    <div >
        <h1 className="flex items-center justify-center mt-12 text-2xl font-semibold">Progress Bar</h1>
        <div className="flex flex-col items-center justify-center mt-4">
         <Progress  value={progress}/>
        </div>
        
    </div>
   </>
  );
}

export default App;
