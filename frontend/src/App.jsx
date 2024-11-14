import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import CoinPageContainer from "./pages/CoinPage/CoinPageContainer";
const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/coin/:id" element={<CoinPageContainer/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
