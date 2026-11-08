import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/dareshwar-kitchen', label: 'Dareshwar Kitchen' },
    { path: '/lic-services', label: 'LIC Services' },
    { path: '/star-health', label: 'Star Health' },
    { path: '/reviews', label: 'Reviews' },
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
            borderRadius: 2,
            mx: 1,
            transition: 'all 0.3s ease',
            '&.Mui-selected': {
              background: 'var(--trust-100)',
              color: 'primary.main',
              '&:hover': {
                background: 'var(--trust-100)',
              },
            },
          }}
        >
          <ListItemText
            primary={route.label}
            sx={{
              color: location.pathname === route.path ? 'primary.main' : 'text.primary',
              fontWeight: location.pathname === route.path ? 600 : 500,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '1px solid rgba(255, 255, 255, 0.2)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
            : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
                      <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/assets/1000174754.png"
              alt="Laxmi Dodamani"
              style={{
                height: '60px',
                cursor: 'pointer',
                objectFit: 'contain',
                marginRight: '20px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
              onClick={() => handleNavigation('/')}
              whileHover={{ 
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

            {isMobile ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 2,
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', gap: '16px' }}>
                {routes.map((route, index) => (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleNavigation(route.path)}
                      sx={{
                        color: location.pathname === route.path ? 'primary.main' : 'text.primary',
                        position: 'relative',
                        fontWeight: location.pathname === route.path ? 600 : 500,
                        fontSize: '1rem',
                        px: 3,
                        py: 1.5,
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        background: location.pathname === route.path 
                          ? 'var(--trust-100)'
                          : 'transparent',
                        backdropFilter: 'blur(10px)',
                        border: location.pathname === route.path 
                          ? '1px solid rgba(59, 130, 246, 0.2)'
                          : '1px solid transparent',
                        '&:hover': {
                          background: 'var(--trust-100)',
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: location.pathname === route.path ? '100%' : '0%',
                          height: '2px',
                          bottom: 0,
                          left: 0,
                          background: 'var(--trust-500)',
                          transition: 'width 0.3s ease-in-out',
                          borderRadius: '1px',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {route.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </Toolbar>
        </Container>

        <AnimatePresence>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
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
                    width: 280,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    pt: 2,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                  }
                }}
              >
                {drawer}
              </Drawer>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>
    </motion.div>
  );
};

export default Navbar; 