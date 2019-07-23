import React, { Component } from 'react';

class Titles extends Component {
	render() {
		return (
			<div className="menu">
				<ul className="list-items">
					{ this.props.renderTitles }
				</ul>
			</div>
		);
	}
}

export default Titles;
