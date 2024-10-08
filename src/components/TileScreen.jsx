import React from "react";
import Me from "../assets/me3.jpg";
import "../css/TileScreen.css";

import Lgpd1 from "../assets/project-images/16:9/lgpd1.png";
import Lgpd2 from "../assets/project-images/16:9/lgpd2.png";
import Mdg1 from "../assets/project-images/16:9/mdg1.png";
import Mgd1 from "../assets/project-images/16:9/mgd1.png";
import Mgd2 from "../assets/project-images/16:9/mgd2.png";
import Cdl1 from "../assets/project-images/16:9/cdl1.png";
import Lcky1 from "../assets/project-images/16:9/lcky1.png";
import Lcky2 from "../assets/project-images/16:9/lcky2.png";
import Msc1 from "../assets/project-images/16:9/msc1.png";
import Msc2 from "../assets/project-images/16:9/msc2.png";
import Ntr1 from "../assets/project-images/16:9/ntr1.png";


export default function TileScreen(props) {
    return (
        <>
            <div className="container about-me">
                <div className="row">
                    <div className="col-xl-8 col-sm-12">
                        <h2 className="mb-3" id="about-me">About me</h2>
                        <p>
                            My name is <b>Jakub</b> and I'm a 21-year-old computer science student at <b>TU Dresden</b>.
                            I specialise in web development and design, and have experience working with numerous
                            clients in the fields of medicine, law and marketing. Computers and programming are my main passions,
                            but I also enjoy playing bass guitar and making music in my spare time. <br /><br />

                            I have a lot of experience with HTML, CSS and JavaScript. I have also completed several personal projects in React
                            combined with Firebase. I have been responsible for optimising the loading speed of websites as well
                            as creating successful SEO campaigns with my websites always ranking high in Google searches.  Outside of the web,
                            I have experience in app development with Dart and Flutter or Python and KivyMD, as well as robotics, JAVA, Rust, computer graphics,
                            3D modelling with Blender and server setup, networking. <br /><br />

                            Through my <a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} href="https//www.youtube.com/@Codeolences">YouTube</a> channel I have also gained extensive knowledge in video editing, graphic design and YouTube SEO. I am fluent in
                            Adobe software such as Photoshop, Premier Pro, After Effects, Illustrator and Figma.
                        </p>
                        <div className="orange-highlight-box"></div>
                    </div>
                    <div className="col-xl-4 col-sm-12  px-5 px-sm-5 px-xl-0">
                        <div className="img-container mx-auto-sm mx-0-xl mx-auto">
                            <img src={Me} alt="Jakub Gawroński" />
                            <span className="img-text">That's me! (and my cat)</span>
                        </div>
                        <span className="bg-grey-overlay"></span>
                    </div>
                </div>
                <div className="row ">
                    <h2 className="mb-3" id="my-work">My work</h2>
                    <div className="col-xl-6 col-sm-12 mb-3">
                        <p>
                            Each project has been carefully crafted to meet the unique needs of my clients, and has been designed with user experience in mind.
                            I take pride in my ability to deliver high-quality, visually appealing websites that are optimized for search engines and easy for users to navigate.
                        </p>
                        <div className="orange-highlight-box"></div>
                    </div>
                    <div className="col-xl-6 col-sm-12">
                        <p>
                            Over the years I have created several websites for various clients and some for myself. Some of them are presented below. The most recent ones are <a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} href="https://www.notariusz-gorzow.pl">notariusz-gorzow.pl</a>, <a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} href="https://www.logopedadrezdenko.pl">logopedadrezdenko.pl</a> and <a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} href="https://www.codeolences.com">codeolences.com</a>.
                        </p>
                    </div>
                </div>
                <div className="row extra-margin">
                    <div className="col-12">
                        <div className="carousel-wrapper">
                            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Ntr1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lgpd1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lgpd2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mgd1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mgd2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Msc1} className="d-block w-100" alt="..." />
                                    </div><div className="carousel-item">
                                        <img src={Msc2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lcky1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lcky2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mdg1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Cdl1} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <span className="show-on-mobile">For the best viewing experience please use the desktop version or put your phone in landscape. </span>
                    </div>
                </div>
                <div className="row mt-5">
                    <h2 className="mb-3" id="contact">Contact</h2>
                    <p>
                        Best way to reach me is through email: <a href="mailto:jakub.gawronski.kontakt@gmail.com">jakub.gawronski.kontakt@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="container mt-5">
                <footer className="text-center text-white">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6>
                                    <a href="#about-me" >About me</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6>
                                    <a href="#my-work" >Projects</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6>
                                    <a href="#contact" >Contact</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6>
                                    <a href="https://www.youtube.com/@Codeolences">YouTube</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="my-4" />
                    <section className="mb-2">
                        <div className="row">
                            <p className="text-center">
                                Created with <i className="bi bi-heart-fill"></i> by Jakub Gawroński using JS, React, Bootstrap and GSAP.
                            </p>
                        </div>
                    </section>
                    <div className="text-center p-3">
                        <span>© 2024 Copyright: </span> <a className="text-white" href="https://jakub-gawronski.com/">jakub-gawronski.com</a>
                    </div>
                </footer>
            </div>
        </>

    )
}