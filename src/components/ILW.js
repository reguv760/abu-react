import React from "react";

const ILW = props => {
	return (
		<div className="ilw">
			<div className="panel">
				ILW Immigration Daily Updates
				<br />
				<iframe
					src="http://www.ilw.com/parse.asp"
					height="75"
					width="100%"
					scrolling="no"
					frameborder="0"
					marginheight="2"
					marginwidth="2"
					allowtransparency="false"
				/>
			</div>
		</div>
	);
};

export default ILW;
