import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const RemoveMyInfo = () => {
  const [uniqueID, setUniqueID] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const API_URL = process.env.API_URL;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSuccessMessage(
      "Si tenemos tus datos en nuestra base de datos, nos encargaremos de removerlos. ¡Gracias por confiar en Felisa!"
    );

    try {
      const response = await fetch(
        `https://api.omakbolivia.org/api/v1/users/delete-my-information/${uniqueID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
      } else {
        // Handle errors, e.g., show an error message
      }
    } catch (error) {
      // Handle unexpected errors
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Eliminar Datos</h2>
        <p>
          Introduce tu ID único proporcionado por la app de Felisa para eliminar
          tus datos de nuestros servidores. Aún podrás usar la app móvil sin
          problemas.
        </p>
        <Box component="form" onSubmit={handleSubmit} width="100%" mt={1}>
          {!successMessage ? (
            <>
              <TextField
                label="ID provisto por la applicación Felisa"
                variant="outlined"
                fullWidth
                margin="normal"
                value={uniqueID}
                onChange={(e) => setUniqueID(e.target.value)}
              />
              <Button type="submit" fullWidth>
                Eliminar
              </Button>
            </>
          ) : (
            <p>{successMessage}</p>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default RemoveMyInfo;
