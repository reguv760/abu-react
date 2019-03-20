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
				by:{" "}
				<a
					href="https://reguv760.github.io/portfolio/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Reginald Galang
				</a>
				<br />
				<span className="hosting">
					Hosted on{" "}
					<a
						href="http://netlify.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Netlify
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
