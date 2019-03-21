import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

//images:::

//thumbnails
import abuGarcetti from "./../assets/img/people/abuGarcetti.jpg";
import abuCruzGarcetti from "./../assets/img/people/abuCruzGarcetti.jpg";
import abuAnnCruzGarcetti from "./../assets/img/people/abuAnnCruzGarcetti.jpg";
import abuAnnCruzGarcetti2 from "./../assets/img/people/abuAnnCruzGarcetti2.jpg";
import abuAnnHontiveros from "./../assets/img/people/abuAnnHontiveros.jpg";
import abuAnnRyu from "./../assets/img/people/abuAnnRyu.jpg";
import abuAnnSotto from "./../assets/img/people/abuAnnSotto.jpg";
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
								alt="Los Angeles Mayor Eric Garcetti(L) and Abraham Lim(R)."
								className="card-img-top"
								src={abuGarcetti}
							/>
							<div className="card-body">
								<p className="card-text">
									Los Angeles Mayor Eric Garcetti (L) and
									Abraham Lim.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Philippine Consul General Adelio Cruz(L), LA Mayor Eric Garcetti(M) and Abraham Lim(R)."
								className="card-img-top"
								src={abuCruzGarcetti}
							/>
							<div className="card-body">
								<p className="card-text">
									Philippine Consul General Adelio Cruz(L), LA
									Mayor Eric Garcetti(M) and Abraham Lim(R).
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Philippine Consul General Adelio Ctuz(LL), Annie Cuevas-Lim(L), LA Mayor Eric Garcetti(M) and Abraham Lim(R)."
								className="card-img-top"
								src={abuAnnCruzGarcetti}
							/>
							<div className="card-body">
								<p className="card-text">
									Philippine Consul General Adelio Ctuz(LL),
									Annie Cuevas-Lim(L), LA Mayor Eric
									Garcetti(M) and Abraham Lim(R).
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="LA Mayor Eric Garcetti, Annie Cuevas-Lim,
									Abraham Lim and Philippine Consul General
									Adelio Ctuz."
								className="card-img-top"
								src={abuAnnCruzGarcetti2}
							/>
							<div className="card-body">
								<p className="card-text">
									LA Mayor Eric Garcetti, Annie Cuevas-Lim,
									Abraham Lim and Philippine Consul General
									Adelio Ctuz.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Abraham Lim(L), Senator Risa Hontiveros(M) and
									Annie Cuevas-Lim(R)."
								className="card-img-top"
								src={abuAnnHontiveros}
							/>
							<div className="card-body">
								<p className="card-text">
									Abraham Lim(L), Senator Risa Hontiveros(M)
									and Annie Cuevas-Lim(R).
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Annie Cuevas-Lim(L), Los Angeles Councilmember David Ryu(M)
									and Abraham Lim(L)."
								className="card-img-top"
								src={abuAnnRyu}
							/>
							<div className="card-body">
								<p className="card-text">
									Annie Cuevas-Lim(L), Los Angeles
									Councilmember David Ryu(M) and Abraham
									Lim(L).
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-lg-4">
						<div className="card mb-4 box-shadow">
							<img
								alt="Annie Cuevas-Lim(L), Los Angeles Councilmember David Ryu(M)
									and Abraham Lim(L)."
								className="card-img-top"
								src={abuAnnSotto}
							/>
							<div className="card-body">
								<p className="card-text">
									Senate President Tito Sotto(L), Annie
									Cuevas-Lim(M) and Abraham Lim(L).
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
