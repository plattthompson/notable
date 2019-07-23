import React, { Component } from 'react';

class Save extends Component {
	render() {
		return (
			<div className="save">
				<i onClick={ this.props.saveChanges } className="far fa-save fa-lg icon"></i>
			</div>
		)
	}
}

export default Save;
