import React from "react";
import { Helmet } from "react-helmet";

const HelmetHead = () => {
	return (
		<Helmet>
			<meta
				name="Keywords"
				content="Abraham L. Lim, Immigration Lawyer, Attorney Abraham L Lim, Lawyer, Montebello, Hacienda Heights, Rowland Heights, Azusa, Covina, West Covina, US Immigration, Los Angeles, Orange County, Brea, Family Lawyer, Criminal Defense, California Franchise Law"
			/>
			<meta
				name="Description"
				content="Atty. Abraham L. Lim specializes in US Immigration Law as well as cases in criminal defense, personal injury, family law and California franchise law."
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700"
				rel="stylesheet"
			/>
		</Helmet>
	);
};

export default HelmetHead;
