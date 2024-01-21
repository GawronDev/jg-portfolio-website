
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
                    <p className='text-limiter'>My name is Jakub, and I'm a 20 year old computer science student on a prestigious German university. I started learning programming
                        when I was still in high school and it has always been my passion.
                        I specialise in frontend development and design, and have experience working with numerous clients on web projects.
                        <br />
                        <br />
                        I also run a YouTube channel under a nickname “Codeolences” where I make video esseys about topics more or less
                        connected with technology and programming.</p>
                    <div className='about-me-link-container'>
                        <button className="button"><a href="www.github.com/GawronDev"><i className='bi bi-github'></i> Github</a></button>
                        <a className='secondary-link' href="www.linked.in"><i className='bi bi-linkedin'></i> LinkedIn</a>
                    </div>
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
                        I also completed multiple personal and commercial projects with my tech stack usually consisting of React and Firebase.
                        I was responsible for optimising loading speeds of websites as well as for creating successful SEO
                        campaigns, with my websites always ranking high in Google searches.  Outside the Web, I have experience
                        in app development with Dart and Flutter or Python and KivyMD, as well as in robotics, JAVA, Rust,
                        computer graphics, creating 3D models using Blender and setting up servers, networking.
                        <br />
                        <br />
                        Through my YouTube channel I also gained extensive knowledge of video editing, graphic design, and YouTube SEO.
                        I work fluently with Adobe software, like Photoshop, Premier Pro, After Effects, Illustrator and Figma.  </p>
                    <div className='about-me-skill'>
                        <div className='skill-container'>
                            <label htmlFor="html">
                                <div className='icon-container'>
                                    <i className='bi bi-globe'></i>
                                </div>
                                <div>
                                    <span>HTML, CSS, JS</span>
                                </div>
                            </label>
                            <div className="progress-container">
                                <span className='progress-text'>
                                        <span className='progress-text-violet'>95 //</span>100
                                </span>
                                <div className="progress" role="progressbar" aria-label="HTML, CSS, JS" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: "95%"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-container'>
                            <label htmlFor="react">
                                <div className='icon-container'>
                                    <i className='bi bi-front'></i>
                                </div>
                                <div>
                                    <span>REACT</span>
                                </div>
                            </label>
                            <div className="progress-container">
                                <span className='progress-text'>
                                    <span className='progress-text-violet'>80 //</span>100
                                </span>
                                <div class="progress" role="progressbar" aria-label="React" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{width: "80%"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-container'>
                            <label htmlFor='graphic'>
                                <div className='icon-container'>
                                    <i className='bi bi-layers-fill'></i>
                                </div>
                                <div>
                                    <span>GRAPHIC DESIGN</span>
                                </div>
                            </label>
                            <div className="progress-container">
                                <span className='progress-text'>
                                        <span className='progress-text-violet'>85 //</span>100
                                </span>
                                <div className="progress" role="progressbar" aria-label="Graphic design" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: "85%"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-container'>
                            <label htmlFor='seo'>
                                <div className='icon-container'>
                                    <i className='bi bi-bar-chart-fill'></i>
                                </div>
                                <div>
                                    <span>SEO</span>
                                </div>
                            </label>
                            <div className="progress-container">
                                <span className='progress-text'>
                                        <span className='progress-text-violet'>70 //</span>100
                                </span>
                                <div className="progress" role="progressbar" aria-label="SEO" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: "70%"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-container'>
                            <label htmlFor="ctrl">
                                <div className='icon-container'>
                                    <i className='bi bi-clipboard-fill'></i>
                                </div>
                                <div>
                                    <span>CTRL+C, CTRL+V</span>
                                </div>
                            </label>
                            <div className="progress-container">
                                <span className='progress-text'>
                                        <span className='progress-text-violet'>100 //</span>100
                                </span>
                                <div className="progress" role="progressbar" aria-label="CTRL+C, CTRL+V" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: "100%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
