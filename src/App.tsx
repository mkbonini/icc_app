import WeatherWidget from "./components/WeatherWidget";
import AddressForm from "./components/AddressForm";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import "./App.css";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <WeatherWidget />
        <AddressForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
