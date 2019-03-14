import React from "react";

const Footer = () => {
	return (
		<footer className="page-footer">
			<div className="footer-copyright text-center ">
				© {new Date().getFullYear()} Built in{" "}
				<a
					href="http://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					ReactJS
				</a>{" "}
				by:
				<br />
				<a
					href="https://reguv760.github.io/portfolio/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Reginald Galang
				</a>
			</div>
		</footer>
	);
};

export default Footer;
