import React from 'react';

import { Textarea } from './base'
import renderWithLabel from './RenderWithLabel';

const Address = ({
	onChange,
	value,
	...props
}) => (
	<Textarea
		onChange={
			(newValue) => {
				var splittedValue = newValue.split('\n');
				onChange(splittedValue);
			}
		}
		value={value ? value.join('\n') : ''}
	/>
);

export default renderWithLabel(Address)
