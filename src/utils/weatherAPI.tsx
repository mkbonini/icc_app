export async function getWeather() {
	try {
		const response = await fetch(
			'https://api.open-meteo.com/v1/forecast?latitude=39.74&longitude=-104.98&current_weather=true&temperature_unit=fahrenheit',
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
