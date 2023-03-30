import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getWeather } from '../utils/weatherAPI';
import Weather from '../utils/types';

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      let weatherResults = await getWeather();
      setWeather(weatherResults);
      setLoading(false);
      
    })();
  }, []);
  // console.log(weather?.current)
	return (
		<>
			<Box sx={{
         mt: 0,
         display: 'flex', 
         height: 70,
         backgroundcolor: 'blue',
         }}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={weather?.current.condition.text}
          src={weather?.current.condition.icon}
        />
				<Box sx={{}}>
          <Typography color='text.secondary' sx={{  }}>{Math.round(weather?.current.temp_f)} {'\xB0F'}</Typography>
          <Typography color='text.secondary' sx={{  }}>Humidity: {Math.round(weather?.current.humidity)}%</Typography>
          <Typography color='text.secondary' sx={{  }}>Wind speed: {Math.round(weather?.current.wind_mph)} mph</Typography>
        </Box>
				
			</Box>
		</>
	);
}
