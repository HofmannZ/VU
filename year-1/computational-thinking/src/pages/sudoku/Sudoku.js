import React, { Component } from 'react';

// Material UI
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './Sudoku.css';

// Components
import SudokuAlgorithm from '../../components/sudoku-algorithm/SudokuAlgorithm';

class Sudoku extends Component {
	constructor() {
		super();

		this.solveSudoku = this.solveSudoku.bind(this);

		this.state = {
			solve: false
		};
	}

	solveSudoku() {
		this.setState({
			solve: true
		});
	}

	render() {
		return (
			<section className="card-wrapper">
				<Card className="card">
					<CardTitle title="Sudoku backtrack algorithm" subtitle="Use our bruteforce algorithm to solve your Sudoku" />
					<SudokuAlgorithm hasToBeSolved={this.state.solve} />
					<CardActions>
						<RaisedButton
							label="Solve the Sudoku!"
							primary={true}
							onTouchTap={this.solveSudoku}
						/>
					</CardActions>
				</Card>
			</section>
		);
	}
}

export default Sudoku;
