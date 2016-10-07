import React, { Component } from 'react';

// Material UI
import { Card, CardTitle } from 'material-ui/Card';

// Styles
import './Sudoku.css';

// Components
import SudokuAlgorithm from '../../components/sudoku-algorithm/SudokuAlgorithm';

class Sudoku extends Component {
	render() {
		return (
			<section className="card-wrapper">
				<Card className="card">
					<CardTitle title="Sudoku backtrack algorithm" subtitle="Use our bruteforce algorithm to solve your Sudoku" />
					<SudokuAlgorithm />
				</Card>
			</section>
		);
	}
}

export default Sudoku;
