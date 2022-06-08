import GlobalStyles from './index.styled';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/index';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<GlobalStyles />
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	</>
);
