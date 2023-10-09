import { useEffect } from "react";
import Twitter from "../assets/icons/mdi_twitter.svg";
import Github from "../assets/icons/github.svg";
import Youtube from "../assets/icons/mdi_youtube.svg";
import Codepen from "../assets/icons/mdi_codepen.svg";
import "../css/Menu.css";

export default function Menu(props) {
    var menuItems = document.querySelectorAll(".menu-item");
    useEffect(() => {
        if (props.status == "open") {
            document.getElementById("menu").style.overflowY = "hidden";
            document.getElementById("menu").style.height = "100%";
            setTimeout(() => {
                fadeInMenuItem(0);
            }, 200);
            setTimeout(() => {
                document.getElementById("icons").style.opacity = "100%";
            }, 500);
            setTimeout(()=>{
                document.getElementById("menu").style.overflowY = "auto";
            }, 500);
        } else if (props.status == "closed") {
            document.getElementById("menu").style.overflowY = "hidden";
            fadeOutMenuItem(5);
            setTimeout(() => {
                document.getElementById("icons").style.opacity = "0%";
            }, 0);
            setTimeout(() => {
                document.getElementById("menu").style.height = "0%";
            }, 500);
            setTimeout(()=>{
                document.getElementById("menu").style.overflowY = "auto";
            }, 1000);
        }
    }, [props.status]);

    function fadeInMenuItem(index) {
        if (index < menuItems.length) {
            menuItems[index].style.opacity = "100%";
            setTimeout(() => {
                fadeInMenuItem(index + 1);
            }, 100);
        }
    }

    function fadeOutMenuItem(index) {
        if (menuItems[index] == undefined) {
            return;
        }
        if (index >= 0) {
            menuItems[index].style.opacity = "0%";
            setTimeout(() => {
                fadeOutMenuItem(index - 1);
            }, 50);
        }
    }

    return (
        <div className="menu" id="menu">
            <div className="menu-content-wrapper">
                <div className="menu-item">
                    <span>1. Landing page</span>
                    <h2>START HERE</h2>
                </div>
                <div className="menu-item">
                    <span>2. Projects</span>
                    <h2>MY WORK</h2>
                </div>
                <div className="menu-item">
                    <span>3. My channel</span>
                    <h2>YOUTUBE</h2>
                </div>
                <div className="menu-item">
                    <span>4. About me</span>
                    <h2>WHO AM I</h2>
                </div>
                <div className="menu-item">
                    <span>5. Useful articles</span>
                    <h2>BLOG</h2>
                </div>
                <div className="menu-item">
                    <span>6. Contact me</span>
                    <h2>GET IN TOUCH</h2>
                </div>
            </div>
            <div className="menu-icon-container" id="icons">
                <div className="menu-item-icon">
                    <img src={Twitter} alt="Twitter icon"/>
                </div>
                <div className="menu-item-icon">
                    <img src={Youtube} alt="Youtube icon"/>
                </div>
                <div className="menu-item-icon">
                    <img src={Codepen} alt="Codepen icon"/>
                </div>
                <div className="menu-item-icon">
                    <img src={Github} alt="Github icon"/>
                </div>
            </div>
        </div>
    );
}