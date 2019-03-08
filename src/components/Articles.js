import React from "react";

const Articles = () => {
	return (
		<div className="container" id="articles">
			<h1>Articles</h1>
			<p>All articles are downloadble as DOC files.</p>

			<div className="row">
				<div className="col-md-6">
					<ul className="list-group articles">
						<li className="list-group-item">
							<a href="articles/VAWAparent.doc">
								Are you an Abused Parent of a US Citizen?
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/VISITUSA.doc">Visit USA</a>
						</li>
						<li className="list-group-item">
							<a href="articles/ALTERNATIVESTOTHEH.doc">
								ALTERNATIVES TO THE H-1B
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/IMMIGRATIONHORRORSTORIES.doc">
								IMMIGRATION HORROR STORIES
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/WHATISTHEE2visa-1.doc">
								WHAT IS THE E-2 VISA?
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-6">
					<ul className="list-group articles">
						<li className="list-group-item">
							<a href="articles/WHATISTHEH3.doc">
								WHAT IS THE H-3 VISA?
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/WhatistheOVisa.doc">
								What is the O Visa?
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/WHATISTHEPVISA.doc">
								WHAT IS THE P VISA?
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/H-1barticle.doc">
								REASON TO FILE H-1B PETITION EARLY?
							</a>
						</li>
						<li className="list-group-item">
							<a href="articles/EB2article.doc">
								Eligibility for a Green Card in Less Than a Year
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Articles;

