import React, { useState } from "react";
import { useContext } from 'react';
import { AppContext } from "../UseContext/Parentcontext";

export default function Counter3() {
  const [Age_Siblings, setAge_Siblings] = useState({ Age: 19, Siblings: 3 });
const {isDark}=useContext(AppContext)
 function Handle_Name_Age(){
    setAge_Siblings({

        ...Age_Siblings,
        Age:Age_Siblings.Age+1
    })
 }
 function Handle_Sibblings_Age(){
    setAge_Siblings({

        ...Age_Siblings,
        Siblings:Age_Siblings.Siblings+1
    })
 }

  const { Age, Siblings } = Age_Siblings;

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
         <h1>🔄 Counter 3 🔄</h1>
      <h3>My Current Age is {Age}</h3>
      <h4>My siblings {Siblings}</h4>
      <button style={{
    width:"100px",
    marginLeft:"50px",
    padding:"10px 10px",
    borderRadius:"30px",
    cursor:"pointer"}} onClick={() => { Handle_Name_Age("Age") }}>Increase Age</button>
      <button style={{
    width:"100px",
    marginLeft:"50px",
    padding:"10px 10px",
    borderRadius:"30px",
    cursor:"pointer"}} onClick={() => { Handle_Sibblings_Age("Siblings") }}>Increase Siblings</button>
    </div>
  );
}
