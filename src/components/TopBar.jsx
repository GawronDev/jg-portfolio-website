import { useEffect, useRef, useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import MenuX from "../assets/icons/MenuX.svg";
import Logo from "../assets/logo_fi_nbg.png";
import "../css/TopBar.css"
import Snap from "snapsvg-cjs";

export default function TopBar(props) {
    let [menuButtonState, setMenuButtonState] = useState("menu");
    let snapRef = useRef(null);

    useEffect(() => {
        if (!snapRef.current) {
            snapRef.current = Snap("#menu-icon");
            setMenuButtonState("menu");
            Snap.load(MenuIcon, (fragment) => {
                snapRef.current.clear();
                snapRef.current.append(fragment);
            });
        }
    }, []);

    function changeIcon() {
        if (snapRef.current) {
            if (menuButtonState == "menu") {
                Snap.load(MenuX, (fragment) => {
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");

                    currentPath.animate({ d: newPath.attr("d") }, 150, mina.easeout, () => {
                        currentPath.remove();
                        snapRef.current.clear();
                        snapRef.current.append(fragment);
                        props.openMenu();
                        setMenuButtonState("x");
                    });
                });
            }

            if (menuButtonState == "x") {
                Snap.load(MenuIcon, (fragment) => {
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");

                    currentPath.animate({ d: newPath.attr("d") }, 150, mina.easeout, () => {
                        currentPath.remove();
                        snapRef.current.clear();
                        snapRef.current.append(fragment);
                        props.closeMenu();
                        setMenuButtonState("menu");
                    });
                });
            }
        }
    }

    function cursorTurnOnHover() {
        let cursor = document.getElementById("cursor");
        cursor.style.width = "30px";
        cursor.style.backgroundColor = "#C595FF";
    }

    function cursorTurnOffHover() {
        cursor.style.width = "40px";
        cursor.style.backgroundColor = "transparent";
    }

    return (
        <div className="top-bar">
            <img className="logo" src={Logo} alt="Jakub Gawroński Logo" />
            <div className="menu-icon" onMouseEnter={cursorTurnOnHover} onMouseLeave={cursorTurnOffHover}>
                <svg id="menu-icon" onClick={changeIcon} width="100%" height="100%" viewBox="0 0 52 52"></svg>
            </div>
        </div>
    );
}