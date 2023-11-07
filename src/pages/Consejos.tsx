import { Box, Button, Card, CardContent, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LineDivider from "../components/LineDivider";
import React from "react";

const CardData = (title: string, paragrah: string) => {
  const summary_ex = paragrah.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  return { title: title, summary: summary_ex };
};

const a1 = CardData(
  "Si te encuentras en situación de violencia, no olvides tener a mano lo siguiente:",
  `
          · Tu carnet de identidad y certificados de nacimiento de tus hijos/as
          · Croquis del domicilio
          · Documentos de propiedad del domicilio 
          · Documentos de cuentas bancarias 
          · Dinero en efectivo.`
);

const a2 = CardData(
  "Si has puesto denuncia y tener contacto con el agresor es un peligro:",
  `
         · Cambia de número de celular
         · Bloquea al agresor de tus redes sociales.
         `
);

const a3 = CardData(
  "Si acabas de sufrir violencia:",
  `· Comunícate con alguien de confianza que pueda apoyarte
  · Intenta hacer denuncia inmediata, llamando al 110 o a la FELCV o ir a la fiscalía a hacer tu denuncia (tener a mano los números de teléfono)`
);

const a4 = CardData(
  "Si acabas de sufrir violencia sexual, recuerda:",
  `· No te bañes ninguna parte de tu cuerpo, ni las manos.
  · No te cambies de ropa.
  · Acude lo antes posible a la FELCV o Fiscalía para la valoración correspondiente
  · Busca apoyo en alguien de confianza para que te acompañe
  · Consulta sobre las opciones para evitar un embarazo no deseado
`
);

const a5 = CardData(
  "Es recomendable que puedas grabar audios o sacar fotografías de una situación de violencia, como pruebas para un futuro proceso",
  ""
);

const a6 = CardData(
  "No dejes solos a tus hijos/as, pide el apoyo de una familiar o amiga para cuidarlos.",
  ""
);
const a7 = CardData(
  "Si la familia de tu agresor te amenaza, golpea o insulta debes avisar a las autoridades que atienden tu caso.",
  ""
);
const a8 = CardData(
  "Tener un grupo de amigas/os o familiares de confianza puede ayudar a prevenir una situación de violencia, ya que en ocasiones es difícil para la víctima darse cuenta que está sufriendo violencia. Las/os amigas/os y/o familiares pueden notar tus cambios de comportamiento y podrán alertarte a tiempo de la situación de violencia en la que te encuentras.",
  ""
);
const a9 = CardData(
  "Las mujeres víctimas de violencia tienen características muy diferentes y pueden ser desde tus compañeras de trabajo hasta miembros de tu propia familia. No debemos esperar a que las personas encajen en nuestra idea de cómo se ve una víctima para escuchar y ayudar.",
  ""
);
const a10 = CardData(
  "Hay profesionales que te ayudarán a salir a ti y a tu familia de una situación de violencia. Durante el ciclo de violencia las fortalezas de la mujer se debilitan, por esto es necesario trabajar en la resiliencia personal, que significa destacar y potenciar las propias capacidades de afrontar la situación y superarla.",
  ""
);

const information = [a3, a2, a1, a4, a5, a6, a9, a10, a8, a7];

const colors = ["#E6D6F9", "#EBF1C7", "#D3EBC9"];

const Consejos = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="lg" sx={{ paddingX: { xs: "2rem", md: "5rem" } }}>
        <Grid
          container
          sx={{ paddingY: { xs: "3rem", md: "5rem" } }}
          alignContent="center"
        >
          <Typography component="h1" variant="h3" fontWeight="bold">
            {"Consejos de seguridad"}
          </Typography>
        </Grid>
        <Grid container direction="column">
          <Grid item width="240px" alignContent="center"></Grid>
          <Box
            marginTop={""}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="felisa_walking_gimp.png"
              style={{ width: "50%", margin: "auto" }}
            />
          </Box>
          <Grid
            container
            item
            xs={12}
            sm
            gap="1rem"
            paddingLeft={{ xs: "0rem", md: "2rem" }}
          >
            <Grid item key={`parr-or-1`}>
              <Typography component="p" variant="body1">
                {`Muchas veces tenemos miedo de pedir consejos a nuestras amigas y/o familiares por vergüenza o porque pensamos en el "qué dirán", "cómo me verán", "qué hablarán de mí". En este espacio te invito a que leas los consejos de seguridad en caso de que te encuentras en una situación de violencia. Recuerda que mi misión es ayudarte a tener una vida plena y que vivas libre de violencia.`}
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <LineDivider margin="3rem auto 0" />
            <Grid container>
              {information.map((card, index) => {
                return (
                  <Grid item key={`home-info-${index}`} xs={12} sm={6} lg={4}>
                    <Card
                      sx={{
                        margin: "20px",
                        bgcolor: colors[index % 3],
                        borderRadius: "7%",
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardContent>
                        <Stack spacing={1}>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            textAlign="start"
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

export default Consejos;
