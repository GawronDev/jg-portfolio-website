import { useEffect } from "react";
import "../css/Menu.css";

export default function Menu(props){
    useEffect(()=>{
        if(props.status == "open") {
            document.getElementById("menu").style.height = "100%";
        } else if (props.status == "closed") {
            document.getElementById("menu").style.height = "0%";
        }
    },[props.status]);

    return (
    <div className="menu" id="menu">

    </div>
    );
}