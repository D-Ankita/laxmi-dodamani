import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const services = [
  {
    title: 'Claim Settlement',
    description: 'Quick and hassle-free claim settlement process with expert guidance at every step.',
    icon: '💰'
  },
  {
    title: 'Policy Renewal',
    description: 'Timely reminders and smooth renewal process to ensure continuous coverage.',
    icon: '🔄'
  },
  {
    title: 'Nomination Change',
    description: 'Easy process for updating policy nominees with proper documentation.',
    icon: '📝'
  },
  {
    title: 'Maturity Handling',
    description: 'Complete assistance in maturity claim processing and fund disbursement.',
    icon: '⏳'
  },
  {
    title: 'Death Claim Support',
    description: 'Compassionate and efficient handling of death claims with full documentation support.',
    icon: '🤝'
  },
  {
    title: 'Policy Revival',
    description: 'Help in reinstating lapsed policies with minimal documentation.',
    icon: '📈'
  }
];

const LICServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LIC Insurance Services",
    "description": "Comprehensive LIC insurance services including claim settlement, policy renewal, and death claim support",
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
      "name": "LIC Services",
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

  return (
    <>
      <SEO 
        title="LIC Insurance Services - Expert Consultation & Support"
        description="Get expert LIC insurance services in Belgaum. 20+ years experience in claim settlement, policy renewal, death claims, and policy revival. Trusted advisor for all LIC needs."
        keywords="LIC services, insurance consultation, claim settlement, policy renewal, death claims, Belgaum insurance, LIC advisor"
        url="/lic-services"
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
                src="/assets/LIC.png"
                alt="LIC Logo"
                style={{
                  height: '80px',
                  objectFit: 'contain'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Box>
                <Typography variant="h2" color="primary" gutterBottom>
                  LIC Services
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  20+ Years of Trusted Insurance Solutions
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
              As a seasoned LIC advisor, I provide comprehensive insurance solutions tailored to your needs.
              With decades of experience, I ensure smooth handling of all your insurance requirements.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h1" sx={{ mr: 2, fontSize: '2.5rem' }}>
                        {service.icon}
                      </Typography>
                      <Typography variant="h5" color="primary">
                        {service.title}
                      </Typography>
                    </Box>
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
          <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Free Consultation Available
            </Typography>
            <Typography variant="body1" paragraph>
              Let's discuss your insurance needs and find the perfect coverage for you and your family.
              I'm here to help you make informed decisions about your financial future.
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
              Contact Now
            </Button>
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" color="text.secondary">
              Multiple Award Winner | Trusted by Thousands of Families
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
    </>
  );
};

export default LICServices; 