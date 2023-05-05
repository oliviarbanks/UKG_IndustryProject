import React from "react";
// import header from "../../../src/assets/images/Top Nav Bar.png";
import "./Header.scss";
import arrowimage from "../../../src/assets/images/Vector.png";
import bellimage from "../../../src/assets/images/Bell.png";
import topbar from "../../../src/assets//images/Light.png";

function Header() {
	return (
		<header>
			<div classname="header">
                    <div classname="on__top">
                        <img src={topbar} alt="" />
                    </div>

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
                            <div className="header__click">
                                <h2>My Calendar</h2>
                            </div>
							<div className="header__click">
                                <h2>Free Shifts</h2>
                            </div>
							<div className="header__click" >
                                <h2>Time Off</h2>
                            </div>
							
						</div>
					</div>
				
			</div>
		</header>
	);
}

export default Header;
