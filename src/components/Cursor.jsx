import React, { useEffect, useRef } from "react";
import "../css/Cursor.css";

export default function Cursor() {
    const cursorRef = useRef();

    useEffect(()=>{
        document.addEventListener("mousemove", (event)=>{
            const left = event.clientX - 20;
            const top = event.clientY - 20;
            cursorRef.current.style.left = left + "px";
            cursorRef.current.style.top = top + "px";
        })
    }, [])

    return(
        <div className="cursor" id="cursor" ref={cursorRef}></div>
    )
}