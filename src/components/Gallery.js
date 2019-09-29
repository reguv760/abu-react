import React from "react";
import LazyLoad from 'react-lazyload';
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

class Gallery extends React.Component{

	state = 
	{
		GalleryImages: [
			{
				image: abuGarcetti,
				text: "Los Angeles Mayor Eric Garcetti(L) and Abraham Lim(R)."
			},
			{
				image: abuCruzGarcetti,
				text: "Philippine Consul General Adelio Cruz(L), LA Mayor Eric Garcetti(M) and Abraham Lim(R)."
			},
			{
				image: abuAnnCruzGarcetti,
				text: "Philippine Consul General Adelio Ctuz(LL), Annie Cuevas-Lim(L), LA Mayor Eric Garcetti(M) and Abraham Lim(R)."
			},
			{
				image: abuAnnCruzGarcetti2,
				text: "LA Mayor Eric Garcetti, Annie Cuevas-Lim, Abraham Lim and Philippine Consul General Adelio Ctuz."
			},
			{
				image: abuAnnHontiveros,
				text: "Abraham Lim(L), Senator Risa Hontiveros(M) and Annie Cuevas-Lim(R)."
			},
			{
				image: abuAnnRyu,
				text: "Annie Cuevas-Lim(L), Los Angeles Councilmember David Ryu(M) and Abraham Lim(L)."
			},
			{
				image: abuAnnSotto,
				text: "Annie Cuevas-Lim(L), Los Angeles Councilmember David Ryu(M) and Abraham Lim(L)."
			},
			{
				image: abuAnnSotto,
				text: "Senate President Tito Sotto(L), Annie Cuevas-Lim(M) and Abraham Lim(L)."
			},
			{
				image: abu2,
				text: "Atty. Abraham Lim, Annie Cuevas Lim and California State Assemblyman Rob Bonta."
			},
			{
				image: abuMary1,
				text: "Annie Cuevas Lim, Atty. Abraham Lim, City of Cerritos Mayor Mark Pulido and Gloria Pulido."
			},
			{
				image: abuMary2,
				text: "California State Treasurer and candidate for Governor of California John Chiang and Atty. Abraham Lim."
			},
			{
				image: abuMary3,
				text: "Atty. Abraham Lim and Philippine Consul General to Los Angeles Adel Cruz."
			}
		]
	}
	render()
	{
		const ImageList = this.state.GalleryImages.map((item, i) =>
		{
			return (
				<div key={"abu-gallery " + i} className="col-md-6 col-lg-4">
					<div className="card mb-4 box-shadow">
						<LazyLoad height={300} once >
							<img
								alt={item.text}
								className="card-img-top"
								src={item.image}
							/>
						</LazyLoad>
						<div className="card-body">
							<p className="card-text">
								{item.text}
							</p>
						</div>
					</div>
				</div> 
			)
		});

		return (
			<ScrollableAnchor id={"gallery"}>
				<div className="container">
					<h2>Gallery</h2>	
					<div className="row">
						{ ImageList }						
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}
export default Gallery;
