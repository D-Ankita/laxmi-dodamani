import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const routes = [
    { path: '/', label: 'About Me' },
    { path: '/dareshwar-kitchen', label: 'Dareshwar Kitchen' },
    { path: '/lic-services', label: 'LIC Services' },
    { path: '/star-health', label: 'Star Health' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <List>
      {routes.map((route) => (
        <ListItem
          button
          key={route.path}
          onClick={() => handleNavigation(route.path)}
          selected={location.pathname === route.path}
          sx={{
            my: 1,
            borderRadius: 1,
            mx: 1,
            '&.Mui-selected': {
              backgroundColor: 'primary.light',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            },
          }}
        >
          <ListItemText
            primary={route.label}
            sx={{
              color: location.pathname === route.path ? 'primary.main' : 'text.primary',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
          <motion.img
            src="/assets/1000174754.png"
            alt="Laxmi Dodamani"
            style={{
              height: '60px',
              cursor: 'pointer',
              objectFit: 'contain',
              marginRight: '20px'
            }}
            onClick={() => handleNavigation('/')}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {routes.map((route) => (
                <Button
                  key={route.path}
                  onClick={() => handleNavigation(route.path)}
                  sx={{
                    color: location.pathname === route.path ? 'primary.main' : 'text.primary',
                    position: 'relative',
                    fontWeight: 500,
                    fontSize: '1rem',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: location.pathname === route.path ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {route.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <AnimatePresence>
        {isMobile && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 240,
                backgroundColor: 'background.paper',
                pt: 2,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar; 