import React from 'react';
import { Box, Typography, Container, Card, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProductGallery from '../components/ProductGallery';
import productsData from '../data/products.json';
import SEO from '../components/SEO';

const DareshwarKitchen = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Dareshwar Kitchen",
    "description": "Traditional homemade delicacies prepared with pure ghee and premium ingredients",
    "url": "https://laxmi-dodamani.netlify.app/dareshwar-kitchen",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belgaum",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "servesCuisine": "Indian Traditional",
    "priceRange": "₹₹",
    "hasMenu": {
      "@type": "Menu",
      "name": "Traditional Delicacies",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Ladoos",
          "hasMenuItem": productsData.products.map(product => ({
            "@type": "MenuItem",
            "name": product.name,
            "description": product.description,
            "offers": {
              "@type": "Offer",
              "price": product.price["250g"],
              "priceCurrency": "INR"
            }
          }))
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Dareshwar Kitchen - Traditional Homemade Delicacies"
        description="Discover authentic traditional homemade ladoos and delicacies from Dareshwar Kitchen. Made with 100% pure ghee and premium ingredients. Bulk orders welcome. Delivery available in Belgaum."
        keywords="homemade ladoos, traditional food, pure ghee ladoos, bulk orders, Belgaum food, traditional delicacies, Dareshwar Kitchen"
        url="/dareshwar-kitchen"
        structuredData={structuredData}
      />
      <Container maxWidth="xl" sx={{ pt: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.img
              src="/assets/DareshwarKitchen.png"
              alt="Dareshwar Kitchen"
              style={{
                height: '120px',
                objectFit: 'contain'
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
          <Typography variant="h5" color="text.secondary">
            Traditional Homemade Delights
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" textAlign="center" paragraph>
            Prepared with 100% pure ghee, premium ingredients, and handcrafted with love & hygiene.
          </Typography>
          <Typography variant="h6" textAlign="center" color="primary">
            Enjoy the goodness of tradition in Every Bite!
          </Typography>
        </Box>

        <ProductGallery items={productsData.products} />

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%', 
              bgcolor: 'secondary.light', 
              color: 'white', 
              p: 3,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              <Typography variant="h5" gutterBottom>
                Bulk Orders Welcome
              </Typography>
              <Typography variant="body1">
                Planning for an event or festival? We accept bulk orders with advance notice.
                Contact us for special pricing on large quantities.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%', 
              bgcolor: 'secondary.light', 
              color: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              <Typography variant="h5" gutterBottom>
                Delivery & Pickup
              </Typography>
              <Typography variant="body1">
                We offer both delivery and pickup options.
                Place your order in advance to ensure availability.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Why Choose Dareshwar Kitchen?
          </Typography>
          <Typography variant="body1">
            Every product is crafted with love, using traditional recipes passed down through generations. 
            We use only the finest ingredients and pure ghee to ensure authentic taste and quality.
          </Typography>
        </Box>
              </motion.div>
    </Container>
    </>
  );
};

export default DareshwarKitchen; 