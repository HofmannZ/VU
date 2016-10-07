import React, { Component } from 'react';

// components
import SudokuGrid from '../sudoku-grid/SudokuGrid';

// Styles
import './SudokuAlgorithm.css';

const grid = [
	[0, 0, 3, 0, 2, 0, 6, 0, 0],
	[9, 0, 0, 3, 0, 5, 0, 0, 1],
	[0, 0, 1, 8, 0, 6, 4, 0, 0],
	[0, 0, 8, 1, 0, 2, 9, 0, 0],
	[7, 0, 0, 0, 0, 0, 0, 0, 8],
	[0, 0, 6, 7, 0, 8, 2, 0, 0],
	[0, 0, 2, 6, 0, 9, 5, 0, 0],
	[8, 0, 0, 2, 0, 3, 0, 0, 9],
	[0, 0, 5, 0, 1, 0, 3, 0, 0]
];

class SudokuAlgorithm extends Component {
	constructor() {
		super();

		this.isValid = this.isValid.bind(this);
		this.getNextCell = this.getNextCell.bind(this);
		this.solve = this.solve.bind(this);
		this.solved = this.solved.bind(this);

		this.state = {
			solved: false
		};
	}

	isValid(cell, value) {
		if (grid[cell.row][cell.col] !== 0) {
			return false;
		}

		for (let i = 0; i < 9; i++) {
			if (grid[cell.row][i] === value) {
				return false;
			}
		}

		for (let i = 0; i < 9; i++) {
			if (grid[i][cell.col] === value) {
				return false;
			}
		}

		let x1 = 3 * (Math.floor(cell.row / 3));
		let y1 = 3 * (Math.floor(cell.col / 3));
		let x2 = x1 + 2;
		let y2 = y1 + 2;

		for (let x = x1; x <= x2; x++) {
			for (let y = y1; y <= y2; y++) {
				if (grid[x][y] === value) {
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

		if (grid[cur.row][cur.col] !== 0) {
			return this.solve(this.getNextCell(cur));
	  }

		for (let i = 1; i <= 9; i++) {
			const valid = this.isValid(cur, i);

			if (!valid) {
				continue;
			}

			grid[cur.row][cur.col] = i;

			const solved = this.solve(this.getNextCell(cur));
			if (solved) {
				return true;
			} else {
				grid[cur.row][cur.col] = 0;
			}
		}

		return false;
	}

	solved() {
		return this.solve({
			row: 0,
			col: 0
		});
	}

	render() {
		if (this.props.hasToBeSolved) {
			if (!this.solved()) {
				console.log('Sudoku cannot be solved!');
				return (
					<SudokuGrid grid={grid} />
				);
			} else {
				return (
					<SudokuGrid grid={grid} />
				);
			}
		} else {
			return (
				<SudokuGrid grid={grid} />
			);
		}
	}
}

export default SudokuAlgorithm;
