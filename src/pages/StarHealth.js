import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const StarHealth = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Star Health Insurance Services",
    "description": "Comprehensive health insurance solutions including claim settlement, policy renewal, and cashless hospital process",
    "provider": {
      "@type": "Person",
      "name": "Laxmi Dodamani",
      "telephone": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belgaum",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Belgaum"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Star Health Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    {
      title: 'Claim Settlement',
      description: 'Expert assistance in processing health insurance claims with maximum efficiency.',
      icon: '🏥'
    },
    {
      title: 'Policy Renewal',
      description: 'Timely renewal support to ensure uninterrupted health coverage.',
      icon: '📅'
    },
    {
      title: 'Cashless Hospital Process',
      description: 'Smooth coordination with network hospitals for hassle-free treatment.',
      icon: '💳'
    }
  ];

  const benefits = [
    'Wide network of hospitals',
    'No claim bonus benefits',
    'Tax benefits under Section 80D',
    'Coverage for pre-existing diseases',
    'Day care procedures covered',
    'Lifelong renewability'
  ];

  return (
    <>
      <SEO 
        title="Star Health Insurance - Comprehensive Health Coverage"
        description="Get expert Star Health insurance services in Belgaum. Comprehensive health coverage, cashless hospital process, claim settlement, and policy renewal. Protect your family's health."
        keywords="Star Health insurance, health coverage, cashless hospital, claim settlement, policy renewal, Belgaum health insurance"
        url="/star-health"
        structuredData={structuredData}
      />
      <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: 3,
              mb: 4 
            }}>
              <motion.img
                src="/assets/Star_Health.png"
                alt="Star Health Logo"
                style={{
                  height: '70px',
                  objectFit: 'contain'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Box>
                <Typography variant="h2" color="primary" gutterBottom>
                  Star Health Insurance
                </Typography>
                <Typography variant="h5" color="text.secondary" >
                  Comprehensive Health Coverage Solutions
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Protect yourself and your family with comprehensive health insurance plans from Star Health.
              Get expert guidance on choosing the right coverage for your needs.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                      {service.icon}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div variants={itemVariants}>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.paper', borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Key Benefits
                  </Typography>
                  <List>
                    {benefits.map((benefit, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <Typography variant="h6">✓</Typography>
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'background.paper', borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Why Choose Star Health?
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • India's first standalone health insurance company
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Quick and hassle-free claim settlement
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • 24/7 customer support
                  </Typography>
                  <Typography variant="body1" paragraph>
                    • Customized health insurance solutions
                  </Typography>
                  <Typography variant="body1">
                    • Transparent and customer-friendly processes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Get Expert Guidance
            </Typography>
            <Typography variant="body1" paragraph>
              Understanding health insurance can be complex. Let me help you choose the right plan
              that provides optimal coverage for you and your family.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:contact"
              sx={{ mt: 2 }}
            >
              Schedule Consultation
            </Button>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
    </>
  );
};

export default StarHealth; 