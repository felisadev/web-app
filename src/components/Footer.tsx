import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/images/icons8-facebook-96.png';
import omakImg from '../assets/images/omak_logo_04-300x150.png';

const yanapiriDetails = {
  direccion: "Av 6 de Marzo, Calle 8 #550",
  ciudad: "El Alto - Bolivia",
  telefono: "(591) 2826152",
  email: "info@omakbolivia.org"
};

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#006600",
          height: { xs: "20rem", sm: "10rem" },
        }}
        id="footer"
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid container height="100%">
            <Grid
              item
              xs={12}
              height="2rem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end"
              }}
            >
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              height="8rem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: 'center', sm: 'start' }
              }}
            >
              <Box width="300px" height="100px">
                <img
                  width="100%"
                  height="100%"
                  src={omakImg}
                  alt="logo"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              height="8rem"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: 'center', sm: 'end' },
                pr: '1rem'
              }}
            >
              <Typography color="#92bea7" variant="subtitle1" fontSize={"15px"}>
                {yanapiriDetails.direccion}
              </Typography>
              <Typography color="#92bea7" variant="subtitle1" fontSize={"15px"}>
                {yanapiriDetails.ciudad}
              </Typography>
              <Typography color="#92bea7" variant="subtitle1" fontSize={"15px"}>
                {yanapiriDetails.telefono}
              </Typography>
              <Typography color="#92bea7" variant="subtitle1" fontSize={"15px"}>
                {yanapiriDetails.email}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{
        width: "100%",
        backgroundColor: "#003300",
        height: "3rem",
        position: "relative",
        bottom: "0",
        left: "0",
      }}>
        <Container maxWidth="xl">
          <Grid item xs={12} >
            <Box sx={{ float: "right", height: "3rem", display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="logo" loading="lazy" width={"25px"} height={"25px"} />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );

}

export default Footer;
