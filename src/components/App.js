import React from "react";
import ReactGA from "react-ga";
import { configureAnchors } from "react-scrollable-anchor";

//style
import "./../styles/style.scss";
//import fadeBG from "./../assets/img/fadeBG.jpg";

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
	componentDidMount() {
		ReactGA.initialize("UA-6371690-11");
		configureAnchors({ offset: -50, scrollDuration: 500 });
	}

	render() {
		return (
			<div>
				<Navigation />

				<Jumbotron />

				<div className="container-fluid">
					<Services />

					<Articles />

					<Gallery />

					<Contact />
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
