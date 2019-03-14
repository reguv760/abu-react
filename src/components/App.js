import React from "react";
import Seo from "react-seo-expert";
import { configureAnchors } from "react-scrollable-anchor";

//style
import "./../styles/style.scss";
//import fadeBG from "./../assets/img/fadeBG.jpg";

//components:::
import ILW from "./ILW";
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
		configureAnchors({ offset: -50, scrollDuration: 750 });
	}

	render() {
		const SEO = {
			keywords: "test",
			author: "test author",
			copyright: "",
			email: "",
			language: "",
			robots: "",
			google_site_verification: "",
			viewport: "",
			title: "",
			description: "",
			locale: "",
			type: "",
			image: "",
			video: "",
			audio: "",
			url: "",
			twitter_card: "",
			twitter_site: "",
			twitter_creator: ""
		};

		return (
			<div>
				<Seo config={SEO} />

				<Navigation />

				<ILW />

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
