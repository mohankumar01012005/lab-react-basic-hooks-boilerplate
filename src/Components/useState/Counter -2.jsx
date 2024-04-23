import React,{ useState } from "react";
import { useContext } from "react";
import { AppContext } from "../UseContext/Parentcontext";

export default function AgeMy_AgeNoSib(){
    const {mainCount,isDark}= useContext(AppContext)

    const [currentAge,setCurrentAge] = useState(19);
    const [currentSibblings,setCurrentSiblings] = useState(1);
    
    const IncreaseSibblingAge = ()=>{
        setCurrentAge(currentAge+1);
    }
  
    const IncreaseSibblings = ()=>{
        setCurrentSiblings(currentSibblings+1);
    }
    const DecreaseSibblings = ()=>{
        setCurrentSiblings(currentSibblings-1);
    }
  
  
    return (
      <div style={{
        border:" 1px solid black",
        width:"500px",
        margin:"auto",
        marginTop:"20px",
        height:"300px",
        backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
        
    }}>
         <h1>🔄 Counter 2 🔄</h1>
        <h3>🔄 My Current Age is {currentAge} 🔄</h3>
        <h4>🔄 My siblings {currentSibblings} 🔄</h4>
  
        <button style={{
    width:"100px",
    marginLeft:"50px",
    padding:"10px 10px",
    borderRadius:"30px",
    cursor:"pointer"}} onClick={IncreaseSibblingAge}>Older My age</button>
        <button style={{
    width:"100px",
    marginLeft:"50px",
    padding:"10px 10px",
    borderRadius:"30px",
    cursor:"pointer"}} onClick={IncreaseSibblings}>Have More Sibblings</button>
        <button style={{
    width:"100px",
    marginLeft:"50px",
    padding:"10px 10px",
    borderRadius:"30px",
    cursor:"pointer"}} onClick={DecreaseSibblings}>Have Less Sibblings</button>
    <h3>count {mainCount}</h3>
     
     
      </div>
    );
  }