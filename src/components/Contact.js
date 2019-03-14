import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Passport from "./../assets/img/passport.png";

const Contact = () => {
	return (
		<ScrollableAnchor id={"Contact"}>
			<div className="container">
				<h2>Contact</h2>
				<div className="row">
					<div className="col-sm-6">
						<img
							src={Passport}
							alt="passport"
							className="img-passport"
						/>
					</div>
					<div className="col-sm-6">
						<span className="bold">ABRAHAM L. LIM, ESQ.</span>
						<br />
						Law Offices of Abraham L. Lim
						<br />
						A Professional Corporation
						<br />
						E-MAIL:{" "}
						<a href="mailto:ALim@abrahamlimlaw.com">
							ALim@abrahamlimlaw.com
						</a>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Contact;
