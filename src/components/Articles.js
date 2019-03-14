import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

//articles:::
import VAWA from "./../assets/articles/VAWAparent.doc";
import VISITUSA from "./../assets/articles/VISITUSA.doc";
import ALTERNATIVES from "./../assets/articles/ALTERNATIVESTOTHEH.doc";
import HORRORSTORIES from "./../assets/articles/IMMIGRATIONHORRORSTORIES.doc";
import WHATISTHEE2 from "./../assets/articles/WHATISTHEE2visa-1.doc";
import WHATISTHEH3 from "./../assets/articles/WHATISTHEH3.doc";
import OVisa from "./../assets/articles/WhatistheOVisa.doc";
import PVisa from "./../assets/articles/WHATISTHEPVISA.doc";
import H1B from "./../assets/articles/H-1barticle.doc";
import EB2 from "./../assets/articles/EB2article.doc";

const Articles = () => {
	return (
		<ScrollableAnchor id={"Articles"}>
			<div className="container">
				<h2>Articles</h2>
				<p>All articles are downloadble as DOC files.</p>

				<div className="row">
					<div className="col-md-6">
						<ul className="list-group articles">
							<li className="list-group-item">
								<a href={VAWA}>
									Are you an Abused Parent of a US Citizen?
								</a>
							</li>
							<li className="list-group-item">
								<a href={VISITUSA}>Visit USA</a>
							</li>
							<li className="list-group-item">
								<a href={ALTERNATIVES}>
									ALTERNATIVES TO THE H-1B }
								</a>
							</li>
							<li className="list-group-item">
								<a href={HORRORSTORIES}>
									IMMIGRATION HORROR STORIES
								</a>
							</li>
							<li className="list-group-item">
								<a href={WHATISTHEE2}>WHAT IS THE E-2 VISA?</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6">
						<ul className="list-group articles">
							<li className="list-group-item">
								<a href={WHATISTHEH3}>WHAT IS THE H-3 VISA?</a>
							</li>
							<li className="list-group-item">
								<a href={OVisa}>What is the O Visa?</a>
							</li>
							<li className="list-group-item">
								<a href={PVisa}>WHAT IS THE P VISA?</a>
							</li>
							<li className="list-group-item">
								<a href={H1B}>
									REASON TO FILE H-1B PETITION EARLY?
								</a>
							</li>
							<li className="list-group-item">
								<a href={EB2}>
									Eligibility for a Green Card in Less Than a
									Year
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</ScrollableAnchor>
	);
};

export default Articles;
