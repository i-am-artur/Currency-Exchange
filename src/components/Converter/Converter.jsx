import Select from '../../common/components/Select/Select';
import { Result, Wrapper } from './converter.styled';
import Input from '../../common/components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenciesState } from '../../store/selectors';
import {
	firstCurrencyChanged,
	useFilteredListFromBaseCurrency,
	useSecondCurrency,
} from '../../helpers/useCurrencies';
import { setSecondCurrency } from '../../store/currencies/actionCreators';
import { useState } from 'react';
import { round } from '../../helpers/mixins';

export default function Converter() {
	const dispatch = useDispatch();
	const currencies = useSelector(getCurrenciesState);
	const secondCurrency = useSecondCurrency(currencies);
	const [amountToConvert, setAmountToConvert] = useState(0);

	const filteredListFromBaseCurrency =
		useFilteredListFromBaseCurrency(currencies);

	const secondCurrencyChanged = (event) => {
		const target = event.target;
		dispatch(setSecondCurrency(target.value));
	};

	return (
		<Wrapper>
			<Select
				label='From:'
				options={currencies.list}
				selected={currencies.baseCurrencyCode}
				onChange={(event) => firstCurrencyChanged(event, dispatch)}
			/>
			<Select
				label='To:'
				options={filteredListFromBaseCurrency}
				selected={currencies.secondCurrencyCode}
				onChange={secondCurrencyChanged}
			/>
			1 {currencies.baseCurrencyCode} = {secondCurrency.value}{' '}
			{secondCurrency.code}
			<Input
				label='Amount:'
				type='number'
				onChange={(value) => setAmountToConvert(value)}
			/>
			<Result>
				Result: {round(amountToConvert * secondCurrency.value, 2)} UAH
			</Result>
		</Wrapper>
	);
}
