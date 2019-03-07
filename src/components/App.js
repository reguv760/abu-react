import React from "react";
import "./../styles/base/App.css";

//components:::
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";

//sections
import Articles from "./Articles";
import Gallery from "./Gallery";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation />

				<Jumbotron />

				<div className="container-fluid">
					<Articles />

					<Gallery />

					<Services />

					<Contact />
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
