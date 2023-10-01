import { useEffect, useRef, useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon.svg";
import MenuX from "../assets/icons/MenuX.svg";
import Logo from "../assets/logo_fi_nbg.png";
import "../css/TopBar.css"
import Snap from "snapsvg-cjs";

export default function TopBar(props) {
    let [menuButtonState, setMenuButtonState] = useState("menu");
    let snapRef = useRef(null);

    useEffect(()=>{
        if(!snapRef.current){
            snapRef.current = Snap("#menu-icon");
            setMenuButtonState("menu");
            Snap.load(MenuIcon, (fragment)=>{
                snapRef.current.clear();
                snapRef.current.append(fragment);
            });
        }
    }, []);

    function changeIcon() {
        if(snapRef.current) {
            if(menuButtonState == "menu"){
                Snap.load(MenuX, (fragment)=>{
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");
                    
                    currentPath.animate({d: newPath.attr("d")}, 150, mina.easeout, () => {
                        currentPath.remove();
                        snapRef.current.clear();
                        snapRef.current.append(fragment);
                        props.openMenu();
                        setMenuButtonState("x");
                    });
                });
            }

            if(menuButtonState == "x"){
                Snap.load(MenuIcon, (fragment)=>{
                    var currentPath = snapRef.current.select("path");
                    var newPath = fragment.select("path");
                    
                    currentPath.animate({d: newPath.attr("d")}, 150, mina.easeout, () => {
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

    return (
        <div className="top-bar">
            <img className="logo" src={Logo} alt="Jakub Gawroński Logo" />
            <svg className="menu-icon" id="menu-icon" onClick={changeIcon}></svg>
        </div>
    );
}