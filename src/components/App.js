import React from "react";
import Seo from "react-seo-expert";

//style
import "./../styles/style.scss";

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
