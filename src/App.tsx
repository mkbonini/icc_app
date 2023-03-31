import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";
import AddressForm from "./components/AddressForm";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ width: 900, m: "2rem auto" }}>
          <WeatherWidget />
        </Box>
        <AddressForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
