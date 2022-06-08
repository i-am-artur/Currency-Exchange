import {
	CURRENCIES_DATA_IS_SET,
	SECOND_CURRENCY_IS_SET,
	TOGGLE_FAVORITE_STATUS,
	LOADING_STATUS_IS_SET,
	STATIC_DATA_STATUS,
} from './actionTypes';

export function setCurrencies(currenciesData) {
	return {
		type: CURRENCIES_DATA_IS_SET,
		payload: currenciesData,
	};
}
export function setSecondCurrency(secondCurrency) {
	return {
		type: SECOND_CURRENCY_IS_SET,
		payload: secondCurrency,
	};
}
export function setLoadingStatus(loadingStatus) {
	return {
		type: LOADING_STATUS_IS_SET,
		payload: loadingStatus,
	};
}
export function toggleCurrencyFavoriteStatus(currencyCode) {
	return {
		type: TOGGLE_FAVORITE_STATUS,
		payload: currencyCode,
	};
}
export function toggleStaticStatus(staticStatus) {
	return {
		type: STATIC_DATA_STATUS,
		payload: staticStatus,
	};
}
