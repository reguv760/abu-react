import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

class Services extends React.Component
{
	state =
	{
		ServiceArray: [ 
			{
				text: "EB-5 INVESTMENT VISA"
			},
			{
				text: "EB-2 PERM"
			},
			{
				text: "LABOR CERTIFICATIONS"
			},
			{
				text: "E1/E2 VISA"
			},
			{
				text: "O-1 EXTRAORDINARY ABILITY ALIENS"
			},
			{
				text: "P ARTIST VISA"
			},
			{
				text: "Q VISITOR VISA"
			},
			{
				text: "L1 VISA"
			},
			{
				text: "H-1B VISA"
			},
			{
				text: "TN VISA"
			},
			{
				text: "MARRIAGE & FAMILY CASES"
			},
			{
				text: "BATTERED SPOUSE CASES"
			},
			{
				text: "DEPORTATION DEFENSE"
			},
			{
				text: "CRIMINAL DEPORTATION"
			},
			{
				text: "IMMIGRATION WORKSITE COMPLIANCE"
			}
		]
	} 

	render()
	{
		const ServiceList = this.state.ServiceArray.map((serviceText, i) => 
		{
			return (
				<li key={"abu-services" + i} className="list-group-item">
					{serviceText.text} 
				</li>
			)
		})

		return (
			<ScrollableAnchor id={"services"}>
				<div className="container services">
					<h2>Services</h2>
					<div className="row">
						<div className="col-md-6">
							<p>
								Abraham Lim specializes and handles cases which
								involves US Immigration law. This includes:
							</p>
	
							<ul className="list-group services">
								{ ServiceList }
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
	}	
};

export default Services;
