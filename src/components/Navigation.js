import React from "react";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarMobileNav"
				aria-controls="navbarMobileNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<a className="navbar-brand" href="/">
				<span className="nav-logo">Law Offices of Abraham L. Lim</span>
			</a>

			<div className="collapse navbar-collapse" id="navbarMobileNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#services">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#articles">
							Articles
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#gallery">
							Gallery
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
