import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, useTheme, useMediaQuery } from '@mui/material';
import { Phone, Email, LocationOn, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    { title: 'LIC Services', items: ['Policy Consultation', 'Claim Settlement', 'Policy Renewal', 'Maturity Handling'] },
    { title: 'Star Health', items: ['Health Insurance', 'Cashless Claims', 'Policy Support', 'Hospital Network'] },
    { title: 'Dareshwar Kitchen', items: ['Traditional Ladoos', 'Festival Specials', 'Bulk Orders', 'Custom Orders'] },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.08)',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone color="primary" sx={{ mr: 1 }} />
                <Link href="tel:contact" color="text.secondary" underline="hover">
                  Contact for Phone Number
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WhatsApp color="primary" sx={{ mr: 1 }} />
                <Link href="https://wa.me/contact" color="text.secondary" underline="hover">
                  WhatsApp Chat
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email color="primary" sx={{ mr: 1 }} />
                <Link href="mailto:contact@example.com" color="text.secondary" underline="hover">
                  contact@example.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 1, mt: 0.3 }} />
                <Typography variant="body" color="text.secondary" sx={{ mr: 1, mt: 0.3 }} >
                  Vijayapura, Karnataka, India
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={2.5} key={index}>
              <Typography variant="h6" color="primary" gutterBottom>
                {service.title}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {service.items.map((item, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      '&:hover': {
                        color: 'primary.main',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mt: 4, mb: 3 }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Laxmi Dodamani. All rights reserved.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            mt: isMobile ? 2 : 0 
          }}>
            <Link href="/privacy-policy" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 