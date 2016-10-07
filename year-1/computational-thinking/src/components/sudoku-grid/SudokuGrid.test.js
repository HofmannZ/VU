import React from 'react';
import ReactDOM from 'react-dom';
import SudokuGrid from './SudokuGrid';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SudokuGrid />, div);
});
