import React, { Component } from 'react';

// Styles
import './SudokuAlgorithm.css';

// components
import SudokuGrid from '../sudoku-grid/SudokuGrid';

class SudokuAlgorithm extends Component {
	constructor(props) {
		super(props);

		this.isValid = this.isValid.bind(this);
		this.getNextCell = this.getNextCell.bind(this);
		this.solve = this.solve.bind(this);
		this.solved = this.solved.bind(this);
		this.calculateOneSum = this.calculateOneSum.bind(this);

		this.currentDigests = "";

		this.state = {
			hasToBeSolved: false,
			shouldCalculate: true,
			solved: false
		}
	}

	isValid(cell, value) {
		if (this.grid[cell.row][cell.col] !== 0) {
			return false;
		}

		for (let i = 0; i < 9; i++) {
			if (this.grid[cell.row][i] === value) {
				return false;
			}
		}

		for (let i = 0; i < 9; i++) {
			if (this.grid[i][cell.col] === value) {
				return false;
			}
		}

		let x1 = 3 * (Math.floor(cell.row / 3));
		let y1 = 3 * (Math.floor(cell.col / 3));
		let x2 = x1 + 2;
		let y2 = y1 + 2;

		for (let x = x1; x <= x2; x++) {
			for (let y = y1; y <= y2; y++) {
				if (this.grid[x][y] === value) {
					return false;
				}
			}
		}

		return true;
	}

	getNextCell(cur) {
		let row = cur.row;
		let col = cur.col;

		col++;

		if (col > 8) {
			col = 0;
			row++;
		}

		if (row > 8) {
			return null;
		}

		return {
			col,
			row
		};
	}

	solve(cur) {
		if (cur == null) {
			return true;
		}

		if (this.grid[cur.row][cur.col] !== 0) {
			return this.solve(this.getNextCell(cur));
	  }

		for (let i = 1; i <= 9; i++) {
			const valid = this.isValid(cur, i);

			if (!valid) {
				continue;
			}

			this.grid[cur.row][cur.col] = i;

			const solved = this.solve(this.getNextCell(cur));
			if (solved) {
				return true;
			} else {
				this.grid[cur.row][cur.col] = 0;
			}
		}

		return false;
	}

	solved(nextProps) {
		let solved = this.solve({
			row: 0,
			col: 0
		});
		this.setState({
			hasToBeSolved: true,
			solved
		});
		if (this.state.shouldCalculate) {
			this.calculateOneSum();
			this.setState({
				shouldCalculate: false
			});
		}
	}

	calculateOneSum() {
		if (this.currentDigests.length > 0) {
			this.currentDigests = "";
		}

		for (let i = 0; i < 3; i++) {
			this.currentDigests += this.grid[0][i].toString();
		}

		let number = Number(this.currentDigests);
		this.props.addToSum(number);
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
		console.log('this.props.grid === nextProps.grid', this.props.grid === nextProps.grid);
		if (!(this.props.grid === nextProps.grid)) {
			this.setState({
				shouldCalculate: true
			});
		}
		if (nextProps.hasReader && nextProps.hasToBeSolved) {
			this.solved(nextProps);
		}
	}

	render() {
		this.grid = this.props.grid;

		if (!this.state.solved && this.state.hasToBeSolved) {
			return (
				<SudokuGrid grid={this.grid} captation="Sudoku cannot be solved!" />
			);
		}
		return (
			<SudokuGrid grid={this.grid} />
		);
	}
}

export default SudokuAlgorithm;
