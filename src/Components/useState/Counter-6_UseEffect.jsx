import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../UseContext/Parentcontext";

export default function Effect() {
    const [count, setCount] = useState(0);
    const [Age, setAge] = useState(60);
    const { isDark, setisDark } = useContext(AppContext);

    useEffect(() => {

    }, []);

    return (
        <div style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
            padding: "20px",
            textAlign: "center"
        }}>
            <button style={{
                width: "150px",
                height: "40px",
                backgroundColor: isDark ? "white" : "black",
                color: isDark ? "black" : "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "20px"
            }} onClick={() => {
                setisDark(!isDark);
            }}>Theme Change</button>
            <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Use Effect</h1>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>count={count}</h1>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>Age={Age}</h1>
            <button style={{
                width: "150px",
                height: "40px",
                backgroundColor: "rgb(50, 130, 184)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px"
            }} onClick={() => {
                setCount(count + 1);
            }}>Increase Count</button>
            <button style={{
                width: "150px",
                height: "40px",
                backgroundColor: "rgb(50, 130, 184)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }} onClick={() => {
                setAge(Age - 1);
            }}>Decrease Age</button>
        </div>
    );
}
