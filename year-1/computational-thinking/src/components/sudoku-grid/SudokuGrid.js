import React, { Component } from 'react';

// Styles
import './SudokuGrid.css';

class SudokuGrid extends Component {
	constructor(props) {
		super(props);
		this.renderGrid = this.renderGrid.bind(this);
		this.renderTBody = this.renderTBody.bind(this);
		this.renderTR = this.renderTR.bind(this);
	}

	random() {
		return Math.floor((Math.random() * 9999999999) + 1);
	}

	renderTR(tr) {
		return (
			<tr key={this.random()}>
				{tr.map(td => (<td key={this.random()}>{td}</td>))}
			</tr>
		);
	}

	renderTBody(tbody) {
		return (
			<tbody key={this.random()}>
				{tbody.map(tr => this.renderTR(tr))}
			</tbody>
		);
	}

	renderGrid(grid) {
		let boxedGrid = [];
		for (let i = 0; i < 9; i++) {
			let rowBox = 3 * (Math.floor(i / 3));
			if (!boxedGrid[rowBox]) {
				boxedGrid[rowBox] = [];
			}
			boxedGrid[rowBox].push(grid[i]);
		}
		return boxedGrid.map(tbody => this.renderTBody(tbody));
	}

	render() {
		return (
			<table className="sudoku-grid">
				<colgroup><col></col><col></col><col></col></colgroup>
				<colgroup><col></col><col></col><col></col></colgroup>
				<colgroup><col></col><col></col><col></col></colgroup>
				{this.renderGrid(this.props.grid)}
			</table>
		);
	}
}

export default SudokuGrid;
