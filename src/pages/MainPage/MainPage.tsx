import React from 'react';
import Header from "../Header/Header";

import AstronautLogo from './astronaut.png';
import ImageLogo from '../../assets/img/logo-minimal.png';
import './MainPage.scss';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className="main-page">
            <Header/>
            <div className="container">
                <div className="short-about" id="short">
                    <div className="content">
                        <div className="content__title">
                            <h2>Who we are</h2>
                            <img src={AstronautLogo} alt="astronaut" draggable={false} />
                        </div>
                        <div>
                            <div className="content__area">
                            <span>
                                We are a team of developers who are creating a new project in the Minecraft game. We specialize in Java and web development. The project is currently at a very early stage of development. To be the first to see news and spoilers, you can find them on our social media.
                            </span>
                            </div>
                            <button className="btn">
                                <a href="https://github.com/ENQLUENCE/.github/tree/master/profile" target="_blank">Read more</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="short-projects">
                    <div className="content">
                        <div>
                            <div className="content__area">
                                <span>
                                    We are ready to present you our new skyblock project with RPG elements, plot and new mechanics. Here you will get unforgettable impressions and adventures. Everyone chooses their own path in this galaxy...
                                </span>
                            </div>
                            <button className="btn">
                                <a href="#">See details</a>
                            </button>
                        </div>
                        <div className="content__title">
                            <h2>OUR FIRST PROJECT</h2>
                            <div className="span-line"></div>
                            <span>network.enqluence.com</span>
                            <div className="span-line"></div>
                            <div className="planet">
                                <div className="wrap">
                                    <div className="background"></div>
                                    <div className="clouds"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="short-contact">
                    <div className="content">
                        <div className="content__title">
                            <h2>Get In Touch</h2>
                            <img src={ImageLogo} alt="logo" draggable={false} />
                        </div>
                        <div>
                            <div className="content__area">
                                <span>
                                    If you have any questions, you can always contact us. If you find any deficiencies in the website or in our other products, please contact us, depending on the severity of the problem, you will receive a reward.
                                </span>
                            </div>
                            <button className="btn">
                                <Link to="/contact">Send message</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;