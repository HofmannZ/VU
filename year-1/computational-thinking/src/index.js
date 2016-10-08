import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Styles
import './fonts.css';
import './index.css';

// Layouts
import App from './layouts/App';

// Pages
import Home from './pages/home/Home';
import Research from './pages/research/Research';
import Sudoku from './pages/sudoku/Sudoku';
import Team from './pages/team/Team';
import NotFound from './pages/not-found/NotFound';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Routes = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="research" component={Research} />
				<Route path="sudoku" component={Sudoku} />
				<Route path="team" component={Team} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	);
}

ReactDOM.render(
	<Routes />,
	document.getElementById('root')
);
