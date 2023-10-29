import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { homeInfo } from "../common/const";
import { Card, Typography } from "@mui/material";
import { InfoRounded, Map, Security, Call } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <Box
      height={{
        xs: "calc(100vh - 3.6rem)",
        sm: "320px",
        md: "448px",
        lg: "512px",
      }}
      sx={{ backgroundColor: "#E7E7E7" }}
    >
      <Container
        sx={{ position: "relative", height: "inherit", overflow: "hidden" }}
      >
        <Box
          height={{ xs: "90%", sm: "145%" }}
          position="absolute"
          right={{ xs: "-24px", sm: "35%" }}
          zIndex={0}
        >
          <img
            height="100%"
            width="100%"
            src={homeInfo.banner.imagesUrl[0]}
            alt="Felisa"
          />
        </Box>
        {/* The rest after the image */}
        <div>
          <Box
            height={{ xs: "0%", sm: "45%" }}
            width={"25%"}
            position="absolute"
            top={{ xs: "37%", sm: "25%" }}
            left={{ xs: "3%", sm: "4%" }}
            zIndex={5}
          >
            <Link to="/orientacion" style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: "75%",
                  width: "100%",
                  borderRadius: "40px", // set the border radius
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#6d47d3",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <InfoRounded style={{ marginTop: "15px" }} />
                  <Typography
                    margin={"15px"}
                    component="h1"
                    variant="h6"
                    align="center"
                  >
                    Información sobre violencia
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
          <Box
            height={{ xs: "0%", sm: "45%" }}
            position="absolute"
            left={{ xs: "3%", sm: "65%" }}
            top={{ xs: "70%", sm: "25%" }}
            zIndex={4}
          >
            <Link to="/lugares-violencia" style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: "75%",
                  width: "100%",
                  borderRadius: "40px", // set the border radius
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#319b2b",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <LocationOn style={{ marginTop: "15px" }} />
                  <Typography
                    margin={"15px"}
                    component="h1"
                    variant="h6"
                    align="center"
                  >
                    ¿Dónde acudo si sufro violencia?
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
          <Box
            height={{ xs: "0%", sm: "38%" }}
            width={"25%"}
            position="absolute"
            left={{ xs: "52%", sm: "65%" }}
            top={{ xs: "75%", sm: "65%" }}
            zIndex={1}
          >
            <Card
              sx={{
                height: "75%",
                width: "100%",
                borderRadius: "40px", // set the border radius
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => {
                window.open("https://wa.me/64034500", "_blank", "noreferrer");
              }}
            >
              <Box
                sx={{
                  bgcolor: "#0095de",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Call style={{ marginTop: "15px" }} />
                <Typography
                  margin={"15px"}
                  component="h1"
                  variant="h6"
                  align="center"
                >
                  Hablar con alguien
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box
            height={{ xs: "0%", sm: "44%" }}
            width={"25%"}
            position="absolute"
            left={{ xs: "2%", sm: "4%" }}
            top={{ xs: "54%", sm: "65%" }}
            zIndex={3}
          >
            <Link to="/consejos" style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: "75%",
                  width: "100%",
                  borderRadius: "40px", // set the border radius
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#9eb632",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Security style={{ marginTop: "15px" }} />
                  <Typography
                    margin={"15px"}
                    component="h1"
                    variant="h6"
                    align="center"
                  >
                    Consejos de Seguridad
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default HomeBanner;
