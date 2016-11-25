import React from 'react';

const enhanceWithLabel = (WrappedComponent) => ({label, ...rest}) => {
	return (
		<div>
			<label>{label}</label>
			<WrappedComponent {...rest} />
		</div>	
	);
};

export default enhanceWithLabel;