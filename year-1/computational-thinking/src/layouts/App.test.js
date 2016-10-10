import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});
