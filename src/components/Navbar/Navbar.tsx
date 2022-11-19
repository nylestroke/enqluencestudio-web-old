import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import NavBrand from '../../assets/img/logo-full.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.scss';

const Navbar = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    function toggle() {
        setMenuOpened(!menuOpened);
    }

    return (
        <nav>
            <div className="filler"></div>
            <div className="nav-center">
                <a href="https://github.com/ENQLUENCE/.github/tree/master/profile" className="nav-link" target="_blank">About us</a>
                <a href="https://github.com/enqluence" className="nav-link" target="_blank" >Projects</a>
                <Link to="/">
                    <img src={NavBrand} alt="logo" draggable={false} onClick={() => setMenuOpened(false)} />
                </Link>
                <Link to="/ourteam" className="nav-link">Our team</Link>
                <Link to="/contact" className="nav-link">Contact us</Link>
            </div>
            <div className="response-menu" data-opened={menuOpened}>
                <a href="https://github.com/ENQLUENCE/.github/tree/master/profile" className="nav-link" target="_blank">About us</a>
                <a href="https://github.com/enqluence" className="nav-link" target="_blank" >Projects</a>
                <Link to="/ourteam" onClick={toggle} className="nav-link">Our team</Link>
                <Link to="/contact" onClick={toggle} className="nav-link">Contact us</Link>
            </div>
            <div className="nav-buttons">
                <button onClick={toggle} className="icon-btn menu-btn">
                    {menuOpened ? (<CloseIcon/>) : (<MenuIcon/>)}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;