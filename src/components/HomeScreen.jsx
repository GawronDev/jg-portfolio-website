import { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';
import MobileImage from "../assets/mobile-photo.png";
import ArrowNav from './ArrowNav';

export default function HomeScreen() {
    const cursorRef = useRef();
    var isMouseOver = false;
    let tl = gsap.timeline({ delay: 0.5 });

    // Initialize the bubble and the mouse listener
    useEffect(() => {
        const hero = document.querySelector(".secondary-wrapper");

        if (window.matchMedia("(pointer: fine)").matches) {
            tl.to(hero, {
                "--maskSize1": "10%",
                duration: 0.5,
                ease: "back.out(2)",
            });
        }

        var homeScreen = document.getElementById("home");

        document.addEventListener("mousemove", debounce(function (event) {

            const screenWidth = window.innerWidth;
            const screenHeight = homeScreen.offsetHeight;
            const cursorX = event.clientX;
            const cursorY = event.clientY;

            const cursorCheck = event.pageY;

            
            // Calculate the follower's position as a percentage of the distance
            // from the top right corner of the screen
            const offsetXPercentage = (cursorX / screenWidth) * 100;
            const offsetYPercentage = (cursorY / screenHeight) * 100;
            
            // Calculate the follower's position relative to the cursor and screen center
            const offsetXCenter = (cursorX - screenWidth / 2) / 60; // Adjust the divisor to control the strength
            const offsetYCenter = (cursorY - screenHeight / 2) / 100; // Adjust the divisor to control the strength
            
            // Combine both effects 
            const offsetX = (offsetXPercentage - offsetXCenter);
            const offsetY = (offsetYPercentage - offsetYCenter);
            
            if(screenHeight - cursorCheck <= 0){
                gsap.to(hero, {
                    "--x": `${((screenWidth * 0.5)/screenWidth) * 100}%`,
                    "--y": `${((screenHeight * 0.5)/screenHeight) * 100}%`,
                    duration: 2,
                    ease: "sine.out",
                });
                return;
            }

            gsap.to(hero, {
                "--x": `${offsetX}%`,
                "--y": `${offsetY}%`,
                duration: 0.7,
                ease: "sine.out",
            });
        }, 2));
    }, []);

    // Debounce function for smooth following of the bubble
    function debounce(callback, wait) {
        var timeout;
        return function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                callback(e);
            }, wait);
        }
    }

    return (
        <div>
            <div className='home-screen' id="home">
                <Cursor />
                <div className='primary-wrapper'>
                    <div className='header-container'>
                        <h3>BRING YOUR</h3>
                        <h1>DREAM WEB VISION</h1>
                        <h3>TO LIFE</h3>
                    </div>
                </div>
                <div className='secondary-wrapper' ref={cursorRef}>
                    <div className='header-container header-container-secondary' >
                        <h3>BRING YOUR</h3>
                        <h1>DREAM WEB VISION</h1>
                        <h3>TO LIFE</h3>
                    </div>
                </div>
                <ArrowNav text="EXPLORE MORE" />
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
