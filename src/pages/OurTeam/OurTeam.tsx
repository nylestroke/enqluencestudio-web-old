import React, {useState} from "react";

import VladyslavLogo from './vladyslav.jpg';
import VsevolodLogo from './vsevolod.jpg';
import './OurTeam.scss';

import CloseIcon from '@mui/icons-material/Close';

const OurTeam = () => {

    const [modalOpened, setModalOpened] = useState<number>(0);

    return (
        <div className="ut-container">
            <div className="page-content">
                <div className="content__title">
                    <h2>Our Team</h2>
                </div>
                <div className="content__area">
                    <span>
                        We are a novice development team that has recently formed. Our task for the near future is to develop a new large-scale project in the Minecraft game - SkyblockRPG. At the moment, we are just starting our activities, so we hope for your support and understanding.
                    </span>
                </div>
                <div className="team__block">
                    <div className="team__item">
                        <img src={VladyslavLogo} alt="vladyslav"/>
                        <div className="description">
                            <p>
                                <span id="ua"></span>
                                Vladyslav Potapenko
                            </p>
                            <span>Co-Founder / CEO</span>
                        </div>
                        <button className="btn" onClick={() => setModalOpened(1)}>Show more</button>
                    </div>
                    <div className="team__item">
                        <img src={VsevolodLogo} alt="vsevolod"/>
                        <div className="description">
                            <p>
                                <span id="unknown"></span>
                                Vsevolod Kremlev
                            </p>
                            <span>Co-Founder / President</span>
                        </div>
                        <button className="btn" onClick={() => setModalOpened(2)}>Show more</button>
                    </div>
                </div>
                <div className="modal__block" data-opened={modalOpened > 0}>
                    <div className="modal__item" data-opened={modalOpened === 1}>
                        <img src={VladyslavLogo} alt="vladyslav"/>
                        <div className="modal__title">
                            <h3>Vladyslav Potapenko</h3>
                            <p>Nationality: <span id="ua"></span></p>
                            <p>AKA. <span id="aka">nylestroke</span></p>
                            <div className="modal__content">
                                <span>About: </span>
                                <p>I am a full stack developer. I have leadership, communication and collaboration skills. You can also know me under the pseudonym nylestroke</p>
                            </div>
                        </div>
                        <button className="icon-btn" onClick={() => setModalOpened(0)}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="modal__item" data-opened={modalOpened === 2}>
                        <img src={VsevolodLogo} alt="vsevolod"/>
                        <div className="modal__title">
                            <h3>Vsevolod Kremlev</h3>
                            <p>Nationality: <span id="unknown"></span></p>
                            <p>AKA. <span id="aka">searnate</span></p>
                            <div className="modal__content">
                                <span>About: </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste libero magni repellat!
                                    Debitis dolor, doloribus enim esse rem vero voluptas?</p>
                            </div>
                        </div>
                        <button className="icon-btn" onClick={() => setModalOpened(0)}>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
