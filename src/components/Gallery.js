import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

//images:::

//thumbnails
import abuannjejo from "./../assets/img/people/abuannjejo.jpg";
import abuannmel from "./../assets/img/people/abuannmel.jpg";
import abuannmaryjose from "./../assets/img/people/abuannmaryjose.jpg";
import abuannraj from "./../assets/img/people/abuannraj.jpg";
import abu1 from "./../assets/img/people/abu1.jpg";
import abu2 from "./../assets/img/people/abu2.jpg";
import abuMary1 from "./../assets/img/people/abuMary1.jpg";
import abuMary2 from "./../assets/img/people/abuMary2.jpg";
import abuMary3 from "./../assets/img/people/abuMary3.jpg";

const Gallery = () => {
	return (
		<ScrollableAnchor id={"Gallery"}>
			<div className="container">
				<h2>Gallery</h2>

				<div className="row">
					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim with Mrs. Annie Cuevas-Lim visiting Philippines Vice President Jejomar Binay at his official residence on February 1, 2013."
								className="card-img-top"
								src={abuannjejo}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim with Mrs. Annie Cuevas-Lim
									visiting Philippines Vice President Jejomar
									Binay at his official residence on February
									1, 2013.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim with wife Phil. Tourism Director for LA Annie Cuevas-Lim with former Philippine Beauty Queen Melanie Marquez."
								className="card-img-top"
								src={abuannmel}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim with wife Phil. Tourism
									Director for LA Annie Cuevas-Lim with former
									Philippine Beauty Queen Melanie Marquez.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim with wife LA Tourism Director Annie Cuevas-Lim with former Phil. Consul General in Los Angeles Mary Joe B. Aragon and current Phil. Ambassador to the U.S. Jose Cuisia Jr."
								className="card-img-top"
								src={abuannmaryjose}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim with wife LA Tourism
									Director Annie Cuevas-Lim with former Phil.
									Consul General in Los Angeles Mary Joe B.
									Aragon and current Phil. Ambassador to the
									U.S. Jose Cuisia Jr
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim with wife Phil. Tourism Director in LA Annie Cuevas-Lim with former Phil. Beauty Queen Venus Raj."
								className="card-img-top"
								src={abuannraj}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim with wife Phil. Tourism
									Director in LA Annie Cuevas-Lim with former
									Phil. Beauty Queen Venus Raj.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim, Annie Cuevas Lim, California State Assemblyman Rob Bonta, and West Covina Councilman James Toma."
								className="card-img-top"
								src={abu1}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim, Annie Cuevas Lim,
									California State Assemblyman Rob Bonta, and
									West Covina Councilman James Toma.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim, Annie Cuevas Lim and California State Assemblyman Rob Bonta."
								className="card-img-top"
								src={abu2}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim, Annie Cuevas Lim and
									California State Assemblyman Rob Bonta.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Annie Cuevas Lim, Atty. Abraham Lim, City of Cerritos Mayor Mark Pulido and Gloria Pulido."
								className="card-img-top"
								src={abuMary1}
							/>
							<div className="card-body">
								<p className="card-text">
									Annie Cuevas Lim, Atty. Abraham Lim, City of
									Cerritos Mayor Mark Pulido and Gloria
									Pulido.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="California State Treasurer and candidate for Governor of California John Chiang and Atty. Abraham Lim."
								className="card-img-top"
								src={abuMary2}
							/>
							<div className="card-body">
								<p className="card-text">
									California State Treasurer and candidate for
									Governor of California John Chiang and Atty.
									Abraham Lim.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Atty. Abraham Lim and Philippine Consul General to Los Angeles Adel Cruz."
								className="card-img-top"
								src={abuMary3}
							/>
							<div className="card-body">
								<p className="card-text">
									Atty. Abraham Lim and Philippine Consul
									General to Los Angeles Adel Cruz
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Gallery;
