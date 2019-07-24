import React from 'react';

// class Titles extends Component {
// 	render() {
// 		return (
// 			<div className="menu">
// 				<ul className="note-titles">
// 					{ this.props.renderTitles }
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const Titles = (props) => {
	return (
		<div className="menu">
			<ul className="note-titles">
				{ props.renderTitles }
			</ul>
		</div>
	);
}

export default Titles;