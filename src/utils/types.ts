export type Weather = {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_f: number;
    wind_mph: number;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_f: number;
          mintemp_f: number;
        };
      }
    ];
  };
  location: {
    name: string;
    region: string;
  };
};

export type RegistrationInput = {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: number;
}