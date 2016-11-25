import React from 'react';

const renderWithLabel = (WrappableComponent) => ({
	label = "default label",
	...rest
}) => (
	<div>
		<div > {label} </div>
		<WrappableComponent {...rest} />
	</div>
)

export default renderWithLabel;