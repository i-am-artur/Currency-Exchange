import { setCurrencies, setLoadingStatus } from './actionCreators';
import { fetchCurrenciesData } from '../../services';

export function getCurrenciesData(baseCurrency) {
	return async (dispatch, getState) => {
		dispatch(setLoadingStatus(true));
		const currentCurrencies = getState().currencies.list;

		const fetchedCurrencyData = await fetchCurrenciesData(baseCurrency);
		// const fetchedCurrencyData = require('../../currencies');

		const fetchedCurrencies = Object.values(fetchedCurrencyData.data);
		const currencies = formatCurrencies(fetchedCurrencies, currentCurrencies);

		const currenciesPayload = {
			baseCurrencyCode: baseCurrency,
			list: currencies,
		};

		dispatch(setCurrencies(currenciesPayload));
		dispatch(setLoadingStatus(false));
	};
}

function formatCurrencies(fetchedCurrencies, currentCurrencies) {
	return fetchedCurrencies.map((currency) => {
		const currentCurrency = currentCurrencies.find(
			(currentCurrency) => currentCurrency.code === currency.code
		);

		if (currentCurrency?.isFavorite) {
			return { ...currency, isFavorite: true };
		}

		return { ...currency, isFavorite: false };
	});
}
