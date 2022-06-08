import {
	CURRENCIES_DATA_IS_SET,
	SECOND_CURRENCY_IS_SET,
	ERROR,
	LOADING_STATUS_IS_SET,
	TOGGLE_FAVORITE_STATUS,
} from './actionTypes';
import produce from 'immer';

const initialState = {
	isLoading: false,
	baseCurrencyCode: 'USD',
	secondCurrencyCode: 'UAH',
	list: [],
};

function reducer(state = initialState, action) {
	const payload = action?.payload;
	switch (action?.type) {
		case SECOND_CURRENCY_IS_SET:
			return produce(state, (stateCopy) => {
				stateCopy.secondCurrencyCode = payload;
			});
		case CURRENCIES_DATA_IS_SET:
			return produce(state, (stateCopy) => {
				stateCopy.baseCurrencyCode = payload.baseCurrencyCode;
				stateCopy.list = payload.list;
			});
		case LOADING_STATUS_IS_SET:
			return produce(state, (stateCopy) => {
				stateCopy.isLoading = payload;
			});
		case TOGGLE_FAVORITE_STATUS:
			return produce(state, (stateCopy) => {
				const currency = stateCopy.list.find(
					(currency) => currency.code === payload
				);
				currency.isFavorite = !currency.isFavorite;
			});
		case ERROR:
		default:
			return state;
	}
}

export default reducer;
