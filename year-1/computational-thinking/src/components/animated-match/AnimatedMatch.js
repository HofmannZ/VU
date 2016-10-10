import React, { Component } from 'react';
import { Match } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Styles
import './AnimatedMatch.css';

class AnimatedMatch extends Component {
	render() {
		const data = this.props;
		return (
			<Match
				{...this.props}
				children={({ matched, ...props }) => {
					return (<ReactCSSTransitionGroup
						component="section"
						transitionName="page"
						transitionEnterTimeout={400}
						transitionLeaveTimeout={400}
					>
						{matched && <data.component {...props} />}
					</ReactCSSTransitionGroup>);
				}}
			/>
		);
	}
}

export default AnimatedMatch;
