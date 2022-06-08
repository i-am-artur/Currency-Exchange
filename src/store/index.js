import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { default as currenciesReducer } from './currencies/reducer';

const store = configureStore(
	{
		reducer: {
			currencies: currenciesReducer,
		},
	},
	applyMiddleware(thunk)
);

export default store;
