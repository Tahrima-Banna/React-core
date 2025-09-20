import { useState } from "react"

export default function Batsman(){
    const[runs,setRuns]= useState(0)
    const [sixes,setSixes]=useState(0)

     const handleSingle=()=>{
        const updateRuns = runs+1;
        setRuns(updateRuns);
     }
      const handleSix=()=>{
        const updateRuns = runs+6;
        setRuns(updateRuns);
        const updateSixes =runs+1;
        setSixes(updateSixes);
     }
      const handleFour=()=>{
        const updateRuns = runs+4;
        setRuns(updateRuns);
     }
  return(
    <div>
        <h3>Player:Bangladeshi Batsman</h3>
        <h4>Sixes:{sixes}</h4>
        {
            runs>=50 &&<p>Your score:{runs}</p>
        }
        <h1>Score:{runs}</h1>
        <button onClick={handleSingle}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
    </div>
  )
}