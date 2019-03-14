import React from "react";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<a className="navbar-brand" href="/">
				<span className="nav-logo">Law Offices of Abraham L. Lim</span>
			</a>

			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link" href="/">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#Services">
						Services
					</a>
					<a className="nav-item nav-link" href="#Articles">
						Articles
					</a>
					<a className="nav-item nav-link" href="#Gallery">
						Gallery
					</a>
					<a className="nav-item nav-link" href="#Contact">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
