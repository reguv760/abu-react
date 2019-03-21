import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Services = () => {
	return (
		<ScrollableAnchor id={"Services"}>
			<div className="container services">
				<h2>Services</h2>
				<div className="row">
					<div className="col-md-6">
						<p>
							Abraham Lim specializes and handles cases which
							involves US Immigration law. This includes:
						</p>

						<ul className="list-group services">
							<li className="list-group-item">
								EB -5 INVESTMENT VISA
							</li>
							<li className="list-group-item">EB-2 PERM</li>
							<li className="list-group-item">
								LABOR CERTIFICATIONS
							</li>
							<li className="list-group-item">E1/E2 VISA</li>
							<li className="list-group-item">
								O-1 EXTRAORDINARY ABILITY ALIENS
							</li>
							<li className="list-group-item">P ARTIST VISA</li>
							<li className="list-group-item">Q VISITOR VISA</li>
							<li className="list-group-item">L1 VISA</li>
							<li className="list-group-item">H-1B VISA</li>
							<li className="list-group-item">TN VISA</li>
							<li className="list-group-item">
								MARRIAGE & FAMILY CASES
							</li>
							<li className="list-group-item">
								BATTERED SPOUSE CASES
							</li>
							<li className="list-group-item">
								DEPORTATION DEFENSE
							</li>
							<li className="list-group-item">
								CRIMINAL DEPORTATION
							</li>
							<li className="list-group-item">
								IMMIGRATION WORKSITE COMPLIANCE
							</li>
						</ul>
					</div>

					<div className="col-md-6">
						<p>Abraham Lim also practices:</p>
						<ul className="list-group services">
							<li className="list-group-item">
								crisis management
							</li>
							<li className="list-group-item">corporate</li>
						</ul>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Services;
