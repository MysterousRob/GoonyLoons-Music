import * as React from "react";
import * as ReactDOM from "react-dom/client";
// my main page imports
import App from './App.jsx';
import MySongs from "./Pages/MySongs/MySongs.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import SongManager from "./Pages/MySongs/SongManager/SongManager.jsx";
//css imports
import './assets/Css/General.css'
//router imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "../reportWebVitals.js";


const ErrorPage = () => {
  return (
    <h1 className="text-black text-[100px]">
      Oops! Something went wrong!!!!!!
    </h1>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-songs", 
    element: <MySongs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-me", 
    element: <AboutMe />,
    errorElement: <ErrorPage />                                                                                                               
  },
  {
    path: "/song-manager",
    element: <SongManager />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);