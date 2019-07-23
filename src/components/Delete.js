import React, { Component } from 'react';

class Delete extends Component {
	render() {
		return (
			<div className="delete">
				<i onClick={ this.props.deleteNote } className="fas fa-trash-alt fa-lg icon"></i>
			</div>
		)
	}
}

export default Delete;