export async function fetchCurrenciesData(newBaseCurrency) {
	const apiKey = 'ae8ab4f0-43cc-11ec-9d80-9f753414f6f7';

	return await fetch(
		`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${newBaseCurrency}`
	).then((response) => response.json());

	// processData(newBaseCurrency, currencies.data);
}
