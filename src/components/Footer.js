import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Email, 
  LocationOn, 
  WhatsApp,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@mui/icons-material';

const Footer = () => {

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        borderTop: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
        `,
        animation: 'float 15s ease-in-out infinite',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ marginBottom: '24px' }}
              >
                <motion.img
                  src={`${process.env.PUBLIC_URL}/assets/1000174754.png`}
                  alt="Laxmi Dodamani"
                  style={{
                    height: '80px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  }}
                  whileHover={{ 
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: '16px' }}
              >
                Laxmi Dodamani
              </Typography>
              
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ lineHeight: 1.6, marginBottom: '24px' }}
              >
                Your trusted partner for insurance services and traditional homemade delicacies. 
                Over 20 years of experience in securing your future and satisfying your taste buds.
              </Typography>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '16px' }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -4,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      href={social.href}
                      color="inherit"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(59, 130, 246, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <social.icon sx={{ fontSize: '1.2rem' }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: '24px' }}
              >
                Quick Links
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/dareshwar-kitchen', label: 'Dareshwar Kitchen' },
                  { href: '/lic-services', label: 'LIC Services' },
                  { href: '/star-health', label: 'Star Health' },
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      href={link.href}
                      color="text.secondary"
                      underline="none"
                      sx={{
                        display: 'block',
                        padding: '8px 0',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateX(4px)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '0%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                          transition: 'width 0.3s ease',
                          transform: 'translateY(-50%)',
                        },
                        '&:hover::before': {
                          width: '100%',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h6" 
                color="text.primary" 
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: '24px' }}
              >
                Contact Information
              </Typography>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <LocationOn 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.5rem'
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.4 }}
                  >
                    Vijayapura, Karnataka, India
                  </Typography>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <Email 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.5rem'
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.4 }}
                  >
                    Contact via website form
                  </Typography>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <WhatsApp 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.5rem'
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.4 }}
                  >
                    WhatsApp available
                  </Typography>
                </motion.div>
              </div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            marginTop: '32px',
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ marginBottom: '16px' }}
          >
            © {new Date().getFullYear()} Laxmi Dodamani. All rights reserved.
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/privacy-policy" 
                color="text.secondary" 
                underline="none"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                Privacy Policy
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/terms-of-service" 
                color="text.secondary" 
                underline="none"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer; 