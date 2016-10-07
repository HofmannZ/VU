import React from 'react';
import ReactDOM from 'react-dom';
import SudokuAlgorithm from './SudokuAlgorithm';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SudokuAlgorithm />, div);
});
