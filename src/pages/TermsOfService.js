import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Description
} from '@mui/icons-material';
import SEO from '../components/SEO';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for Laxmi Dodamani's website",
    "url": "https://laxmi-dodamani.netlify.app/terms-of-service"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
    <>
      <SEO 
        title="Terms of Service - Laxmi Dodamani"
        description="Terms of Service for Laxmi Dodamani's website. Learn about the terms and conditions governing the use of our services."
        keywords="terms of service, terms and conditions, legal terms, Laxmi Dodamani"
        url="/terms-of-service"
        structuredData={structuredData}
      />
      
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: '40px', marginBottom: '60px' }}
        >
          {/* Document Header */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Description className="animated-icon" sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
            <Typography variant="h2" color="primary" gutterBottom sx={{ fontWeight: 800, marginBottom: '16px' }}>
              Terms of Service
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ marginBottom: '8px' }}>
              Last Updated: December 2024
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Effective Date: December 1, 2024
            </Typography>
          </motion.div>

          {/* Document Content */}
          <motion.div variants={itemVariants}>
            <Paper 
              elevation={0}
              sx={{ 
                background: 'transparent',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                lineHeight: 1.8
              }}
            >
              {/* Introduction */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                1. Acceptance of Terms
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </Typography>

              {/* Services Description */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                2. Services Description
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Laxmi Dodamani provides insurance consultation services and traditional homemade food products. Our services include:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Insurance consultation and policy management<br/>
                • Life insurance and health insurance services<br/>
                • Traditional homemade food products<br/>
                • Bulk orders and custom catering<br/>
                • Home delivery services
              </Typography>

              {/* User Responsibilities */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                3. User Responsibilities
              </Typography>
              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 600, marginBottom: '16px' }}>
                3.1 Accurate Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </Typography>

              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 600, marginBottom: '16px' }}>
                3.2 Acceptable Use
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.
              </Typography>

              {/* Payment Terms */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                4. Payment and Pricing
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '16px', textAlign: 'justify' }}>
                All prices are subject to change without notice. Payment is due at the time of order placement. We accept various payment methods as indicated on our website.
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Prices are listed in Indian Rupees (INR)<br/>
                • Bulk orders may qualify for special pricing<br/>
                • Delivery charges may apply based on location<br/>
                • All payments are processed securely
              </Typography>

              {/* Delivery and Shipping */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                5. Delivery and Shipping
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We strive to deliver orders promptly and safely. Delivery times may vary based on location and order volume. We are not responsible for delays caused by circumstances beyond our control.
              </Typography>

              {/* Returns and Refunds */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                6. Returns and Refunds
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Due to the nature of our food products, we do not accept returns for hygiene reasons. However, if you receive damaged or incorrect items, please contact us within 24 hours for resolution.
              </Typography>

              {/* Intellectual Property */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                7. Intellectual Property Rights
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                All content on this website, including text, graphics, logos, images, and software, is the property of Laxmi Dodamani and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </Typography>

              {/* Privacy and Data */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                8. Privacy and Data Protection
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your personal information.
              </Typography>

              {/* Disclaimers */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                9. Disclaimers
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '16px', textAlign: 'justify' }}>
                Our services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Warranties of merchantability and fitness for a particular purpose<br/>
                • Warranties that the service will be uninterrupted or error-free<br/>
                • Warranties regarding the accuracy or reliability of information
              </Typography>

              {/* Limitation of Liability */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                10. Limitation of Liability
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                In no event shall Laxmi Dodamani be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
              </Typography>

              {/* Indemnification */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                11. Indemnification
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                You agree to indemnify and hold harmless Laxmi Dodamani from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </Typography>

              {/* Governing Law */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                12. Governing Law
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Belgaum, Karnataka.
              </Typography>

              {/* Changes to Terms */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                13. Changes to Terms
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </Typography>

              {/* Contact Information */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                14. Contact Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                If you have any questions about these Terms of Service, please contact us:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                <strong>Laxmi Dodamani</strong><br/>
                Email: contact@laxmidodamani.com<br/>
                Location: Belgaum, Karnataka, India
              </Typography>

              {/* Document Footer */}
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '40px', textAlign: 'center', fontStyle: 'italic' }}>
                These Terms of Service are effective as of December 1, 2024, and will remain in effect except with respect to any changes in its provisions in the future.
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default TermsOfService; 