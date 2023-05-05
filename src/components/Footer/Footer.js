import React from "react";
import "./Footer.scss";
import footerbar from "../../../src/assets/images/Tab Bar.png";
import bottombar from "../../../src/assets/images/bottom.png";



function Footer() {
	return (
		<footer>
            <div className="footer__image">
                <img src={footerbar} alt="" />
            </div>
			<div className="footer__bottom">
                    <img src={bottombar} alt="" />
            </div>
		</footer>
	);
}

export default Footer;
