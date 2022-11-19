import React from 'react';

import Logo from '../../pages/Header/headerLogo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={Logo} alt="logo" draggable={false}/>
            </div>
            <div className="links">
                <a href="https://twitter.com/enqluence/">
                    <TwitterIcon/>
                </a>
                <a href="https://facebook.com/groups/enqluence/">
                    <FacebookIcon/>
                </a>
                <a href="https://instagram.com/enqluencestudios/">
                    <InstagramIcon/>
                </a>
                <a href="https://github.com/enqluence/">
                    <GitHubIcon/>
                </a>
            </div>
            <div className="information">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms Of Use</Link>
                <Link to="#">FAQ</Link>
            </div>
            <div className="copyright">
                <h3>&copy; 2022 Copyright <span>Enqluence Studios, nylestroke</span>. All rights Reserved. </h3>
            </div>
        </footer>
    );
};

export default Footer;