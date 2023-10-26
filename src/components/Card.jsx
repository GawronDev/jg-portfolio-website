import React from "react";
import Button from "./Button";
import "../css/Card.css";

export default function Card(props) {
    return(
        <div className="card">
            <h2 className="card-header">{props.headerText}</h2>
            <p className="card-paragraph">
                {props.paragraphText}
            </p>
            {props.button ? <Button text={props.buttonText} refrence={props.buttonRefrence}/> : undefined}
        </div>
    )
}