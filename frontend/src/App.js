import "./App.css";
import "@fontsource/inter";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
