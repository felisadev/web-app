import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { violenciaInfo } from '../common/const';

const { title, section } = violenciaInfo;

const Violencia = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingX: { xs: '2rem', md: '5rem' } }}>
      <Grid container height={{xs: '192px', md: "368px"}} alignContent="center">
        <Typography component="h1" variant='h4' fontWeight='bold'>
          {title}
        </Typography>
      </Grid>
      <Grid container direction="row">
        <Grid container item xs={12} sm={5} gap="1rem">
          {section.summary.map((paragraph, index) => {
            return (
              <Grid item key={`orientacion-${index}`}>
                <Typography
                  component="p"
                  variant="body1"
                  fontWeight={index === 1 ? 'bold' : 'regular'}
                >
                  {paragraph}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={7} sx={{ backgroundColor: '#BDDFE1' }}>Encuesta</Grid>
      </Grid>
    </Container>
  );
};

export default Violencia;
