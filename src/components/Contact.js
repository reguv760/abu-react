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
						<div className="contact-info">
							<span className="bold-contact">
								ABRAHAM L. LIM, ESQ.
							</span>
							<p>
								Law Offices of Abraham L. Lim
								<br />
								A Professional Corporation
								<br />
								E-MAIL:{" "}
								<a href="mailto:ALim@abrahamlimlaw.com">
									ALim@abrahamlimlaw.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Contact;
