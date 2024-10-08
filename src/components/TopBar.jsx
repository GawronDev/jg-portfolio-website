import { useEffect, useRef, useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import MenuX from "../assets/icons/MenuX.svg";
import Logo from "../assets/logo_light.png";
import "../css/TopBar.css"
import Snap from "snapsvg-cjs";

export default function TopBar(props) {
    let snapRef = useRef(null);

    useEffect(() => {
        if (!snapRef.current) {
            snapRef.current = Snap("#menu-icon");
            Snap.load(MenuIcon, (fragment) => {
                snapRef.current.clear();
                snapRef.current.append(fragment);
            });
        }
    }, []);

    useEffect(() => {
        changeIcon();
    }, [props.status]);

    function clickMenuButton() {
        props.changeMenuState();
    }

    function changeIcon() {
        if (snapRef.current) {
            if (props.status == "open") {
                Snap.load(MenuX, (fragment) => {
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");

                    currentPath.animate({ d: newPath.attr("d") }, 150, mina.easeout, () => {
                        currentPath.remove();
                        snapRef.current.clear();
                        snapRef.current.append(fragment);
                    });
                });
            }

            if (props.status == "closed") {
                Snap.load(MenuIcon, (fragment) => {
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");

                    currentPath.animate({ d: newPath.attr("d") }, 150, mina.easeout, () => {
                        currentPath.remove();
                        snapRef.current.clear();
                        snapRef.current.append(fragment);
                    });
                });
            }
        }
    }

    
    return (
        <div className="top-bar">
            <img className="logo" src={Logo} alt="Jakub Gawroński Logo" />
            <div className="menu-icon" onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover}>
                <svg id="menu-icon" onClick={clickMenuButton} width="100%" height="100%" viewBox="0 0 52 52"></svg>
            </div>
        </div>
    );
}