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

class Articles extends React.Component
{
	state = {
		ArticleArray: [
			{
				title: "Are you an Abused Parent of a US Citizen?",
				PDF: VAWA,
			},
			{
				title: "Visit USA",
				PDF: VISITUSA
			},
			{
				title: "ALTERNATIVES TO THE H-1B",
				PDF: ALTERNATIVES
			},
			{
				title: "IMMIGRATION HORROR STORIES",
				PDF: HORRORSTORIES
			},
			{
				title: "WHAT IS THE E-2 VISA?",
				PDF: WHATISTHEE2
			},
			{
				title: "WHAT IS THE H-3 VISA?",
				PDF: WHATISTHEH3
			},
			{
				title: "What is the O Visa?",
				PDF: OVisa
			},
			{
				title: "WHAT IS THE P VISA?",
				PDF: PVisa
			},
			{
				title: "WHAT IS THE P VISA?",
				PDF: PVisa
			},  
			{
				title: "REASON TO FILE H-1B PETITION EARLY?",
				PDF: H1B
			},  
			
			{
				title: "Eligibility for a Green Card in Less Than a Year",
				PDF: EB2
			},  
		]
	}
	render()
	{
		const ArticleList = this.state.ArticleArray.map((article, i) => {
			return (
				<li key={"alim-article" + i} className="list-group-item">
					<a href={article.PDF}>{article.title}</a>
				</li> 
			)
		});

		return(
			<ScrollableAnchor id={"articles"}>
				<div className="container">
					<h2>Articles</h2>
					<p>All articles are downloadble as DOC files.</p>

					<div className="row">
						<div className="col-md-12">
							<ul className="list-group articles">
								{ ArticleList }							
							</ul>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		)
		
	}
}

export default Articles;
