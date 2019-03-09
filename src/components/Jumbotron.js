import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Fluid jumbotron</h1>

				<div className="row">
					<div className="col-12 col-lg-6">
						<p className="pageContent">
							Atty. Abraham L. Lim practices in the fields of US
							immigration law, crisis management, and corporate
							law.
						</p>

						<p>
							He is admitted to the United States Supreme Court,
							California Supreme Court, 9th Circuit Court of
							Appeals and the US District Court Central District
							of California.
						</p>

						<p>
							Atty. Lim got his Juris Doctor from Western State
							University College of Law.
						</p>

						<p>
							He speaks several languages. He has served in
							various boards and community organizations.
						</p>

						<p>
							Atty. Lim is a member of several law associations
							including the American Bar Association, the
							Philippine American Bar Association, and the
							Southern California Chinese Lawyer's Association.
						</p>
					</div>
					<div className="col-12 col-lg-6">Placeholder for IMG</div>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
