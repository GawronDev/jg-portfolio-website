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
            document.getElementById("menu").style.overflowY = "hidden";
            document.getElementById("menu").style.height = "100%";
            document.getElementById("menu").style.opacity = "100%";
            setTimeout(() => {
                fadeInMenuItem(0);
            }, 200);
            setTimeout(() => {
                document.getElementById("menu").style.overflowY = "auto";
            }, 500);
        } else if (props.status == "closed") {
            document.getElementById("menu").style.overflowY = "hidden";
            fadeOutMenuItem(5);
            setTimeout(() => {
                document.getElementById("menu").style.height = "0%";
            }, 500);
            setTimeout(() => {
                document.getElementById("menu").style.opacity = "0%";
            }, 200);
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
                    <h2><a className="menu-link hover-underline-animation" href="#" onClick={(event) => { props.changeMenuState(); scrollToElement("home") }}><span className="orange">1.</span> Landing page</a></h2>
                </div>

                <div className="menu-item">
                    <h2><a className="menu-link hover-underline-animation" href="#projects" onClick={(event) => { props.changeMenuState(); scrollToElement("projects") }}><span className="orange">2.</span> My work</a></h2>
                </div>

                <div className="menu-item">
                    <h2><a className="menu-link hover-underline-animation" href="https://www.youtube.com/@Codeolences"><span className="orange">3.</span> YouTube</a></h2>
                </div>

                <div className="menu-item">
                    <h2><a className="menu-link hover-underline-animation" href="#"><span className="orange">4.</span> About me</a></h2>
                </div>
                <div className="menu-item">
                    <h2><a className="menu-link hover-underline-animation" href="#"><span className="orange">5.</span> Let's get in touch</a></h2>
                </div>
            </div>
        </div>
    );
}