import React, { Component } from 'react';

class Add extends Component {
	render() {
		return (
			<div className="add">
				<i onClick={ this.props.addNote } className="fas fa-plus-circle fa-lg icon"></i>
			</div>
		)
	}
}

export default Add;
