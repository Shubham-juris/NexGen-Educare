import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  InputBase,
  Drawer,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../assets/LogoImages/logo.png';

// Global Link Style
const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'red',
});

const Search = styled('div')({
  position: 'relative',
  borderRadius: '4px',
  backgroundColor: '#f1f1f1',
  marginLeft: '16px',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  alignItems: 'center',
});

const SearchIconWrapper = styled('div')({
  position: 'absolute',
  pointerEvents: 'none',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
});

const Input = styled(InputBase)({
  paddingLeft: '30px',
  width: '100%',
});

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  return (
    <Box sx={{ overflowY: 'hidden' }}>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(1500px)',
          color: 'red',
          overflowX: 'hidden',
        }}
        data-aos='fade-down'
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '1200px',
              width: '100%',
            }}
          >
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <StyledLink to='/'>
                <img
                  src={Logo}
                  alt='Logo'
                  style={{ height: '40px', width: 'auto', cursor: 'pointer' }}
                />
              </StyledLink>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 6,
                  marginLeft: '160px',
                }}
              >
                {['Courses', 'About Us', 'Contact Us'].map((text) => (
                  <Button
                    key={text}
                    sx={{
                      position: 'relative',
                      color: 'red',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '4px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'red',
                        transform: 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover:after': {
                        transform: 'scaleX(1)',
                      },
                    }}
                    component={StyledLink}
                    to={`/${text.replace(' ', '').toLowerCase()}`}
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '16px',
              }}
            >
              {searchBarOpen ? (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <Input
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <IconButton color='inherit' onClick={toggleSearchBar}>
                    <CloseIcon />
                  </IconButton>
                </Search>
              ) : (
                <IconButton color='inherit' onClick={toggleSearchBar}>
                  <SearchIcon />
                </IconButton>
              )}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button sx={{ color: 'red' }} component={StyledLink} to='/login'>
                Login
              </Button>
              <Button sx={{ color: 'red' }} component={StyledLink} to='/signup'>
                Sign Up
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color='inherit'
                onClick={handleMobileMenuToggle}
                aria-label='menu'
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>

        <Drawer
          anchor='right'
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
          sx={{
            '& .MuiDrawer-paper': {
              width: '250px',
              padding: '16px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>Menu</Typography>
            <IconButton onClick={closeMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Courses', 'About Us', 'Contact Us'].map((text) => (
              <Button
                key={text}
                onClick={closeMobileMenu}
                component={StyledLink}
                to={`/${text.replace(' ', '').toLowerCase()}`}
              >
                {text}
              </Button>
            ))}
            <Button
              sx={{ color: 'red' }}
              onClick={closeMobileMenu}
              component={StyledLink}
              to='/login'
            >
              Login
            </Button>
            <Button
              sx={{ color: 'red' }}
              onClick={closeMobileMenu}
              component={StyledLink}
              to='/signup'
            >
              Sign Up
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
