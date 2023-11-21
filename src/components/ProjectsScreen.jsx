// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import Lgpd1 from "../assets/project-images/lgpd1.jpeg";
import Lgpd2 from "../assets/project-images/lgpd2.jpeg";
import Mgd1 from "../assets/project-images/mgd1.jpeg";
import Mgd2 from "../assets/project-images/mgd2.jpeg";
import Mdg1 from "../assets/project-images/mdg1.jpg";
import Scz1 from "../assets/project-images/szc1.jpeg";
import Scz2 from "../assets/project-images/szc2.jpeg";
import Lcky1 from "../assets/project-images/lcky1.jpeg";
import Lcky2 from "../assets/project-images/lcky2.jpeg";
import ArrowNav from "./ArrowNav";


import "../css/ProjectScreen.css";

export default function ProjectScreen() {


    useEffect(() => {
        let landscape = window.matchMedia("(orientation: landscape)");

        landscape.addEventListener("change", function (e) {
            if (e.matches) {
                imageScroller();
            } else {
                disableImageScroller();
            }
        });

        if(landscape.matches){
            imageScroller();
        }
    }, [])
    function disableImageScroller() {
        const track = document.getElementById("image-scroller");

        for (const image of track.getElementsByClassName("image-container")) {
            image.style.transform = "none";
        }

        window.onmousedown = e => e;

        window.ontouchstart = e => e;

        window.onmouseup = e => e;

        window.ontouchend = e => e;

        window.onmousemove = e => e;

        window.ontouchmove = e => e;

    }

    function imageScroller() {
        const track = document.getElementById("image-scroller");

        for (const image of track.getElementsByClassName("image-container")) {
            let random = Math.ceil(Math.random() * 100);
            image.style.transform = "translate(0, " + random + "px)";
        }

        const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        const handleOnMove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 1.5;

            const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -50);

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(${nextPercentage}%, 0%)`
            }, {duration: 1200, fill: "forwards"});
        }

        /* -- Had to add extra lines for touch events -- */

        window.onmousedown = e => handleOnDown(e);

        window.ontouchstart = e => handleOnDown(e.touches[0]);

        window.onmouseup = e => handleOnUp(e);

        window.ontouchend = e => handleOnUp(e.touches[0]);

        window.onmousemove = e => handleOnMove(e);

        window.ontouchmove = e => handleOnMove(e.touches[0]);
    }

    return (
        <div className="project-screen" id="projects">
            <div className="project-screen-text">
                <h3>EXPLORE</h3>
                <h1>MY WORK</h1>
                <p>Each project has been carefully crafted to meet the unique needs of my clients,
                    and has been designed with user experience in mind.
                    I take pride in my ability to deliver high-quality,
                    visually appealing websites that are optimized for search engines and easy for users to
                    navigate. </p>
            </div>
            <div id="image-scroller" data-mouse-down-at="0" data-prev-percentage="0">
                <div className="image-container">
                    <img className="image" src={Mgd1} alt="A mockup of the home page of www.implantsclinic.pl"/>
                    <span>01 <span className="text-separator">//</span> www.implantsclinic.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Lgpd2} alt="A mockup of the pages from www.logopedadrezdenko.pl"/>
                    <span>02 <span className="text-separator">//</span> www.logopedadrezdenko.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Mdg1}
                         alt="A mockup of the pages from the Lottery Project I made on university"/>
                    <span>03 <span className="text-separator">//</span> TU Dresden internship project</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Scz2}
                         alt="A mockup of the gallery page from a website I made for my client."/>
                    <span>04 <span className="text-separator">//</span> Mateusz Szczepkowski personal portfolio</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Lcky2}
                         alt="A mockup of the home page of branding agency Lucky18 Studio"/>
                    <span>05 <span className="text-separator">//</span> www.lucky18.com.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Mgd2}
                         alt="A mockup of the pages from the website www.implantsclinic.pl"/>
                    <span>06 <span className="text-separator">//</span> www.implantsclinic.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Lgpd1} alt="A mockup of the homepage form the page logopedadrezdenko"/>
                    <span>07 <span className="text-separator">//</span> www.logopedadrezdenko.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Lcky1}/>
                    <span>08 <span className="text-separator">//</span> www.lucky18.com.pl</span>
                </div>
                <div className="image-container">
                    <img className="image" src={Scz1}/>
                    <span>01 <span className="text-separator">//</span> Mateusz Szczepkowski personal portfolio</span>
                </div>
            </div>
        </div>
    )
}