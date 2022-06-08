import * as PropTypes from 'prop-types';

import { removeSpaces } from '../../../helpers/mixins';
import { Component, Wrapper } from './select.styled';

export default function Select({
	label = null,
	options = [],
	selected,
	onChange,
}) {
	const selectId = removeSpaces(label);

	return (
		<Wrapper>
			{label && <label htmlFor={selectId}>{label}</label>}
			<Component id={selectId} onChange={onChange} defaultValue={selected}>
				{options.map((option) => (
					<option value={option.code} key={option.code}>
						{option.code}
					</option>
				))}
			</Component>
		</Wrapper>
	);
}

Select.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array,
	selected: PropTypes.string,
	onChange: PropTypes.func,
};
