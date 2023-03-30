type Icon = string;
type Condition = Icon;
type Current = Condition;

type WeatherData = {
  current: {
    condition: {
      icon: string;
    }
    temp_f: number;
    wind_mph: number;
  }
}
type Weather ={
  icon: string;
  temp_f: number;
  wind_mph: number;
}
export default Weather