import {useEffect,useState} from 'react';


const useInterval = (callBack, intervalTime) =>{
    const [isRunning,setIsRunning] = useState(false);
     useEffect(()=>{
         if(!isRunning || intervalTime === null) return;
        const intervalId =  setInterval(()=>{
            callBack()
        },intervalTime)

         return () =>{
             if(intervalId){
                 clearInterval(intervalId)
             }
         }
    },[callBack,isRunning])

    const start = () => setIsRunning((prev)=>!prev);
    const stop = () => setIsRunning(false);
    return {isRunning, start, stop,}
 }

export default function CounterInterview() {
    const [counter,setCounter] = useState(0);


    const increaseCounter = () =>{
        setCounter((prev)=>prev+1)
    }
      const {isRunning, start,stop} = useInterval(increaseCounter,1000);

  return(
      <>
          <h1>{counter}</h1>
          <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
      </>
  )
}
