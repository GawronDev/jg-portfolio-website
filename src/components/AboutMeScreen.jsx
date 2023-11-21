
import React, { useState, useEffect } from 'react';
import '../css/AboutMeScreen.css';
import ME1 from '../assets/me_1.png';
import ME2 from '../assets/me_2.png';
import Button from './Button';


export default function AboutMeScreen() {
    // component logic here
    return (
        <div className='about-me'>
            <div className='about-me-section'>
                <div className='about-me-screen-text'>
                    <h3>WHO AM I?</h3>
                    <h1>ABOUT ME</h1>
                    <p className='text-limiter'>My name is Jakub, and I'm a 20 year old computer science student on a prestigious German university.
                        I specialise in frontend development and design, and have experience working with clients.
                        I also run a YouTube channel under a nickname “Codeolences” where I make videos about topics more or less
                        connected with technology and programming.</p>
                    <Button refrence="www.github.com/GawronDev" text="Check out my GitHub page!"/>
                </div>
                <div className='image-wrapper'>
                    <img src={ME2} />
                    <span>01 <span className="text-separator">//</span> Photos by Mateusz Szczepkowski</span>
                </div>
            </div>
            <div className='about-me-section margin'>
                <div className='image-wrapper'>
                    <img src={ME1} />
                    <span>02 <span className="text-separator">//</span> That's me </span>
                </div>
                <div className='about-me-screen-text'>
                    <h2>MY SKILLS</h2>
                    <p>I have a lot of experience with HMTL, CSS nad JavaScript.
                        I also completed multiple courses and projects in React using Firebase.
                        I was responsible for optimising loading speeds of websites as well as for creating successful SEO
                        campaigns with my websites always ranking high in Google searches.  Outside the Web, I have experience
                        in app development with Dart and Flutter or Python and KivyMD, as well as in robotics, JAVA, Rust,
                        computer graphics, creating 3D models using Blender and setting up servers, networking.

                        Through my YouTube channel I also gained extensive knowledge of video editing, graphic design, and YouTube SEO.
                        I work fluently with Adobe software, like Photoshop, Premier Pro, After Effects, Illustrator and Figma.  </p>
                </div>
            </div>
        </div>
    );
}
