import "react";
import Arrow from "../assets/icons/ArrowInCircle.svg";
import "../css/ArrowNav.css";

export default function ArrowNav(props) {
    return (
        <div class="arrow-nav">
            <h3>
                {props.text}
            </h3>
            <img src={Arrow} alt="Arrow icon" />
        </div>
    )
}