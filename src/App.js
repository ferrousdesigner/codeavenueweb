import "./App.css";
import CostCalculator from "./components/CostCalculator/CostCalculator";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import WhyUs from "./components/Nav/WhyUs";
import ContactUs from "./components/ContactUs";
import { useEffect } from "react";
import Services from "./components/Nav/Services";
import Prices from "./components/LandingPage/Prices";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/cost_calculator",
    element: <CostCalculator />,
  },
  {
    path: "/why_us",
    element: <WhyUs />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/prices",
    element: <Prices />,
  },
];

export const scrollToSection = (hash) => {
  if (hash) {
    let doc = document.querySelector(hash);
    doc?.scrollIntoView({ behavior: "smooth" });
  }
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {routes.map(({ path, element, index }, key) => (
            <Route index={index} path={path} key={key} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
