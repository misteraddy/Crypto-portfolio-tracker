import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import HomeContainer from "./pages/Home/HomeContainer";
import GridContainer from "./pages/Home/GridContainer";
import ListContainer from "./pages/Home/ListContainer";
import CoinPageContainer from "./pages/CoinPage/CoinPageContainer";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<HomeContainer />}>
            <Route path="/home" element={<GridContainer />} />
            <Route path="/home/list" element={<ListContainer />} />
          </Route>
          <Route path="/home/list/:id" element={<CoinPageContainer />} />
          <Route path="/home/:id" element={<CoinPageContainer />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
