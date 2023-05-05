import React from "react";
import "./Footer.scss";
import footerbar from "../../../src/assets/images/Tab Bar.png";



function Footer() {
	return (
		<footer>
            <div className="footer__image">
                <img src={footerbar} alt="" />
            </div>
			<section className="footer">

            </section>
			
		</footer>
	);
}

export default Footer;
