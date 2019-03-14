import React from "react";

class ILW extends React.Component {
	render() {
		return (
			<div className="ilw">
				<div className="panel">
					ILW Immigration Daily Updates
					<br />
					<iframe
						src="https://www.ilw.com/parse.asp"
						height="75"
						width="100%"
						scrolling="no"
						frameborder="0"
						marginheight="2"
						marginwidth="2"
						allowtransparency="true"
						title="ILW"
					/>
				</div>
			</div>
		);
	}
}

export default ILW;
