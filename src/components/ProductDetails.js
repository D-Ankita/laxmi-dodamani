import React from 'react';
import {
  IconButton, Typography, Box, Grid, Button, Tabs, Tab, Chip, Rating
} from '@mui/material';
import { 
  Close, ShoppingCart, LocalDining, HealthAndSafety, Info, Restaurant, 
  TrendingUp
} from '@mui/icons-material';
import productsData from '../data/products.json';

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && (<Box sx={{ p: 1.5, pb: 2 }}>{children}</Box>)}
  </div>
);

const ProductDetails = ({ open, onClose, product }) => {
  const [tabValue, setTabValue] = React.useState(0);
  
  const details = productsData.products.find(p => p.name === product?.name) || {};

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!open || !product) return null;

  return (
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
            {product?.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating value={details.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              {details.rating} ({details.reviews} reviews)
            </Typography>
          </Box>
        </Box>
        
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            bgcolor: 'grey.100',
            '&:hover': { bgcolor: 'grey.200' }
          }}
        >
          <Close />
        </IconButton>
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
            src={product?.image}
            alt={product?.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>

        {/* Small Price Buttons */}
        <Box sx={{ mb: 1.5, flexShrink: 0 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
            Select Package
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
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
                  fontWeight: 600
                }}
              >
                {weight} - ₹{product?.price[weight]}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'grey.200', mb: 0.5, flexShrink: 0 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
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
          <TabPanel value={tabValue} index={0}>
            <Typography paragraph sx={{ fontSize: '0.75rem', lineHeight: 1.4, color: 'text.secondary', mb: 1.5 }}>
              {details.detailedDescription}
            </Typography>
            
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
              Serving Suggestion
            </Typography>
            <Typography paragraph sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1.5 }}>
              {details.servingSuggestion}
            </Typography>

            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
              Best For
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
              {details.bestFor?.map((item, index) => (
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

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {details.ingredients?.map((ingredient, index) => (
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

          <TabPanel value={tabValue} index={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {details.benefits?.slice(0, 4).map((benefit, index) => (
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

          <TabPanel value={tabValue} index={3}>
            <Grid container spacing={1}>
              {Object.entries(details.nutritionalValue || {}).slice(0, 6).map(([key, value], index) => (
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <Typography variant="caption" color="text.secondary">
          Storage: {details.storageInfo}
        </Typography>
        
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          size="small"
          onClick={() => {}}
          sx={{
            bgcolor: 'primary.main',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '0.7rem',
            '&:hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails; 