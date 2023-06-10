import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import Logo from '../assets/Logo.png';

const Nav = ({ userName }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const initial = userName?.charAt(0).toUpperCase();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>

      <AppBar
        position="static"
        sx={{
          backgroundColor: '#54BAB9', border: 'none', width: '100%',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={Logo} alt="logo" />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
              />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
            <Box sx={{ flexGrow: 0 }}>
              {userName && (

                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">{initial}</span>
                </div>
              )}
            </Box>
            <Box sx={{ ml: 4 }}>
              {
                userName && (
                  <Form
                    method="post"
                    action="/logout"
                    onSubmit={(event) => {
                      // eslint-disable-next-line
                      if (!confirm('Delete user and all data?')) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <Button type="submit" variant="outlined" startIcon={<DeleteIcon />} style={{ backgroundColor: '#54BAB9', color: '#ffffff' }}>
                      Delete User
                    </Button>
                  </Form>
                )
              }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};
Nav.propTypes = {
  userName: PropTypes.string,
};
Nav.defaultProps = {
  userName: 'default string',
};
export default Nav;
