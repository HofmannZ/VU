import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500 } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';

// Pages
import Home from '../pages/home/Home';
import Research from '../pages/research/Research';
import Sudoku from '../pages/sudoku/Sudoku';
import Team from '../pages/team/Team';
import NotFound from '../pages/not-found/NotFound';

// Styles
import './App.css';

// Components
import AnimatedMatch from '../components/animated-match/AnimatedMatch';
import AnimatedMiss from '../components/animated-miss/AnimatedMiss';
import Github from './Github.js';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: lightBlue500,
		primary2Color: lightBlue500
	}
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleToggle = () => this.setState({
		open: !this.state.open
	});

	handleClose = () => this.setState({
		open: false
	});

	handleLink() {
		let win = window.open('https://github.com/HofmannZ/vu/tree/master/year-1/computational-thinking', '_blank');
		win.focus();
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<BrowserRouter basename="/vu/year/1/computational-thinking">
					<section>
						<nav>
							<AppBar
								title="Sudoku"
								onLeftIconButtonTouchTap={this.handleToggle}
								iconElementRight={<IconButton onTouchTap={this.handleLink}><Github /></IconButton>}
							/>
							<Drawer
								docked={false}
								open={this.state.open}
								onRequestChange={(open) => this.setState({ open })}
							>
								<AppBar
									title="Sudoku"
									onLeftIconButtonTouchTap={this.handleToggle}
									iconElementLeft={
										<IconButton>
											<NavigationClose />
										</IconButton>
									}
								/>
								<Link to="/">
									<MenuItem onTouchTap={this.handleClose}>
										Home
									</MenuItem>
								</Link>
								<Link to="/research">
									<MenuItem onTouchTap={this.handleClose}>
										Research
									</MenuItem>
								</Link>
								<Link to="/sudoku">
									<MenuItem onTouchTap={this.handleClose}>
										Sudoku
									</MenuItem>
								</Link>
								<Link to="/team">
									<MenuItem onTouchTap={this.handleClose}>
										Meet the Team
									</MenuItem>
								</Link>
							</Drawer>
						</nav>
						<main>
							<AnimatedMatch exactly pattern="/" component={Home} />
							<AnimatedMatch pattern="/research" component={Research} />
							<AnimatedMatch pattern="/sudoku" component={Sudoku} />
							<AnimatedMatch pattern="/team" component={Team} />
							<AnimatedMiss component={NotFound} />
						</main>
					</section>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App;
