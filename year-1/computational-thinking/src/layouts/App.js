import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

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
import Sudoku from '../pages/sudoku/Sudoku';
import NotFound from '../pages/not-found/NotFound';


// Styles
import './App.css';

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

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<BrowserRouter>
					<section>
						<nav>
							<AppBar title="Sudoku App" onLeftIconButtonTouchTap={this.handleToggle} />
							<Drawer
								docked={false}
								open={this.state.open}
								onRequestChange={(open) => this.setState({ open })}
							>
								<AppBar
									title="Sudoku App"
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
								<Link to="/sudoku">
									<MenuItem onTouchTap={this.handleClose}>
										Sudoku
									</MenuItem>
								</Link>
							</Drawer>
						</nav>
						<main>
							<Match exactly pattern="/" component={Home} />
							<Match pattern="/sudoku" component={Sudoku} />
							<Miss component={NotFound} />
						</main>
					</section>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App;
