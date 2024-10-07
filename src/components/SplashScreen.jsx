import React, { useEffect } from "react";
import "../css/SplashScreen.css";

export default function SplashScreen() {
    let tl1 = gsap.timeline({ delay: 0 });
    let tl2 = gsap.timeline({ delay: 0.8 });
    let tl3 = gsap.timeline({ delay: 2.6 });
    useEffect(() => {
        tl1.to(document.getElementById("jakub"), {
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(2)",
        });
        tl2.to(document.getElementById("portfolio"), {
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(2)",
        });
        tl3.to(document.getElementById("splash"), {
            height: "0px",
            opacity: "0",
            duration: 0.5,
            ease: "back.out(0)",
        });
    }, []);

    return(
        <div className="splash-screen" id="splash">
            <div className="splash-screen-content">
                <div className="splash-screen-title">
                    <h1><span id="jakub">Jakub's</span> <span id="portfolio" className="orange-text">portfolio</span></h1>
                </div>
            </div>
        </div>
    )
}