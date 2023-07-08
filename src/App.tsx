import './App.css';
import NavBar from './components/NavBar';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import LogIn from './pages/LogIn';
import Footer from './components/Footer';
import Orientacion from './pages/Orientacion';
import Violencia from './pages/Violencia';
import Lugares from './pages/Lugares';
import LugaresViolencia from './components/LugaresViolencia';
import Home from './pages/Home';
import Consejos from './pages/Consejos';
import NotFound from './pages/NotFound';
import { Box, Fab, SvgIcon } from '@mui/material';
import { Icecream } from "@mui/icons-material";
import { ReactComponent as WhatsappLogo } from '../src/assets/whatsapp.svg';



const Layout = () => {
  const onWhatsapp = () => {
    window.open('https://wa.me/64034500', '_blank', 'noreferrer');
  }
  return (
    <>
      <NavBar />
      <Box
        paddingTop="4rem"
        minHeight={{
          xs: "calc(100vh - 4rem - 20rem - 3rem)",
          sm: "calc(100vh - 4rem - 10rem - 3rem)"
        }}
        id="main-box"
      // position="relative"
      >
        <Outlet />
        <Fab style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem'
        }} onClick={onWhatsapp}>
          <img src="WhatsApp.png" style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }} />
          {/* <WhatsappLogo /> */}
        </Fab>
      </Box>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orientacion",
        element: <Orientacion />,
      },
      {
        path: "/como_saber_si_sufro_violencia",
        element: <Violencia />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/consejos",
        element: <Consejos />
      },
      {
        path: "/lugares-violencia",
        element: <LugaresViolencia />
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

