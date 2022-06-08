import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import routeList from './routeList';

import LoadingIndicator from '../../common/components/LoadingIndicator/LoadingIndicator';

const Converter = lazy(() => import('../Converter/Converter'));
const Exchanger = lazy(() => import('../Exchanger/Exchanger'));

export default function AppRouter() {
	return (
		<Suspense fallback={<LoadingIndicator />}>
			<Routes>
				<Route path={routeList.home} element={<Converter />} />
				<Route path={routeList.exchanger} element={<Exchanger />} />
			</Routes>
		</Suspense>
	);
}
