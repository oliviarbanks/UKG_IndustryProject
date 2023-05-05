import React from "react";
// import header from "../../../src/assets/images/Top Nav Bar.png";
import "./Header.scss";
import arrowimage from "../../../src/assets/images/Vector.png";
import bellimage from "../../../src/assets/images/Bell.png";

function Header() {
	return (
		<header>
			<div classname="header">
				{/* <div className="header__logo">
                    <img className="header__bar" src={header} alt="" />
                </div> */}
                {/* <div className="header__top--section">

                    </div> */}

				<div className="header__top">
                    <div className="header__arrow">
						<img src={arrowimage} alt="" />
					</div>
					<div className="header__top--words">
						<h1>Calendar</h1>
					</div>
					<div className="header__bell">
						<img src={bellimage} alt="" />
					</div>
                </div>
					<div className="header__bottom">
						<div className="header__bottom--words">
                            <div>
                                <h2>My Calendar</h2>
                            </div>
							<div>
                                <h2>Free Shifts</h2>
                            </div>
							<div>
                                <h2>Time Off</h2>
                            </div>
							
						</div>
					</div>
				
			</div>
		</header>
	);
}

export default Header;
