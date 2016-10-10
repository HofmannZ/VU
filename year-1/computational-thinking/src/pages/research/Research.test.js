import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Research from './Research';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<MuiThemeProvider>
			<BrowserRouter>
				<Research />
			</BrowserRouter>
		</MuiThemeProvider>
		, div);
});
