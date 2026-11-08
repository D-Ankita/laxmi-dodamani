import React, { useState, useMemo } from 'react';
import { Container, Typography, Grid, Card, Dialog, DialogContent, IconButton, Box, Button, Tabs, Tab, Chip, Rating } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Restaurant, 
  LocalShipping, 
  Star, 
  Favorite,
  ShoppingCart,
  EmojiEvents,
  Psychology,
  Business,
  Schedule,
  CheckCircle,
  RestaurantMenu,
  ArrowForward,
  Close,
  Info,
  HealthAndSafety,
  TrendingUp,
  LocalDining
} from '@mui/icons-material';
import SEO from '../components/SEO';
import productsData from '../data/products.json';

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && (<Box sx={{ p: 1.5, pb: 2 }}>{children}</Box>)}
  </div>
);

const DareshwarKitchen = () => {
  // This page belongs to the kitchen arm, so its signal colour is terracotta
  // rather than the site's default navy. The .arm-kitchen class below does
  // that for everything styled in CSS; MUI reads its palette from JS, so it
  // needs the same switch here. Values mirror --kitchen-* in
  // src/styles/tokens.css.
  const outerTheme = useTheme();
  const kitchenTheme = useMemo(
    () => createTheme(outerTheme, {
      palette: { primary: { main: '#C2451A', light: '#D9622F', dark: '#A33C12' } },
    }),
    [outerTheme]
  );

  const [activeTab, setActiveTab] = useState('all');
  const [activeCardTab, setActiveCardTab] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTabValue, setModalTabValue] = useState(0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Dareshwar Kitchen",
    "description": "Traditional homemade delicacies specializing in healthy ladoos",
    "url": "https://laxmi-dodamani.netlify.app/dareshwar-kitchen",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vijayapura",
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
    "servesCuisine": "Indian",
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

  const services = [
    {
      icon: LocalShipping,
      title: "Delivery & Pick Up",
      description: "Convenient delivery to your doorstep or pick up from our location. "
    },
    {
      icon: ShoppingCart,
      title: "Bulk Orders",
      description: "Special pricing for large quantities. Perfect for festivals, weddings, and corporate events."
    },
    {
      icon: Star,
      title: "Custom Orders",
      description: "Personalized recipes and special dietary requirements. We cater to your specific needs."
    },
    {
      icon: Favorite,
      title: "Festival Specials",
      description: "Special collections for Diwali, Holi, Raksha Bandhan, and other festivals."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', count: productsData.products.length },
    { id: 'ladoos', label: 'Ladoos', count: productsData.products.filter(p => p.name.toLowerCase().includes('ladoo')).length },
    { id: 'snacks', label: 'Snacks', count: productsData.products.filter(p => !p.name.toLowerCase().includes('ladoo')).length }
  ];

  const filteredProducts = activeTab === 'all' 
    ? productsData.products 
    : activeTab === 'ladoos' 
    ? productsData.products.filter(p => p.name.toLowerCase().includes('ladoo'))
    : productsData.products.filter(p => !p.name.toLowerCase().includes('ladoo'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const handleCardTabChange = (productId, tabName) => {
    setActiveCardTab(prev => ({
      ...prev,
      [productId]: tabName
    }));
  };

  const handleCardFlip = (productId) => {
    setFlippedCards(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleCardClick = (product) => {
    // On mobile, open modal instead of flipping
    if (window.innerWidth <= 768) {
      setSelectedProduct(product);
      setModalOpen(true);
      setModalTabValue(0);
    } else {
      // On desktop, flip the card
      handleCardFlip(product.id);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleModalTabChange = (event, newValue) => {
    setModalTabValue(newValue);
  };

  const getCardTabContent = (product, tabName) => {
    switch(tabName) {
      case 'overview':
        return (
          <div className="product-detail-section">
            {/* <div className="product-detail-title">
              <Info sx={{ fontSize: '1.2rem' }} />
              Product Overview
            </div> */}
            <div className="product-detail-list">
              <div className="product-detail-item">
                <strong>Description:</strong> {product.detailedDescription || product.description}
              </div>
              <div className="product-detail-item">
                <strong>Serving:</strong> {product.servingSuggestion}
              </div>
              <div className="product-detail-item">
                <strong>Best For:</strong> {product.bestFor?.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="product-detail-section">
            <div className="product-detail-title">
              <CheckCircle sx={{ fontSize: '1.2rem' }} />
              Health Benefits
            </div>
            <ul className="product-detail-list">
              {product.benefits.slice(0, 4).map((benefit, idx) => (
                <li key={idx} className="product-detail-item">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'ingredients':
        return (
          <div className="product-detail-section">
            <div className="product-detail-title">
              <RestaurantMenu sx={{ fontSize: '1.2rem' }} />
              Pure Ingredients
            </div>
            <ul className="product-detail-list">
              {product.ingredients.slice(0, 4).map((ingredient, idx) => (
                <li key={idx} className="product-detail-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'nutrition':
        return (
          <div className="product-detail-section">
            <div className="product-detail-title">
              <TrendingUp sx={{ fontSize: '1.2rem' }} />
              Nutritional Value
            </div>
            <div className="product-detail-list">
              {Object.entries(product.nutritionalValue || {}).slice(0, 6).map(([key, value], idx) => (
                <div key={idx} className="product-detail-item">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          </div>
        );
      case 'storage':
        return (
          <div className="product-detail-section">
            <div className="product-detail-title">
              <Schedule sx={{ fontSize: '1.2rem' }} />
              Storage & Serving
            </div>
            <div className="product-detail-list">
              <div className="product-detail-item">
                <strong>Storage:</strong> {product.storageInfo}
              </div>
              <div className="product-detail-item">
                <strong>Serving:</strong> {product.servingSuggestion}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={kitchenTheme}>
    <div className="arm-kitchen">
      <SEO 
        title="Dareshwar Kitchen - Traditional Homemade Delicacies"
        description="Discover authentic traditional homemade delicacies from Dareshwar Kitchen. Specializing in healthy ladoos, chakli, and festive treats made with pure ghee and premium ingredients."
        keywords="homemade ladoos, traditional food, besan ladoo, ragi ladoo, til ladoo, chakli, murmura chivda, Vijayapura, Karnataka"
        url="/dareshwar-kitchen"
        structuredData={structuredData}
      />
      
      <Container maxWidth="xl">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '60px', marginTop: '40px' }}
        >
          <motion.div variants={itemVariants}>
            <div className="page-hero">
              <motion.div
                
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/DareshwarKitchen_logo.png`} 
                  alt="Dareshwar Kitchen Logo"
                  style={{ 
                    width: '200px', 
                    height: '200px', 
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
              
              <Typography 
                variant="h2" 
                color="primary"
                gutterBottom
                sx={{ 
                  fontWeight: 800,
                  marginBottom: '24px',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Dareshwar Kitchen
              </Typography>
              
              <Typography 
                variant="h5" 
                color="text.secondary"
                sx={{ 
                  marginBottom: '32px',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  margin: '0 auto 32px'
                }}
              >
                Cloud kitchen started in 2015. Traditional homemade delicacies crafted with love and premium ingredients. 
                Every bite brings the authentic taste of Indian tradition to your table.
              </Typography>
              
              <motion.div
                style={{ animationDelay: '2s' }}
              >
                <Typography 
                  variant="h6" 
                  color="primary"
                  sx={{ 
                    fontWeight: 600,
                    background: 'var(--trust-500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ✨ Pure Ghee • Premium Ingredients • Traditional Recipes ✨
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '80px' }}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <Business sx={{ marginRight: '12px', fontSize: '2rem' }} />
              Our Services
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card className="service-card">
                    <motion.div
                      style={{ marginBottom: '24px' }}
                    >
                      <service.icon sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
                    </motion.div>
                    
                    <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Products Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '80px' }}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <EmojiEvents sx={{ marginRight: '12px', fontSize: '2rem' }} />
              Our Delicacies
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', margin: '0 auto' }}>
              Each product is crafted with traditional recipes, pure ghee, and premium ingredients 
              to bring you the authentic taste of Indian tradition.
            </Typography>
          </motion.div>

          {/* Product Tabs */}
          <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
            <div className="product-tabs">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`product-tab ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <Grid container spacing={4}>
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    style={{ height: '100%' }}
                  >
                    <div 
                      className={`flip-card ${flippedCards[product.id] ? 'flipped' : ''}`}
                      onClick={() => handleCardClick(product)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="flip-card-inner">
                        {/* Front of Card */}
                        <div className="flip-card-front">
                          <motion.img
                            src={`${process.env.PUBLIC_URL}${product.image}`}
                            alt={product.name}
                            className="product-card-image"
                            whileHover={{ 
                              scale: 1.05,
                              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                              transition: { duration: 0.3 }
                            }}
                          />
                          
                          <Typography className="product-card-title">
                            {product.name}
                          </Typography>
                          
                          <Typography className="product-card-description">
                            {product.description}
                          </Typography>
                          
                          {/* Price Selection Buttons */}
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2, p:2 }}>
                            {['250g', '1kg'].map((weight, i) => (
                              <Button
                                key={weight}
                                variant={i === 0 ? "contained" : "outlined"}
                                size="small"
                                sx={{
                                  minWidth: '70px',
                                  py: 0.5,
                                  px: 1,
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  borderRadius: '8px'
                                }}
                              >
                                {weight} - ₹{product.price[weight]}
                              </Button>
                            ))}
                          </Box>

                          {/* Flip Trigger - Desktop only for flip, mobile for modal */}
                          <button
                            className="flip-trigger"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (window.innerWidth > 768) {
                                handleCardFlip(product.id);
                              } else {
                                handleCardClick(product);
                              }
                            }}
                          >
                            <ArrowForward />
                          </button>
                        </div>

                        {/* Back of Card - Only show on desktop */}
                        <div className="flip-card-back" style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
                          {/* Product Card Tabs */}
                          <div className="product-card-tabs">
                            <button
                              className={`product-card-tab ${activeCardTab[product.id] === 'overview' ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardTabChange(product.id, 'overview');
                              }}
                            >
                              Overview
                            </button>
                            <button
                              className={`product-card-tab ${activeCardTab[product.id] === 'benefits' ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardTabChange(product.id, 'benefits');
                              }}
                            >
                              Benefits
                            </button>
                            <button
                              className={`product-card-tab ${activeCardTab[product.id] === 'ingredients' ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardTabChange(product.id, 'ingredients');
                              }}
                            >
                              Ingredients
                            </button>
                            <button
                              className={`product-card-tab ${activeCardTab[product.id] === 'nutrition' ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardTabChange(product.id, 'nutrition');
                              }}
                            >
                              Nutrition
                            </button>
                            <button
                              className={`product-card-tab ${activeCardTab[product.id] === 'storage' ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardTabChange(product.id, 'storage');
                              }}
                            >
                              Storage
                            </button>
                          </div>

                          {/* Product Details */}
                          <div className="product-card-details">
                            {getCardTabContent(product, activeCardTab[product.id] || 'overview')}
                          </div>

                          {/* Flip Back Trigger */}
                          <button
                            className="flip-trigger"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardFlip(product.id);
                            }}
                          >
                            <ArrowForward />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <motion.div variants={itemVariants}>
            <Card className="service-card" sx={{ 
              background: 'var(--kitchen-100)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{ marginBottom: '32px' }}
              >
                <Psychology sx={{ fontSize: '4rem', color: 'secondary.main', marginBottom: '16px' }} />
              </motion.div>
              
              <Typography variant="h3" color="secondary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                Ready to Taste Tradition?
              </Typography>
              
              <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, marginBottom: '32px' }}>
                Place your order today and experience the authentic taste of traditional Indian delicacies. 
                Perfect for festivals, celebrations, or everyday indulgence.
              </Typography>
              
              <motion.button
                className="animated-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontSize: '1.1rem',
                  padding: '16px 32px',
                  margin: '0 12px'
                }}
              >
                Order Now
              </motion.button>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Mobile Product Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        fullScreen
        sx={{
          '& .MuiDialog-paper': {
            margin: 0,
            borderRadius: 0,
            maxHeight: '100vh',
            height: '100vh'
          }
        }}
      >
        <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {selectedProduct && (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Header */}
              <Box sx={{ 
                p: 1.5, 
                borderBottom: 1, 
                borderColor: 'grey.200', 
                bgcolor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexShrink: 0
              }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {selectedProduct.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating value={4.8} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      4.8 (198 reviews)
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    onClick={handleModalClose}
                    size="small"
                    sx={{
                      bgcolor: 'var(--kitchen-500)',
                      color: 'white',
                      '&:hover': { bgcolor: 'var(--kitchen-600)' }
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
              </Box>

              {/* Content - Vertical Layout */}
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 1.5, overflow: 'hidden' }}>
                {/* Image - Reduced Height */}
                <Box sx={{ 
                  width: '100%', 
                  height: '220px', 
                  mb: 1.5,
                  borderRadius: 1,
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <Box
                    component="img"
                    src={`${process.env.PUBLIC_URL}${selectedProduct.image}`}
                    alt={selectedProduct.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'grey.200', mb: 0.5, flexShrink: 0 }}>
                  <Tabs
                    value={modalTabValue}
                    onChange={handleModalTabChange}
                    variant="fullWidth"
                    sx={{
                      '& .MuiTab-root': {
                        minHeight: 36,
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        textTransform: 'none'
                      }
                    }}
                  >
                    <Tab icon={<Info />} label="Overview" />
                    <Tab icon={<Restaurant />} label="Ingredients" />
                    <Tab icon={<HealthAndSafety />} label="Benefits" />
                    <Tab icon={<TrendingUp />} label="Nutrition" />
                  </Tabs>
                </Box>

                {/* Tab Content - Scrollable */}
                <Box sx={{ 
                  flex: 1,
                  overflowY: 'auto',
                  minHeight: 0,
                  '&::-webkit-scrollbar': {
                    width: '6px'
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'var(--surface-300)'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'var(--line-200)',
                    borderRadius: '3px'
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: 'var(--line-200)'
                  }
                }}>
                  <TabPanel value={modalTabValue} index={0}>
                    <Typography paragraph sx={{ fontSize: '0.75rem', lineHeight: 1.4, color: 'text.secondary', mb: 1.5 }}>
                      {selectedProduct.detailedDescription || selectedProduct.description}
                    </Typography>
                    
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
                      Serving Suggestion
                    </Typography>
                    <Typography paragraph sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1.5 }}>
                      {selectedProduct.servingSuggestion}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
                      Best For
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                      {selectedProduct.bestFor?.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.65rem' }}
                        />
                      ))}
                    </Box>
                  </TabPanel>

                  <TabPanel value={modalTabValue} index={1}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {selectedProduct.ingredients?.map((ingredient, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 0.25,
                          }}
                        >
                          <LocalDining color="primary" fontSize="small" />
                          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>{ingredient}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </TabPanel>

                  <TabPanel value={modalTabValue} index={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {selectedProduct.benefits?.slice(0, 4).map((benefit, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            p: 0.75,
                            borderRadius: 0.5,
                            bgcolor: 'success.50'
                          }}
                        >
                          <HealthAndSafety color="success" fontSize="small" />
                          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>{benefit}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </TabPanel>

                  <TabPanel value={modalTabValue} index={3}>
                    <Grid container spacing={1}>
                      {Object.entries(selectedProduct.nutritionalValue || {}).slice(0, 6).map(([key, value], index) => (
                        <Grid item xs={12} key={key}>
                          <Box sx={{
                            p: 0.75,
                            borderColor: 'grey.300',
                            borderRadius: 0.5,
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 1,
                          }}>
                            <Typography variant="body2" color="text.secondary">
                              {key} :
                            </Typography>
                            <Typography variant="body2" color="primary">
                              {value}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                </Box>
              </Box>

              {/* Footer */}
              <Box sx={{ 
                p: 1.5, 
                borderTop: 1, 
                borderColor: 'grey.200', 
                bgcolor: 'grey.50',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0
              }}>
                <Typography variant="caption" color="text.secondary">
                  Storage: {selectedProduct.storageInfo}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
};

export default DareshwarKitchen; 