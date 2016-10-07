import React, { Component } from 'react';
import { Link } from 'react-router';

// Material UI
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './NotFound.css';
import vennDiagram from './vennDiagram.svg';

class NotFound extends Component {
	render() {
		return (
			<section className="card-wrapper">
				<Card className="card">
					<CardTitle title="The Venn Diagram" />
					<CardText>
						<p className="venn-explanation">
							Venn diagrams or set diagrams are diagrams that show all hypothetically possible logical relations between a finite collection of sets (groups of things). Venn diagrams were conceived around 1880 by John Venn. They are used in many fields, including set theory, probability, logic, statistics, computer science, and trying to visit web pages that don’t exist.
						</p>
						<img src={vennDiagram} className="venn-diagram" alt="Venn diagram" />
					</CardText>
					<CardActions>
						<Link to="/">
							<RaisedButton label="Bring me home!" />
						</Link>
					</CardActions>
				</Card>
			</section>
		);
	}
}

export default NotFound;
