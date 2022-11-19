import React from "react";

import "./Header.scss";
import headerVideo from "./header2.mp4";
import Logo from "./headerLogo.png";

const Header = () => {
	return (
		<header>
			<div className="header-overlay">
				<video src={headerVideo} autoPlay loop muted />
			</div>
			<div className="header-gradient-container">
				<div className="gradient-fade fade-top"></div>
				<div className="gradient-fade fade-bottom"></div>
				<div className="gradient-fade fade-left"></div>
				<div className="gradient-fade fade-right"></div>
			</div>
			<div className="overlay-line">
				<a href="#short">
					<div className="circle">
						<i className="arrow down" />
					</div>
				</a>
			</div>
			<div className="header-logo-container">
				<div className="logo">
					<img src={Logo} alt="logo" draggable={false} />
				</div>
				<div className="underlogo-desc">
					<div className="bracket"></div>
					<div className="bracket"></div>
					<div className="content">Our task - to do the impossible</div>
					<div className="bracket"></div>
					<div className="bracket"></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
