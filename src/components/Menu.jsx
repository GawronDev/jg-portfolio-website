import { useEffect } from "react";
import Twitter from "../assets/icons/mdi_twitter.svg";
import Github from "../assets/icons/github.svg";
import Youtube from "../assets/icons/mdi_youtube.svg";
import Codepen from "../assets/icons/mdi_codepen.svg";
import "../css/Menu.css";

export default function Menu(props) {

    var menuItems = document.querySelectorAll(".menu-item");
    var separators = document.querySelectorAll(".separator");

    // Change the menu item based on the current menu state
    useEffect(() => {
        if (props.status == "open") {
            document.getElementById("arrow").style.opacity = "0";
            document.getElementById("menu").style.overflowY = "hidden";
            document.getElementById("menu").style.height = "100%";
            setTimeout(() => {
                fadeInMenuItem(0);
            }, 200);
            setTimeout(() => {
                document.getElementById("menu").style.overflowY = "auto";
            }, 500);
        } else if (props.status == "closed") {
            document.getElementById("menu").style.overflowY = "hidden";
            fadeOutMenuItem(4);
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
            element.scrollIntoView({ behavior: 'instant' });
        }
    }

    return (
        <div className="menu" id="menu">
            <div className="menu-content-wrapper">
                <div className="menu-item">
                    <h2><a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} className="menu-link hover-underline-animation" href="#" onClick={(event) => { props.changeMenuState(); scrollToElement("home") }}>Landing page</a><span className="orange">1</span></h2>
                </div>

                <div className="menu-item">
                    <h2><a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} className="menu-link hover-underline-animation" href="#about-me" onClick={(event) => { props.changeMenuState(); scrollToElement("about-me") }}> About me</a><span className="orange">2</span></h2>
                </div>

                <div className="menu-item">
                    <h2><a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} className="menu-link hover-underline-animation" href="#my-work" onClick={(event) => { props.changeMenuState(); scrollToElement("my-work") }}>My work</a><span className="orange">3</span></h2>
                </div>

                <div className="menu-item">
                    <h2><a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} className="menu-link hover-underline-animation" href="https://www.youtube.com/@Codeolences"> YouTube</a><span className="orange">4</span></h2>
                </div>

                <div className="menu-item">
                    <h2><a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} className="menu-link hover-underline-animation" href="#contact" onClick={(event) => { props.changeMenuState(); scrollToElement("contact") }}> Let's get in touch</a><span className="orange">5</span></h2>
                </div>
            </div>
        </div>
    );
}