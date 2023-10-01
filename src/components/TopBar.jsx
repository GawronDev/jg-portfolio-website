import { useEffect, useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import MenuX from "../assets/icons/MenuX.svg";
import Logo from "../assets/logo_fi_nbg.png";
import "../css/TopBar.css"
import Snap from "snapsvg-cjs";

export default function TopBar() {
    let [menuButtonState, setMenuButtonState] = useState("menu");
    var snap;

    useEffect(()=>{
        if(snap == null){
            snap = Snap("#menu-icon");
            setMenuButtonState("menu");
            Snap.load(MenuIcon, (fragment)=>{
                snap.clear();
                snap.append(fragment);
            });
        }
    }, []);

    function changeIcon() {
        if(snap != undefined && menuButtonState == "menu"){
            Snap.load(MenuX, (fragment)=>{
                var currentPath = snap.select("path");
                var newPath = fragment.select("path");
                
                currentPath.animate({d: newPath.attr("d")}, 150, mina.easeout, () => {
                    currentPath.remove();
                    snap.clear();
                    snap.append(fragment);
                    setMenuButtonState("closed");
                });

            });
        }
    }

    return (
        <div className="top-bar">
            <img className="logo" src={Logo} alt="Jakub Gawroński Logo" />
            <svg className="menu-icon" id="menu-icon" onClick={changeIcon}></svg>
        </div>
    );
}