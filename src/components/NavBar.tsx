import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

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

// This remains only for the subelements portion
const pages = [
  { 'title': 'Inicio', 'path': '/' },
  {
    'title': 'Información',
    'path': '/orientacion',
    'subelements': [
      { 'title': '¿Cómo saber si sufro violencia?', 'path': '/como_saber_si_sufro_violencia' },
      { 'title': '¿Sabías que...?', 'path': '/orientacion-2' },
    ]
  },
];



const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElInfo, setAnchorElInfo] = React.useState<null | HTMLElement>(
    null
  );
  const [isAuth, setIsAuth] = React.useState(false)

  const navigate = useNavigate()

  const verifyUserIsAuthenticated = () => {
    const setAuthenticatedToFalse = () => {
      sessionStorage.clear()
      sessionStorage.setItem('userIsAuthenticated', 'false')
      setIsAuth(false)
    }

    setIsAuth(true)

    const authToken = sessionStorage.getItem("AUTH_TOKEN")
    if (authToken) {
      sessionStorage.setItem('userIsAuthenticated', 'true')
    }
    if (authToken === null) {
      setAuthenticatedToFalse()
      return
    }
    const parsedAuthToken = JSON.parse(authToken)
    const expirationTime = parsedAuthToken["expiresAt"] || null
    if (expirationTime === null) {
      setAuthenticatedToFalse()
      return
    }
    const now = Date.now()
    const expiration = new Date(expirationTime)
    if (now > expiration.getTime()) setAuthenticatedToFalse()
  }

  React.useEffect(() => {
    verifyUserIsAuthenticated()
  }, [])

  const handleOpenInfoMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElInfo(event.currentTarget);
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseInfoMenu = () => {
    setAnchorElInfo(null)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setAnchorElInfo(null);
    } else if (event.key === 'Escape') {
      setAnchorElInfo(null);
    }
  }

  const LogoYanapiri = () => {
    return <Box
      component="a"
      href="/"
      sx={{
        display: 'flex',
        height: '6.5rem',
        marginLeft: '1rem',
      }}
    >
      <img src='omak_logo_04-300x150.png' alt="logo" loading="lazy" />
    </Box>
  }

  const renderFragment = (title: any, path: any) => {
    return <React.Fragment key={title}>
      <Button
        onClick={() => { if (title !== "Admin") navigate(path) }}
        onMouseEnter={
          title === 'Información' ? handleOpenInfoMenu : undefined
        }
        color="inherit"
        sx={{
          my: 2,
          color: 'white',
          display: 'block',
          textTransform: 'none',
        }}
      >
        {title}
      </Button>
      <Popper
        open={Boolean(anchorElInfo)}
        anchorEl={anchorElInfo}
        onMouseLeave={handleCloseInfoMenu}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseInfoMenu}>
                <MenuList
                  autoFocusItem={Boolean(anchorElInfo)}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {pages[1].subelements?.map(({ title, path }) => {
                    return (
                      <MenuItem
                        key={title}
                        onClick={() => {
                          if (title !== "Admin") {
                            navigate(path)
                          }
                        }}
                      >
                        {title}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  }
  const shouldRenderLogin = () => {
    if (sessionStorage.getItem("userIsAuthenticated") === "false") return true
    return false
  }
  const shouldRenderAdmin = () => {
    return sessionStorage.getItem("userIsAuthenticated") === "true"
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          paddingX: { xs: 0, md: '3rem' }
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Toolbar disableGutters sx={{ height: "100%" }}>
            <LogoYanapiri />
            <Box
              sx={{
                height: "100%",
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {renderFragment("Inicio", "/")}
              {renderFragment("Información sobre violencia", "/orientacion")}
              {renderFragment("¿Dónde acudo si sufro violencia?", "/lugares-violencia")}
              {renderFragment("Consejos de Seguridad", "/consejos")}
              {/* <a href="http://3.141.35.112:8000/admin" target="_blank" rel="noopener noreferrer" >
                <div>Admin</div>
                {/* {renderFragment("Admin", "/login")} */}
              {/* </a> */}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <IconButton
                size="large"
                aria-label="menu-bar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

                <MenuItem key={"inicio-1"} onClick={
                  () => {
                    navigate("/")
                    handleCloseNavMenu()
                  }
                }>
                  <Typography textAlign="center">{"Inicio"}</Typography>
                </MenuItem>
                <MenuItem key={"Información"} onClick={() => {
                  navigate("/orientacion")
                  handleCloseNavMenu()
                }}>
                  <Typography textAlign="center">{"Información sobre violencia"}</Typography>
                </MenuItem>
                <MenuItem key={"lugar-violencia"} onClick={() => {
                  navigate("/lugares-violencia")
                  handleCloseNavMenu()
                }}>
                  <Typography textAlign="center">{"¿Dónde acudo si sufro violencia?"}</Typography>
                </MenuItem>
                <MenuItem key={"Información"} onClick={() => {
                  navigate("/consejos")
                  handleCloseNavMenu()
                }}>
                  <Typography textAlign="center">{"Consejos de Seguridad"}</Typography>
                </MenuItem>

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider >
  );
};

export default NavBar;
