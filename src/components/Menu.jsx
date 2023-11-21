import { useEffect } from "react";
import Twitter from "../assets/icons/mdi_twitter.svg";
import Github from "../assets/icons/github.svg";
import Youtube from "../assets/icons/mdi_youtube.svg";
import Codepen from "../assets/icons/mdi_codepen.svg";
import "../css/Menu.css";

export default function Menu(props) {

    var menuItems = document.querySelectorAll(".menu-item");

    // Change the menu item based on the current menu state
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
            setTimeout(() => {
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
            setTimeout(() => {
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

    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'instant'});
        }
    }

    return (
        <div className="menu" id="menu">
            <div className="menu-content-wrapper">
                <div className="menu-item">
                    <span>1. Landing page</span>
                    <h2><a className="menu-link hover-underline-animation" href="#" onClick={(event) => { props.changeMenuState(); scrollToElement("home") }}>START HERE</a></h2>
                </div>
                <div className="menu-item">
                    <span>2. Projects</span>
                    <h2><a className="menu-link hover-underline-animation" href="#projects" onClick={(event) => { props.changeMenuState(); scrollToElement("projects") }}>MY WORK</a></h2>
                </div>
                <div className="menu-item">
                    <span>3. My channel</span>
                    <h2><a className="menu-link hover-underline-animation" href="https://www.youtube.com/@Codeolences">YOUTUBE</a></h2>
                </div>
                <div className="menu-item">
                    <span>4. About me</span>
                    <h2><a className="menu-link hover-underline-animation" href="#">WHO AM I</a></h2>
                </div>
                <div className="menu-item">
                    <span>5. Useful articles</span>
                    <h2><a className="menu-link hover-underline-animation" href="#">BLOG</a></h2>
                </div>
                <div className="menu-item">
                    <span>6. Contact me</span>
                    <h2><a className="menu-link hover-underline-animation" href="#">GET IN TOUCH</a></h2>
                </div>
            </div>
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
        </div>
    );
}