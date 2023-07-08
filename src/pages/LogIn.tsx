import React, { ChangeEvent, useState } from 'react';
import { Alert, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#349800',
      darker: '#297500',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const baseURL = "http://3.141.35.112:8000"
const usersURL = `${baseURL}/api/v1/users`
const apiTokenURL = `${usersURL}/token/`

const LogIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [pwd, setPwd] = useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post(apiTokenURL, {
      username: username,
      password: pwd,
    }
    )
      .then((res) => {
        if (res.status === 401) {
          setError("No se encontro una cuenta con dichas credenciales.");
        } else if (res.status === 200) {
          const now = Date.now()
          const expireAfterMin = 1
          const expiration = new Date(now + expireAfterMin * 60000);

          const sessionObject = {
            expiresAt: expiration,
            token: res.data["access"]
          }
          sessionStorage.setItem("AUTH_TOKEN", JSON.stringify(sessionObject))
          sessionStorage.setItem("userIsAuthenticated", 'true')
          navigate("/")
        } else {
          setError("Servidor no disponible.")
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setError("No se encontro una cuenta con dichas credenciales.");
        } else {
          setError("Servidor no disponible.")
        }
      });
  };

  const handleOnFocus = (e: any) => {
    if (error !== "") {
      setError("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: '8em',
            marginBottom: '8em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Bienvenido
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoFocus
              onFocus={handleOnFocus}
              value={username}
              onChange={handleUsernameChange}
            />
            <FormControl sx={{ marginTop: '1rem' }} variant="outlined" fullWidth required id="password">
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>

              <OutlinedInput
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                value={pwd}
                onChange={handlePwdChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            {error && <Alert severity='error'>{`${error}`}</Alert>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LogIn;
