import { Box, Button, Card, CardContent, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { orientacionInfo } from '../common/const';
import InfoCard from '../components/InfoCard';
import LineDivider from '../components/LineDivider';
import React from 'react';

const { title, summary } = orientacionInfo;
const content1 = "La Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia N° 348 es un logro de las organizaciones y movimientos de mujeres de todo el país que durante seis años trabajaron para que el Estado Boliviano promulgue la Ley. A partir de la misma, se reconoce el feminicidio como delito penal sin derecho a indulto y con 30 años de privación de libertad. También reconoce otros tipos de violencia, si quieres conocerlos:"

const content2 = "Las autoridades y servidores públicos de todos los Órganos, Instituciones Públicas, Entidades Territoriales Autónomas (gobernaciones, alcaldías) y la sociedad tienen la obligación de hacer cumplir la Ley 348 bajo responsabilidad penal, civil y administrativa, según lo señala el Artículo 5 de la Ley Integral para Garantizar a las Mujeres un Vida Libre de Violencia."

const content3 = `
    Las promotoras comunitarias están amparadas en el artículo 29 de la Ley 348, y pueden ayudar en situaciones de violencia, sus funciones son:
      
    · Prevención con información, sensibilización y capacitación
    · Identificación de casos de violencia
    · Contención y orientación
    · Acompañamiento en la denuncia
    · Seguimiento e incidencia
`
const displayString = content3.split('\n').map((text, index) => (
  <React.Fragment key={index}>
    {text}
    <br />
  </React.Fragment>
));
const content4 = "A pesar de que estés casada o convivas con tu pareja, si te obliga a tener relaciones sexuales se  considera que esta acción forzada o sin tu consentimiento es violación o violencia sexual y está reconocida en la Ley 348 y  en el Código Penal de nuestro país."

const content5 = "En Bolivia 7 de cada 10 mujeres sufre algún tipo de violencia en algún momento de su vida."

const content6 = "El asesinato de la ex concejala Juana Quispe Apaza del Municipio de Ancoraimes, impulsó el tratamiento y la promulgación de la Ley N° 243, Contra el Acoso y la Violencia Política hacia las mujeres, norma que establece mecanismos de prevención, atención, sanción contra actos individuales o colectivos de acoso y/o violencia política hacia las mujeres para garantizar el ejercicio pleno de sus derechos políticos."
const content7 = "La violencia contra las mujeres se diferencia en las realidades que vivimos, y se entrecruza con diversas discriminaciones y violencias (económicas, geográficas, étnicas, sociales, generacionales, a personas con discapacidad, identidad sexual genérica)"
const content8 = "Las comunidades indígenas y campesinas en Bolivia están obligadas a cumplir la Ley 348, que en el Art. 18 prohíbe que las normas y procedimientos propios de las comunidades vulneren los derechos reconocidos en la Constitución. Las autoridades de las comunidades deben adoptar medidas para proteger a las mujeres en situación de violencia, con participación de las mujeres en cargos de autoridad. Además, cualquier conciliación respecto a la violencia contra niños, niñas, adolescentes y mujeres es ilegal según la Ley de Deslinde Jurisdiccional. Cualquier autoridad originaria tiene 24 horas para informar a la justicia ordinaria si existe algún caso de violación, violencia sexual o feminicidio en su comunidad, y estas violaciones a los derechos no pueden ser tratadas con la justicia comunitaria"
const content9 = "Si estás experimentando una situación de violencia, es importante buscar ayuda y apoyo. En Bolivia, puedes denunciar la violencia en el Servicio Legal Integral Municipal (SLIM) de tu municipio. Además, existen otros recursos disponibles, como líneas de ayuda y refugios para mujeres en situación de violencia. Es importante recordar que denunciar es un derecho y una responsabilidad social para prevenir y combatir la violencia de género."


const information = [
  { "title": "¿Sabías qué?", "summary": content1 },
  { "title": "¿Sabías qué?", "summary": content2 },
  { "title": "¿Sabías qué?", "summary": displayString },
  { "title": "¿Sabías qué?", "summary": content4 },
  { "title": "¿Sabías qué?", "summary": content6 },
  { "title": "¿Sabías qué?", "summary": content9 },
  { "title": "¿Sabías qué?", "summary": content7 },
  { "title": "¿Sabías qué?", "summary": content5 },
  { "title": "¿Sabías qué?", "summary": content8 },

]

const colors = ["#E6D6F9", "#EBF1C7", "#D3EBC9"]


const Orientacion = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="lg" sx={{ paddingX: { xs: '2rem', md: '5rem' } }}>
        <Grid container sx={{ paddingY: { xs: '3rem', md: '5rem' } }} alignContent="center">
          <Typography component="h1" variant='h3' fontWeight='bold'>
            {"Información sobre violencia"}
          </Typography>
        </Grid>
        <Grid container direction="column">

          <Box
            marginTop={""}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src="celu.png" style={{ width: '25%', margin: 'auto' }} />
          </Box>
          <Grid container item xs={12} sm gap="1rem" paddingLeft={{ xs: '0rem', md: '2rem' }}>
            <Grid item key={`parr-or-1`}>
              <Typography component="p" variant="body1">
                {"En este espacio, encontrarás información, datos y consejos que te orientarán sobre la violencia hacia las mujeres. Si crees que sufres violencia no dudes en contactarte conmigo, no olvides que juntas saldremos adelante."}
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}
          >

            <LineDivider margin="3rem auto 0" />
            <Grid container>

              {information.map((card, index) => {
                return (
                  <Grid item key={`home-info-${index}`} xs={12} sm={6} lg={4}>
                    <Card sx={{
                      margin: "20px", bgcolor: colors[index % 3],
                      borderRadius: '7%',
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }} raised={true}>
                      <CardContent>
                        <Stack spacing={1}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            fontWeight="bold"
                            textAlign="start"
                          // fontFamily={"revert"}
                          >
                            {card.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            color="text.secondary"
                            textAlign="justify"
                          >
                            {card.summary}
                          </Typography>

                          {typeof card.summary == "string" && card.summary.startsWith("La Ley Integral para Garantizar") &&
                            <a
                              href="https://drive.google.com/file/d/1txEHqDyiikNkm9lce6QxyKw5eooZnmMb/view?usp=sharing"
                              target="_blank"
                              style={{ fontFamily: 'arial, sans-serif' }}
                            >
                              Haz Click Aqui
                            </a>
                          }
                        </Stack>

                      </CardContent>

                    </Card>
                  </Grid>
                );
              })}

            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Orientacion;
