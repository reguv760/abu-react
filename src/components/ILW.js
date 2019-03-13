import React from "react";

class ILW extends React.Component {
	render() {
		return (
			<div className="ilw">
				<div className="panel">
					ILW Immigration Daily Updates
					<br />
					<iframe
						src="https://cors-anywhere.herokuapp.com/https://www.ilw.com/parse.asp"
						height="75"
						width="100%"
						scrolling="no"
						frameborder="0"
						marginheight="2"
						marginwidth="2"
						allowtransparency="false"
						title="ILW"
					/>
				</div>
			</div>
		);
	}
}

export default ILW;

// loadILW = () fetch('http://www.ilw.com/parse.asp')
//  .then((response) => response.text())
//  .then((responseData) => rssParser.parse(responseData))
//  .then((rss) => {
//    console.log(rss.title);
//    console.log(rss.items.length);
//  });
