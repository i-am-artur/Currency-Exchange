import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Main } from './app.styles';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import { getCurrenciesState } from './store/selectors';
import { getCurrenciesData } from './store/currencies/thunk';

export default function App() {
	const dispatch = useDispatch();
	const currencies = useSelector(getCurrenciesState);
	const baseCurrencyCode = currencies.baseCurrencyCode;

	useEffect(() => {
		dispatch(getCurrenciesData(baseCurrencyCode));
	}, [dispatch, baseCurrencyCode]);

	return (
		<>
			<Header />
			<Main>
				<AppRouter />
			</Main>
			<Footer />
		</>
	);
}
