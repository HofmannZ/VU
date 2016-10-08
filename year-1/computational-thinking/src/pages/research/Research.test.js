import React from 'react';
import ReactDOM from 'react-dom';
import Research from './Research';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Research />, div);
});
