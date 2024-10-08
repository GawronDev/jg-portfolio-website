import { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';

export default function HomeScreen() {
    let tl = gsap.timeline({ delay: 0.5 });
    // Initialize the bubble and the mouse listener
    useEffect(() => {
        const hero = document.querySelector(".circle");

        let homeScreen = document.getElementById("home");
        const screenWidth = homeScreen.offsetWidth;
        const screenHeight = homeScreen.scrollHeight;

        if (window.matchMedia("(pointer: fine)").matches) {
            tl.to(hero, {
                width: "300px",
                top: "var(--y)",
                left: "var(--x)",
                duration: 0.5,
                ease: "back.out(2)",
            });
        }

        document.addEventListener("mousemove", debounce(function (event) {
            const cursorX = event.clientX - 150;
            const cursorY = event.clientY - 150;

            // Combine both effects 
            const offsetX = ((cursorX / screenWidth) * 100);
            const offsetY = ((cursorY / screenHeight) * 100);

            gsap.to(hero, {
                "--x": `${offsetX}%`,
                "--y": `${offsetY}%`,
                duration: 1.5,
                ease: "sine.out",
            });
        }, 2));
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", (event) => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("arrow").style.opacity = "0";
            }
        });
    }, [])

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
            <span className='circle' ></span>
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
                    <h3>Hi, I'm <b>Jakub</b> 👋</h3>
                    <h1>Let me bring Your <br /> <span>dream web vision</span> <br /> to life</h1>
                    <p>Having a well-designed and user-friendly website is crucial for
                        any business looking to <b>succeed</b> in today's digital world. A website serves
                        as the online face of a company and can be a determining factor in attracting and retaining customers.
                    </p>
                    <div className="orange-highlight-box-mobile"></div>
                </div>
            </div>
        </div>
    )
}
