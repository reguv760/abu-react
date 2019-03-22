import React from "react";

const ILW = () => {
	return (
		<div className="ilw">
			<div className="panel">
				ILW Immigration Daily Updates
				<br />
				<iframe
					className="ilw_frame"
					src="https://www.ilw.com/parse.asp"
					scrolling="no"
					frameBorder="0"
					marginHeight="2"
					marginWidth="2"
					title="ILW"
				/>
			</div>
		</div>
	);
};

export default ILW;
