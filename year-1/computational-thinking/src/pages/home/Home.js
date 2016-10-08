import React, { Component } from 'react';
import { Link } from 'react-router';

// Material UI
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './Home.css';

class Home extends Component {
	render() {
		return (
			<section className="card-wrapper">
				<Card className="card">
					<CardTitle title="Welcome to Group 9d" subtitle="Our solution for the Computational Thinking project assignment" />
					<CardText>
						<section>
							<h3>Assignment</h3>
							<p>For the course Computational Thinking at the VU University Amsterdam we had to make an algorithm that could solve Sudoku puzzles.</p>
						</section>
						<section>
							<h3>Sudoku</h3>
							<p>A Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called "boxes", "blocks", "regions", or "subsquares") contains all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a unique solution.</p>
							<p>Completed games are always a type of Latin square with an additional constraint on the contents of individual regions. For example, the same single integer may not appear twice in the same row, column, or any of the nine 3×3 subregions of the 9x9 playing board.</p>
						</section>
						<section>
							<h3>Algorithm</h3>
							<p>Vestibulum lacus nisi, sodales eu neque sit amet, mollis cursus justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris interdum ultrices justo, id faucibus felis gravida sit amet. Sed elementum luctus mi, non sagittis diam dapibus sed. Duis sagittis semper orci, non posuere nibh rhoncus sed. Praesent mattis dolor nec efficitur venenatis. Vestibulum a ex et sem euismod tempor. Maecenas id mi eu ex volutpat vestibulum vel at turpis. Aenean consequat dui sed nisl laoreet mollis. Cras leo mauris, tincidunt eu commodo vel, placerat at ligula. Donec scelerisque enim nec facilisis vehicula. Cras rhoncus elementum feugiat. In facilisis porttitor risus, eu porttitor dui finibus at.</p>
						</section>
					</CardText>
					<CardActions>
						<Link to="/sudoku">
							<RaisedButton label="Show me the demo algorithm" primary={true} />
						</Link>
					</CardActions>
				</Card>
			</section>
		);
	}
}

export default Home;
