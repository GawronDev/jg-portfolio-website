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
                    <div className="col-8">
                        <h2 className="mb-3">About me</h2>
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

                            Through my <a onMouseEnter={props.turnOnHover} onMouseLeave={props.turnOffHover} href="www.youtube.com/@Codeolences">YouTube</a> channel I have also gained extensive knowledge in video editing, graphic design and YouTube SEO. I am fluent in
                            Adobe software such as Photoshop, Premier Pro, After Effects, Illustrator and Figma.
                        </p>
                        <div className="orange-highlight-box"></div>
                    </div>
                    <div className="col-4">
                        <div className="img-container">
                            <img src={Me} alt="Jakub Gawroński" />
                        </div>
                        <div className="bg-grey-overlay"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="carousel-wrapper">
                            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
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
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lgpd1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lgpd2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mgd1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mgd2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Msc1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div><div className="carousel-item">
                                        <img src={Msc2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lcky1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Lcky2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Mdg1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Cdl1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
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
                        <div className="orange-highlight-box"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2 className="mb-3">My work</h2>
                        <p>
                            Each project has been carefully crafted to meet the unique needs of my clients, and has been designed with user experience in mind.
                            I take pride in my ability to deliver high-quality, visually appealing websites that are optimized for search engines and easy for users to navigate.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}