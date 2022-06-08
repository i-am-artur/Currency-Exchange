import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Main, Warning } from './app.styles';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import { getCurrenciesState } from './store/selectors';
import { getCurrenciesData } from './store/currencies/thunk';
import LoadingIndicator from './common/components/LoadingIndicator/LoadingIndicator';

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
				{currencies.isStaticData && (
					<Warning>
						Warning: Used all free currency requests from API. All data is from
						June 8, 2022 according to USD currency.
					</Warning>
				)}
				{currencies.isLoading ? <LoadingIndicator /> : <AppRouter />}
			</Main>
			<Footer />
		</>
	);
}
