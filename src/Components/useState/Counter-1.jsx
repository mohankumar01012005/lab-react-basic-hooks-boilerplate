import React,{ useContext, useState } from "react";
import {useEffect} from "react"
import ParentContext, { AppContext } from "../UseContext/Parentcontext";
export default function Counter1(){

    
    const {mainCount,setMainCount,increaseCount,isDark,setisDark}= useContext(AppContext)
    // const {increaseCount}=useContext(AppContext)
    
    useEffect(()=>{
    console.log("Age:",{currentAge} );
    console.log("Counter3 mounted")
    })
    const[currentAge,setCurrentAge]=useState(20)
        return(
        <div style={{
            border:" 1px solid black",
            width:"500px",
            margin:"auto",
            marginTop:"20px",
            height:"350px",
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
            
        }}>
            <button onClick={()=>{setisDark(!isDark)}}>Theme Change</button>
           <h1>🔄 Counter 1 🔄</h1>
           <p>Age: {currentAge}</p>
           <button style={{
            width:"100px",
            padding:"10px 10px",
            borderRadius:"30px",
            cursor:"pointer"
           }} onClick={()=>{
            setCurrentAge(currentAge+10)
           }}>Increase</button>
           <button style={{
            width:"100px",
            marginLeft:"50px",
            padding:"10px 10px",
            borderRadius:"30px",
            cursor:"pointer"
           }} onClick={()=>{
            setCurrentAge(currentAge-1)
           }}>Decrease</button>
           <button style={{
            width:"300px",
            marginLeft:"50px",
            padding:"10px 10px",
            borderRadius:"30px",
            cursor:"pointer",
            marginTop:"30px"
           }} onClick={()=>{
            setMainCount(mainCount+1000)
           }}>Increase Mian Count in counter 2 using use context method</button>
           {/* <button onClick={increaseCount()}>Count Increase using App Context</button> */}
        </div>
    )

}