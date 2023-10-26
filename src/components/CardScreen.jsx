import React from "react";
import Card from "../components/Card";
import "../css/CardScreen.css"

export default function CardScren(){
    return(
        <div className="card-wrapper">
            <Card headerText="WHY?" paragraphText="Having a well-designed and user-friendly website is crucial for any business looking to succeed in today's digital world. A website serves as the online face of a company and can be a determining factor in attracting and retaining customers." />
            <Card headerText="HOW?" paragraphText="By means of carefully crafted user interface, based on thoughtful experience-based test (UX), than through high-quality, search engine optimised code crafted for your project. "/>
            <Card headerText="MORE?" paragraphText="If you want to learn more about who I am and what I do, please keep scrolling or check out the Blog for articles related to web design, search engine optimisation, artificial intelligence, 3D design, video editing and much more!" button={true} buttonText="Blog" buttonRefrence="#"/>
        </div>
    )
}