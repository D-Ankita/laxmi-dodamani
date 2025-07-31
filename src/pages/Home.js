import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Laxmi Dodamani",
    "description": "Insurance services and homemade traditional delicacies in Belgaum, Karnataka",
    "url": "https://laxmi-dodamani.netlify.app",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belgaum",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.8497",
      "longitude": "74.4977"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "₹₹",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LIC Insurance Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Star Health Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dareshwar Kitchen - Homemade Delicacies"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Insurance Services & Homemade Delicacies"
        description="Laxmi Dodamani offers 20+ years of insurance expertise in LIC and Star Health services, plus traditional homemade delicacies through Dareshwar Kitchen. Get expert insurance consultation and authentic homemade food in Belgaum."
        keywords="LIC services, Star Health insurance, homemade ladoos, traditional food, insurance consultation, Belgaum, Karnataka, Dareshwar Kitchen"
        url="/"
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
            <Typography variant="h2" color="primary" gutterBottom>
              Welcome to My Services
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Your Trusted Partner in Insurance & Traditional Delicacies
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div variants={itemVariants}>
              <Card sx={{ 
                mb: 4, 
                background: `linear-gradient(135deg, ${theme.palette.primary.light}20, #fff)`,
                borderRadius: 2
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom color="primary">
                    About Me
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Hello! I'm Laxmi Dodamani, a dedicated professional with over 20 years of experience in the insurance sector. 
                    I specialize in LIC and Star Health services, helping families secure their future with the right insurance solutions.
                  </Typography>
                  <Typography variant="body1">
                    In 2015, I expanded my horizons by founding Dareshwar Kitchen, bringing the authentic taste of traditional 
                    homemade delicacies to your doorstep. Every product is crafted with pure ghee and premium ingredients, 
                    ensuring quality and taste in every bite.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card sx={{ 
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.secondary.light}20, #fff)`,
                borderRadius: 2
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom color="secondary">
                    Dareshwar Kitchen
                  </Typography>
                  <Typography variant="body2">
                    • Traditional homemade delights<br />
                    • Specializing in healthy ladoos<br />
                    • Pure ghee & premium ingredients<br />
                    • Bulk orders welcome<br />
                    • Festive specials<br />
                    • Home delivery available
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card sx={{ 
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.primary.light}20, #fff)`,
                borderRadius: 2
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    LIC Services
                  </Typography>
                  <Typography variant="body2">
                    • Policy consultation<br />
                    • Claim settlement<br />
                    • Policy renewal<br />
                    • Nomination changes<br />
                    • Maturity handling<br />
                    • Death claim support
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card sx={{ 
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.primary.light}20, #fff)`,
                borderRadius: 2
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    Star Health Services
                  </Typography>
                  <Typography variant="body2">
                    • Health insurance consultation<br />
                    • Policy recommendations<br />
                    • Claim settlement<br />
                    • Policy renewal<br />
                    • Cashless hospital process<br />
                    • 24/7 support
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div variants={itemVariants}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Recognition & Experience
            </Typography>
            <Typography variant="body1">
              With numerous awards and accolades in the insurance sector, I take pride in providing 
              reliable and trustworthy services to my clients. My commitment to excellence extends 
              to both insurance solutions and culinary creations.
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
    </>
  );
};

export default Home; 