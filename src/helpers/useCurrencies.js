import { useMemo } from 'react';
import { getCurrenciesData } from '../store/currencies/thunk';

export function useFilteredListFromBaseCurrency(currencies) {
	return useMemo(() => {
		return currencies.list.filter(
			(currency) => currency.code !== currencies.baseCurrencyCode
		);
	}, [currencies]);
}

export function useSecondCurrency(currencies) {
	return useMemo(
		() =>
			currencies.list.find(
				(currency) => currency.code === currencies.secondCurrencyCode
			),
		[currencies]
	);
}

export function firstCurrencyChanged(event, dispatch) {
	const target = event.target;
	dispatch(getCurrenciesData(target.value));
}
