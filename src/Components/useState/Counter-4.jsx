import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../UseContext/Parentcontext";
export default function Counter4() {
    const [age, setAge] = useState(10)
    const [sib, setsib] = useState(1)
    const {decreaseCount,isDark} = useContext(AppContext)
    useEffect(() => {
        alert(`Age is changed ${age}`)
    }, [age])
    return (
        <div style={{
            border:" 1px solid black",
            width:"50vw",
            margin:"auto",
            marginTop:"20px",
            height:"300px",
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
            
        }}>
            <h1>🔄 Counter - 4 🔄</h1>
            <p>Age: {age }</p>
            <p>Sib: { sib}</p>
            <button style={{
                cursor:"pointer",
                padding:"10px 10px",
                marginLeft:"30px"
            }}  onClick={() => { setAge(age => age + 1) }}>INcrease Age</button><button style={{
                cursor:"pointer",
                padding:"10px 10px",
                marginLeft:"30px"
            }}  onClick={() => { setsib(sib => sib + 1) }}>Increase Sib</button>
            <button style={{
                cursor:"pointer",
                padding:"30px 30px",
                marginLeft:"30px"
            }} onClick={() => {
                decreaseCount()
            }}>Decrease Count useing Usecontext Hook</button>


        </div>
    )
}
