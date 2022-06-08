import { Source, Wrapper } from './input.styled';
import { random, removeSpaces } from '../../../helpers/mixins';
import * as PropTypes from 'prop-types';
import { useState } from 'react';

export default function Input({
	value = '',
	type = 'text',
	label = null,
	placeholder = '',
	onChange,
	enterPressed,
	checked,
	datalist,
}) {
	const inputId = removeSpaces(label);
	const [currentValue, setCurrentValue] = useState(value);
	const listId = datalist && random(0, 10000);

	const valueChanged = (e) => {
		const typedValue = e.target.value;
		if (onChange) {
			onChange(typedValue);
		}
		setCurrentValue(typedValue);
	};

	return (
		<Wrapper>
			{label && <label htmlFor={inputId}>{label}</label>}
			<Source
				id={inputId}
				type={type}
				value={currentValue}
				placeholder={placeholder}
				aria-label={label}
				defaultChecked={checked}
				onChange={valueChanged}
				onKeyDown={(e) => e.key === 'Enter' && enterPressed && enterPressed()}
				list={listId}
			/>
			{datalist && (
				<datalist id={listId}>
					{datalist.map((listItem) => (
						<option value={listItem} key={listItem} />
					))}
				</datalist>
			)}
		</Wrapper>
	);
}

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	labelText: PropTypes.string,
	enterPressed: PropTypes.func,
	type: PropTypes.string,
};
