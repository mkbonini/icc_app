import * as React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Card,
  Box,
  CircularProgress,
  Typography,
  BoxProps,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { getWeather } from "../utils/model";
import Weather from "../utils/types";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const zipRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      let weatherResults = (await getWeather("80202")) as Weather;
      setWeather(weatherResults);
      setLoading(false);
    })();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    event.preventDefault();
    submitWeather(zipRef.current!.value);
  };

  async function submitWeather(body: any) {
    let weatherResults = (await getWeather(body)) as Weather;
    setWeather(weatherResults);
    setLoading(false);
  }

  const WeatherBox = styled(Box)<BoxProps>(({ theme }) => ({
    width: 900,
    margin: "2rem auto",
    [theme.breakpoints.down("md")]: {
      width: 260,
    },
  }));

  return (
    <WeatherBox>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 290,
          height: 230,
        }}
      >
        {loading ? (
          <CircularProgress sx={{ m: "auto" }} />
        ) : (
          <>
            <Box display="flex" flexDirection="column" padding="20px">
              <Box sx={{ m: "auto", display: "flex", pb: "10px" }}>
                <Box>
                  <Typography
                    fontSize={25}
                    color="primary"
                    sx={{ fontWeight: "bold", lineHeight: 1, mt: 0 }}
                  >
                    {weather?.location.name}
                  </Typography>
                  <Typography
                    color="primary"
                    fontSize={60}
                    align="center"
                    sx={{ fontWeight: "bold", lineHeight: 0.9, mt: 0 }}
                  >
                    {Math.round(weather?.current.temp_f!)}
                    {"\xB0"}
                  </Typography>
                  <Typography
                    color="primary"
                    align="center"
                    sx={{ fontWeight: "400" }}
                  >
                    H:
                    {Math.round(
                      weather?.forecast.forecastday[0].day.maxtemp_f!
                    )}
                    {"\xB0"} / L:
                    {Math.round(
                      weather?.forecast.forecastday[0].day.mintemp_f!
                    )}
                    {"\xB0"}
                  </Typography>
                </Box>
                <Box sx={{ pl: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      margin: "0 auto",
                    }}
                  >
                    <Box
                      component="img"
                      alt={weather?.current.condition.text}
                      src={weather?.current.condition.icon}
                      sx={{
                        height: 75,
                        width: 75,
                        pl: 1,
                      }}
                    />
                  </Box>
                  <Box sx={{ margin: "0 auto" }}>
                    <Typography
                      color="primary"
                      align="center"
                      sx={{ fontWeight: "400", mt: 0.25 }}
                    >
                      {weather?.current.condition.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <hr
                style={{
                  width: "100%",
                  border: 0,
                  height: "1px",
                  backgroundColor: "#e9efed",
                }}
              />
              <Box display="flex">
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TextField
                    required
                    label="Enter Zip Code"
                    inputRef={zipRef}
                    placeholder="Enter Zip Code"
                    type="number"
                    size="small"
                    sx={{ width: "165px", margin: "10px" }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    sx={{
                      borderRadius: "30px",
                      backgroundColor: "#ob5940",
                    }}
                  >
                    find
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Card>
    </WeatherBox>
  );
}
