import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureAnchors } from "react-scrollable-anchor";

//style
import "./../styles/style.scss";
//import fadeBG from "./../assets/img/fadeBG.jpg";

//components:::
import HelmetHead from "./Helmet";
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
		configureAnchors({ offset: -50, scrollDuration: 600 });
	}

	render() {
		return (
			<div>
				<HelmetHead />
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
