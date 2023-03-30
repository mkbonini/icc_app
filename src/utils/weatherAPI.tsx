export async function getWeather() {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=636cc7aa43b149be807194636233003&q=Denver&aqi=no`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					// X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}
