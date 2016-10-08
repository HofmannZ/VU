import React, { Component } from 'react';

// Material UI
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './Sudoku.css';

// Components
import SudokuAlgorithm from '../../components/sudoku-algorithm/SudokuAlgorithm';

class Sudoku extends Component {
	constructor() {
		super();
		this.solveSudoku = this.solveSudoku.bind(this);
		this.nextSudoku = this.nextSudoku.bind(this);
		this.prevSudoku = this.prevSudoku.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.handleRead = this.handleRead.bind(this);

		this.state = {
			grid: [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			solve: false,
			currentSudoku: 0,
			hasReader: false,
			openDialog: false
		};
	}

	handleDialogOpen = () => {
    this.setState({openDialog: true});
  };

  handleDialogCloseAccept = () => {
    this.setState({openDialog: false});
		this.refs.file.click();
  };

	handleDialogCloseCancel = () => {
		this.setState({openDialog: false});
	};

	handleRead() {
		this.reader.onload = () => {
			const lines = this.reader.result.split('\n');
			const currentGridBottom = this.state.currentSudoku * 10 + 1;
			const currentGridTop = this.state.currentSudoku * 10 + 10;
			let grid = [];

			for (let i = currentGridBottom; i < currentGridTop; i++) {
				const rawRow = lines[i].split('');
				let row = [];

				for (let j = 0; j < rawRow.length - 1; j++) {
					let diget = Number(rawRow[j]);
					row.push(diget);
				}

				grid.push(row);
			}

			this.setState({ grid });
		}

		this.reader.readAsText(this.file);
	}

	handleFileChange(event) {
		const files = event.target.files;
		const file = files[0];
		let reader = new FileReader();
		this.file = file;
		this.reader = reader;
		this.setState({
			hasReader: true
		});
		this.handleRead();
	}

	handleUpload() {
		this.handleDialogOpen();
	}

	solveSudoku() {
		this.setState({
			solve: true
		});
	}

	nextSudoku() {
		if (this.state.currentSudoku < 50) {
			this.setState({
				solve: false,
				currentSudoku: this.state.currentSudoku + 1
			});
		} else {
			this.setState({
				solve: false,
				currentSudoku: 0
			});
		}

		this.handleRead();
	}

	prevSudoku() {
		if (this.state.currentSudoku > 0) {
			this.setState({
				solve: false,
				currentSudoku: this.state.currentSudoku - 1
			});
		} else {
			this.setState({
				solve: false,
				currentSudoku: 49
			});
		}

		this.handleRead();
	}

	render() {
		const dialogActions = [
			<FlatButton
				label="Cancel"
				primary={false}
				onTouchTap={this.handleDialogCloseCancel}
			/>,
			<FlatButton
				label="I Acknowledge"
				primary={true}
				onTouchTap={this.handleDialogCloseAccept}
			/>,
		];
		return (
			<section className="card-wrapper">
				<Card className="card">
					<CardTitle title="Sudoku Backtrack Algorithm" subtitle="Use our bruteforce algorithm to solve your Sudoku" />
					<SudokuAlgorithm hasToBeSolved={this.state.solve} grid={this.state.grid} />
					<CardActions>
						<RaisedButton
							label="Upload File"
							className="card__action-button"
							primary={!this.state.hasReader}
							onTouchTap={this.handleUpload}
						/>
						<RaisedButton
							label="Prev"
							className="card__action-button"
							primary={false}
							onTouchTap={this.prevSudoku}
							disabled={!(this.state.hasReader && this.state.currentSudoku > 0)}
						/>
						<RaisedButton
							label="Next"
							className="card__action-button"
							primary={false}
							onTouchTap={this.nextSudoku}
							disabled={!(this.state.hasReader && this.state.currentSudoku < 50)}
						/>
						<RaisedButton
							label="Solve the Sudoku"
							className="card__action-button"
							primary={true}
							onTouchTap={this.solveSudoku}
							disabled={!this.state.hasReader}
						/>
					</CardActions>
					<input
						type="file"
						className="input-file"
						ref="file"
						encType="multipart/form-data"
						onChange={this.handleFileChange}
					/>
				</Card>
				<Dialog
					title="Acknowledge Our Input Format"
					actions={dialogActions}
					modal={true}
					open={this.state.openDialog}
				>
					<p>Please acknowledge that our algorithm only takes the following format:</p>
					<pre>
{`  Grid 01
  003020600
  900305001
  001806400
  008102900
  700000008
  006708200
  002609500
  800203009
  005010300`}
					</pre>
					<p>Note that; the 1st line and every 10th line after it, are descarded and not procesed.</p>
				</Dialog>
			</section>
		);
	}
}

export default Sudoku;
