import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { AppLayout } from "./components/layouts/AppLayout";
import { Errorpage } from "./components/UI/Errorpage";
import {Home} from "./pages/Home";
import About from "./pages/About";
import {Country} from "./pages/Country";
import {Contact} from "./pages/Contact";
import { CountryDetails } from "./components/layouts/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <Errorpage />,
    children:[
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/country",
    element: <Country />,
  },
  {
    path: "/country/:id",  //dynami route hit hoga
    element: <CountryDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]}]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
