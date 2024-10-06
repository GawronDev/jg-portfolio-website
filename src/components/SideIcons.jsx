import React from "react";
import Twitter from "../assets/icons/mdi_twitter.svg";
import Github from "../assets/icons/github.svg";
import Youtube from "../assets/icons/mdi_youtube.svg";
import Codepen from "../assets/icons/mdi_codepen.svg";
import "../css/Menu.css";

export default function SideIcons() {
    return (
        <div className="menu-icon-container" id="icons">
            <div className="menu-item-icon">
                <a href="https://www.x.com/Codeolences">
                    <img src={Twitter} alt="Twitter icon" />
                </a>
            </div>
            <div className="menu-item-icon">
                <a href="https://www.youtube.com/@Codeolences">
                    <img src={Youtube} alt="Youtube icon" />
                </a>
            </div>
            <div className="menu-item-icon">
                <a href="https://codepen.io/Codeolences">
                    <img src={Codepen} alt="Codepen icon" />
                </a>
            </div>
            <div className="menu-item-icon">
                <a href="https://www.github.com/GawronDev">
                    <img src={Github} alt="Github icon" />
                </a>
            </div>
        </div>
    )
}
