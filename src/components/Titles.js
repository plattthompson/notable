import React from 'react';

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