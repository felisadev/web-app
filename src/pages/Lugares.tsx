import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import {
  locationCardInfo,
  lugaresInfo,
  notAuthModalInfo,
} from '../common/const';
import LocationCard from '../components/LocationCard';
import NotAuthModal from '../components/NotAuthModal';

const Lugares = () => {
  const token = localStorage.getItem('token');
  const fechaExp = localStorage.getItem('fechaExp');
  const { redirect, title, description, button } = notAuthModalInfo;
  const { img, name, address, map, phones } = locationCardInfo;
  const isAuthenticated = !token && !fechaExp;

  return (
    <>
      {isAuthenticated ? (
        <NotAuthModal
          redirect={redirect}
          title={title}
          description={description}
          button={button}
        />
      ) : (
        <Container maxWidth="lg" sx={{ paddingX: { xs: '2rem', md: '5rem' } }}>
          <Grid container height={{xs: '192px', md: "368px"}} alignContent="center">
            <Typography component="h1" variant="h4" fontWeight="bold">
              {lugaresInfo.title}
            </Typography>
          </Grid>
          <Grid container direction="row" spacing={4} justifyContent="center">
            <Grid item>
              <LocationCard
                img={img}
                name={name}
                address={address}
                map={map}
                phones={phones}
              />
            </Grid>
            <Grid item>
              <LocationCard
                img={img}
                name={name}
                address={address}
                map={map}
                phones={phones}
              />
            </Grid>
            <Grid item>
              <LocationCard
                img={img}
                name={name}
                address={address}
                map={map}
                phones={phones}
              />
            </Grid>
            <Grid item>
              <LocationCard
                img={img}
                name={name}
                address={address}
                map={map}
                phones={phones}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Lugares;
