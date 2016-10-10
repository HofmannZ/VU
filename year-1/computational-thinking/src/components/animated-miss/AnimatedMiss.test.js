import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedMiss from './AnimatedMiss';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AnimatedMiss />, div);
});
