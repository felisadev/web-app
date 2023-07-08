import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { homeInfo } from '../common/const';
import HomeBanner from '../components/HomeBanner';
import InfoCard from '../components/InfoCard';
import LineDivider from '../components/LineDivider';
import ParagraphWithBold from '../components/ParagraphWithBold';

const CardsContainer = () => {
  return (
    <Grid container>
      {homeInfo.cards.map((card, index) => {
        return (
          <Grid item key={`home-info-${index}`} xs={12} sm={6} lg={4}>
            <InfoCard title={card.title} icon={card.imgUrl}>
              {card.summary}
            </InfoCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

const FelisaSection = () => {
  return (
    <Box marginY="4rem">
      <Typography
        component="h2"
        variant="h4"
        fontWeight="bold"
        marginY="2rem"
        textAlign="center"
      >
        {homeInfo.sections[0].title}
        <LineDivider margin="1rem auto 0" />
      </Typography>
      <Box margin="2rem" sx={{ columns: { xs: '1', md: '2' } }}>
        {homeInfo.sections[0].summary.map((paragraph, index) => {
          return (
            <ParagraphWithBold
              key={`info-section-${index}`}
              text={paragraph}
              boldColor="#349800"
              textToBold="de manera gratuita"
              component="p"
              variant="body1"
              color="text.secondary"
              gutterBottom
            />
          );
        })}
      </Box>
    </Box>
  );
};

const InfoSection = () => {
  return (
    <Box marginY="6rem" textAlign="center">
      <Typography component="h2" variant="h4" fontWeight="bold">
        {"¿Qué encontrarás en este sitio web?"}
      </Typography>
      <LineDivider margin="1rem auto 0" />
      <Typography
        component="p"
        variant="h5"
        color="text.secondary"
        margin="2rem"
      >
        {"¡Podemos vivir sin violencia!"}
      </Typography>
      <CardsContainer />
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Container
        maxWidth="lg"
        sx={{ paddingX: { xs: '2rem', md: '5rem' }, paddingY: '2rem' }}
      >
        <FelisaSection />
        <InfoSection />
        <Box marginY="6rem" textAlign="center">
          {/* <Typography component="h2" variant="h4" fontWeight="bold">
            {"Con el apoyo de:"}
          </Typography>
          <LineDivider margin="1rem auto 0" /> */}
          <Typography
            component="p"
            variant="h5"
            color="text.secondary"
            margin="2rem"
          >
            {/* {"¡Podemos vivir sin violencia!"} */}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
