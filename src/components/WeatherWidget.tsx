import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Box, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { getWeather } from '../utils/model';
import Weather from '../utils/types';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      let weatherResults = await getWeather() as Weather;
      setWeather(weatherResults);
      setLoading(false);
      
    })();
  }, []);

	return (
			<Card sx={{
         display: 'flex', 
         width: 260,
         height: 135,
         }}>
          {loading ? <CircularProgress sx={{m:'auto'}}/> : <><Box sx={{p: 2}}>
            <Typography fontSize={25} color='primary' sx={{fontWeight: 'bold', lineHeight: 1, mt: 0 }}>{weather?.location.name}</Typography>
            <Typography color='primary' fontSize={60} align='center' sx={{fontWeight: 'bold', lineHeight: .9, mt: 0 }}>{Math.round(weather?.current.temp_f!)}{'\xB0'}</Typography>
            <Typography color='primary' align='center' sx={{}}>H:{Math.round(weather?.forecast.forecastday[0].day.maxtemp_f!)}{'\xB0'} / L:{Math.round(weather?.forecast.forecastday[0].day.mintemp_f!)}{'\xB0'}</Typography>
          </Box>
          <Box sx={{p: 2}}>
          <Box sx={{ 
            display: 'flex',
            margin: '0 auto',
          }}>
            <Box
              component="img"
              alt={weather?.current.condition.text}
              src={weather?.current.condition.icon}
              sx={{
                height: 75,
                width: 75,
              }}
            />
            
          </Box>
				<Box sx={{margin: '0 auto'}}>
          <Typography color='text.secondary' sx={{ mt: .25 }}>{weather?.current.condition.text}</Typography>
          
          {/* <Typography color='text.secondary' align='center'>Humidity: {Math.round(weather?.current.humidity)}%</Typography>
          <Typography color='text.secondary' align='center'>Wind speed: {Math.round(weather?.current.wind_mph)} mph</Typography> */}
        </Box>
			</Box></>}
			</Card>
	);
}
