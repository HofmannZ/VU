import React, { Component } from 'react';
import { Miss } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Styles
import './AnimatedMiss.css';

class AnimatedMiss extends Component {
	render() {
		const data = this.props;
		return (
			<Miss
				{...this.props}
				children={
					<ReactCSSTransitionGroup
						component="main"
						transitionName="page"
						transitionEnterTimeout={400}
						transitionLeaveTimeout={400}
					>
						{<data.component />}
					</ReactCSSTransitionGroup>
				}
			/>
		);
	}
}

export default AnimatedMiss;
