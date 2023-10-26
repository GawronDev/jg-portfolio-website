import React from "react";
import "../css/Button.css"

export default function Button(props) {
    return (
        <button className="button"><a href={props.refrence}>{props.text}</a></button>
    )
}