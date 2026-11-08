import React, { useState } from 'react';
import { 
  Box, Card, CardContent, Typography, useTheme, IconButton, Chip, 
  Grid, Slide, Drawer, Backdrop
} from '@mui/material';
import { ShoppingCart, Favorite, Star, LocalOffer, Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';

const ProductCard = ({ item, onClick }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        onClick={() => onClick(item)}
        sx={{
          height: '100%',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'white',
          boxShadow: isHovered 
            ? '0 4px 16px rgba(0,0,0,0.08)' 
            : '0 1px 2px rgba(0,0,0,0.04)',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          border: '1px solid var(--line-100)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            borderColor: 'var(--line-200)'
          }
        }}
      >
        {/* Premium Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            left: 4,
            zIndex: 2
          }}
        >
          <Chip
            icon={<Star sx={{ fontSize: '8px' }} />}
            label="Premium"
            size="small"
            sx={{
              background: 'var(--gold-fill)',
              color: 'var(--ink-100)',
              fontWeight: 600,
              fontSize: '0.55rem',
              height: '16px',
              '& .MuiChip-icon': {
                color: 'var(--ink-100)'
              }
            }}
          />
        </Box>

        {/* Image Container */}
        <Box
          sx={{
            height: 140,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'var(--surface-300)'
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)'
            }}
          />
          
          {/* Action Buttons */}
          {isHovered && (
            <Box
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5
              }}
            >
              <IconButton
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': { bgcolor: 'white' },
                  width: '22px',
                  height: '22px'
                }}
              >
                <Favorite fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': { bgcolor: 'white' },
                  width: '22px',
                  height: '22px'
                }}
              >
                <ShoppingCart fontSize="small" />
              </IconButton>
            </Box>
          )}

          {/* Pure Ghee Badge */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 4,
              left: 4
            }}
          >
            <Chip
              icon={<LocalOffer sx={{ fontSize: '7px' }} />}
              label="Pure Ghee"
              size="small"
              sx={{
                background: 'var(--kitchen-500)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.5rem',
                height: '14px',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>
        </Box>

        {/* Content */}
        <CardContent sx={{ p: 1.25, pb: 1 }}>
          {/* Product Name */}
          <Typography
            variant="h6"
            sx={{
              color: 'var(--ink-100)',
              fontWeight: 600,
              mb: 0.5,
              fontSize: '0.8rem',
              lineHeight: 1.2,
              height: '2.4em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {item.name}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              height: '2.2em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              fontSize: '0.65rem',
              lineHeight: 1.3,
              color: 'var(--ink-300)'
            }}
          >
            {item.description}
          </Typography>

          {/* Price Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              mt: 'auto'
            }}
          >
            {['250g', '1kg'].map((weight, i) => (
              <Box key={weight} sx={{ textAlign: i === 1 ? 'right' : 'left' }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ 
                    display: 'block',
                    mb: 0.25,
                    fontSize: '0.55rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {weight}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ 
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: 'var(--crimson-500)'
                  }}
                >
                  ₹{item.price[weight]}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

const ProductGallery = ({ items }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  };

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id || index}>
              <ProductCard 
                item={item} 
                onClick={handleProductClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Animated Side Panel */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '650px' },
            height: '100%',
            bgcolor: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            border: 'none'
          }
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)'
          }
        }}
        transitionDuration={300}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>


          {/* Content */}
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            {selectedProduct && (
              <ProductDetails
                open={drawerOpen}
                onClose={handleCloseDrawer}
                product={selectedProduct}
              />
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ProductGallery; 