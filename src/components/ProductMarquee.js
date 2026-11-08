import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, useTheme, IconButton, Chip, Avatar } from '@mui/material';
import { ShoppingCart, Favorite, Star, LocalOffer } from '@mui/icons-material';
import ProductDetails from './ProductDetails';

const ProductCard = ({ item, index }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ padding: '12px', flexShrink: 0 }}
      >
        <Card
          onClick={() => setDetailsOpen(true)}
          sx={{
            width: 280,
            height: 380,
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'white',
            boxShadow: isHovered 
              ? '0 12px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)' 
              : '0 4px 12px rgba(0,0,0,0.06)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.04)',
            '&:hover': {
              transform: 'translateY(-4px)',
            }
          }}
        >
          {/* Premium Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 2
            }}
          >
            <Chip
              icon={<Star sx={{ fontSize: '14px' }} />}
              label="Premium"
              size="small"
              sx={{
                background: 'var(--gold-fill)',
                color: 'var(--ink-100)',
                fontWeight: 600,
                fontSize: '0.7rem',
                height: '24px',
                '& .MuiChip-icon': {
                  color: 'var(--ink-100)'
                }
              }}
            />
          </Box>

          {/* Image Container */}
          <Box
            sx={{
              height: 180,
              overflow: 'hidden',
              position: 'relative',
              bgcolor: 'grey.100'
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
                transition: 'transform 0.4s ease',
                transform: isHovered ? 'scale(1.08)' : 'scale(1)'
              }}
            />
            
            {/* Action Buttons */}
            {isHovered && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': { bgcolor: 'white' },
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <Favorite fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': { bgcolor: 'white' },
                    width: '32px',
                    height: '32px'
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
                bottom: 8,
                left: 8
              }}
            >
              <Chip
                icon={<LocalOffer sx={{ fontSize: '12px' }} />}
                label="Pure Ghee"
                size="small"
                sx={{
                  background: 'var(--kitchen-500)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  height: '20px',
                  '& .MuiChip-icon': {
                    color: 'white'
                  }
                }}
              />
            </Box>
          </Box>

          {/* Content */}
          <CardContent sx={{ p: 2.5, pb: 2 }}>
            {/* Product Name */}
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 1,
                fontSize: '0.95rem',
                lineHeight: 1.3,
                height: '2.6em',
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
                mb: 2,
                height: '2.4em',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                fontSize: '0.8rem',
                lineHeight: 1.4,
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
                      mb: 0.5,
                      fontSize: '0.7rem',
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
                      fontSize: '0.95rem',
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

      <ProductDetails
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        product={item}
      />
    </>
  );
};

const ProductMarquee = ({ items }) => {
  return (
    <Box sx={{ 
      position: 'relative',
      overflow: 'hidden',
      height: '480px',
      my: 4,
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      },
      '&::before': {
        left: 0,
        background: 'linear-gradient(90deg, var(--surface-100) 0%, transparent 100%)',
      },
      '&::after': {
        right: 0,
        background: 'linear-gradient(-90deg, var(--surface-100) 0%, transparent 100%)',
      }
    }}>
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          animation: 'scroll 40s linear infinite',
          '&:hover': {
            animationPlayState: 'paused',
          },
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <ProductCard key={index} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductMarquee; 