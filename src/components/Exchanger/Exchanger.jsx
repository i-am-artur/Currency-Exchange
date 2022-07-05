import Select from '../../common/components/Select/Select';
import {
	Currency,
	CurrencyItem,
	CurrencyList,
	Wrapper,
} from './exchanger.styled';
import Input from '../../common/components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenciesState } from '../../store/selectors';
import { toggleCurrencyFavoriteStatus } from '../../store/currencies/actionCreators';
import { useMemo, useState } from 'react';
import { firstCurrencyChanged } from '../../helpers/useCurrencies';
import LoadingIndicator from '../../common/components/LoadingIndicator/LoadingIndicator';

export default function Exchanger() {
	const dispatch = useDispatch();
	const currencies = useSelector(getCurrenciesState);
	const [currenciesFilterCondition, setCurrenciesFilterCondition] =
		useState('');

	function toggleCurrencyFavorite(currencyCode) {
		dispatch(toggleCurrencyFavoriteStatus(currencyCode));
	}

	const currenciesToDisplay = useMemo(() => {
		const condition = currenciesFilterCondition.toUpperCase();
		const filteredCurrencies = getFilteredCurrencies(condition, currencies);
		return getSortedCurrencies(filteredCurrencies);
	}, [currenciesFilterCondition, currencies]);

	return (
		<Wrapper>
			<Select
				label='Base currency:'
				options={currencies.list}
				selected={currencies.baseCurrencyCode}
				onChange={(event) => firstCurrencyChanged(event, dispatch)}
			/>
			<Input label='Filter:' onChange={setCurrenciesFilterCondition} />
			{currencies.isLoading ? (
				<LoadingIndicator />
			) : (
				<CurrencyList>
					{currenciesToDisplay.map((currency) => (
						<CurrencyItem key={currency.code}>
							<Input
								type='checkbox'
								checked={currency.isFavorite}
								onChange={() => toggleCurrencyFavorite(currency.code)}
							/>
							<Currency>
								<span>{currency.code}</span>
								<span>{currency.value}</span>
							</Currency>
						</CurrencyItem>
					))}
				</CurrencyList>
			)}
		</Wrapper>
	);
}

function getFilteredCurrencies(condition, currencies) {
	return currencies.list.filter(
		(currency) =>
			currency.code !== currencies.baseCurrencyCode &&
			currency.code.includes(condition)
	);
}

function getSortedCurrencies(filteredCurrencies) {
	return filteredCurrencies.sort((currency1, currency2) => {
		if (currency1.isFavorite && currency2.isFavorite) {
			return currency1.code.localeCompare(currency2.code);
		}

		return currency1.isFavorite ? -1 : 1;
	});
}
