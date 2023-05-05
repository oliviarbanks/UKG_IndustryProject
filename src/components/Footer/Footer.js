import React from "react";
import "./Footer.scss";
import footlogo from "../../../src/ukgplaceholderlogo.png";


function Footer() {
	return (
		<footer>
			<div classname="footer__up">
                <img classname="footer__logo" src={footlogo} alt="" />
            </div>
			<section className="footer">
				<div className="footer__block">
					<h1>Human Capital Management</h1>
					<p>Human Resources</p>
					<p>Payroll</p>
					<p>Talent</p>
					<p>Reporting and Analytics</p>
				</div>
				<div className="footer__block">
					<h1>Workforce Management</h1>
					<p>Time & Attendance</p>
					<p>Scheduling</p>
					<p>Compliance</p>
				</div>
				<div className="footer__block">
					<h1>Product Suites</h1>
					<p>UKG Pro</p>
					<p>UKG Dimensions</p>
					<p>UKG Ready</p>
				</div>
				<div className="footer__block">
					<h1>Customer Experience</h1>
					<p>Implementation</p>
					<p>Support Experience</p>
					<p>UKG Community</p>
					<p>Customer Stories</p>
				</div>
				<div className="footer__block">
					<h1>About Us</h1>
					<p>Why UKG</p>
					<p>Culture</p>
					<p>Our ESG Program</p>
					<p>Leadership</p>
					<p>Newsroom</p>
					<p>Careers</p>
				</div>
			</section>
			<div classname="footer__icons">
                
            </div>
		</footer>
	);
}

export default Footer;
