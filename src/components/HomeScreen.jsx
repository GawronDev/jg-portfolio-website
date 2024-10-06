import { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';
import MobileImage from "../assets/mobile-photo.png";
import ArrowNav from './ArrowNav';

export default function HomeScreen() {
    let tl = gsap.timeline({ delay: 0.5 });

    // Initialize the bubble and the mouse listener
    useEffect(() => {
        const hero = document.querySelector(".circle");

        if (window.matchMedia("(pointer: fine)").matches) {
            tl.to(hero, {
                width: "300px",
                top: "var(--y)",
                left: "var(--x)",
                duration: 0.5,
                ease: "back.out(2)",
            });
        }

        let homeScreen = document.getElementById("home");

        document.addEventListener("mousemove", debounce(function (event) {

            const screenWidth = window.innerWidth;
            const screenHeight = homeScreen.offsetHeight;
            const cursorX = event.clientX;
            const cursorY = event.clientY;

            const cursorCheck = event.pageY;
            
            
            
            
            // Combine both effects 
            const offsetX = (((screenWidth * 0.5)/screenWidth) * 100) - (300 / screenWidth) * 50 + ((cursorX / screenWidth) * 100) - 50;
            const offsetY = (((screenHeight * 0.5)/screenHeight) * 100) - (300 / screenWidth) * 50 + ((cursorY / screenHeight) * 100) - 50;
            
            if(screenHeight - cursorCheck <= 0){
                gsap.to(hero, {
                    "--x": `${(((screenWidth * 0.5)/screenWidth) * 100)}%`,
                    "--y": `${(((screenHeight * 0.5)/screenHeight) * 100)}%`,
                    duration: 2,
                    ease: "sine.out",
                });
                return;
            }

            gsap.to(hero, {
                "--x": `${offsetX}%`,
                "--y": `${offsetY}%`,
                duration: 1.5,
                ease: "sine.out",
            });
        }, 2));
    }, []);

    // Debounce function for smooth following of the bubble
    function debounce(callback, wait) {
        let timeout;
        return function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                callback(e);
            }, wait);
        }
    }

    return (
        <div>
            <Cursor />
            <span className='circle'></span>
            <div className='home-screen' id="home">
                <div className='primary-wrapper'>
                    <div className='header-container'>
                        <h3>Let me bring your</h3>
                        <h1>dream web vision</h1>
                        <h3>to life</h3>
                    </div>
                </div>
            </div>
            <div className='home-screen-mobile'>
                <div className='mobile-text'>
                    <h3>Hi, I'm <span><b>Jakub</b></span> and I...</h3>
                    <h1>BRING YOUR <span>DREAM</span> WEB VISION TO LIFE</h1>
                    <p>Having a well-designed and user-friendly website is crucial for
                        any business looking to <b>succeed</b> in today's digital world. A website serves
                        as the online face of a company and can be a determining factor in attracting and retaining customers.
                    </p>
                </div>
                <div className='mobile-image-container'>
                    <img src={MobileImage} alt="A photo of Jakub Gawroński" />
                </div>
            </div>
        </div>
    )
}
