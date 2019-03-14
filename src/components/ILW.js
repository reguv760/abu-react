import React from "react";

const ILW = () => {
	return (
		<div className="ilw" style={{ margin: `1rem` }}>
			<div className="panel">
				ILW Immigration Daily Updates
				<br />
				<iframe
					src="https://www.ilw.com/parse.asp"
					height="75"
					width="100%"
					scrolling="no"
					frameBorder="0"
					marginHeight="2"
					marginWidth="2"
					allowtransparency="true"
					title="ILW"
				/>
			</div>
		</div>
	);
};

export default ILW;
