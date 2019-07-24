import React from 'react';

const Save = (props) => {
	return (
		<div className="save">
			<i onClick={ props.saveChanges } className="far fa-save fa-lg icon" aria-label="Save"></i>
		</div>
	);
}

export default Save;