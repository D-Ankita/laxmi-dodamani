import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Security
} from '@mui/icons-material';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Laxmi Dodamani's website",
    "url": "https://laxmi-dodamani.netlify.app/privacy-policy"
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
        title="Privacy Policy - Laxmi Dodamani"
        description="Privacy Policy for Laxmi Dodamani's website. Learn how we protect your personal information and maintain your privacy."
        keywords="privacy policy, data protection, personal information, Laxmi Dodamani"
        url="/privacy-policy"
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
            <Security className="animated-icon" sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
            <Typography variant="h2" color="primary" gutterBottom sx={{ fontWeight: 800, marginBottom: '16px' }}>
              Privacy Policy
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
                1. Introduction
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Welcome to Laxmi Dodamani's website. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </Typography>

              {/* Information We Collect */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                2. Information We Collect
              </Typography>
              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 600, marginBottom: '16px' }}>
                2.1 Personal Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '16px', textAlign: 'justify' }}>
                We may collect personal information that you voluntarily provide to us when you:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Contact us through our website forms<br/>
                • Subscribe to our newsletter<br/>
                • Request insurance quotes or consultations<br/>
                • Place orders for our products<br/>
                • Provide feedback or testimonials
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                This information may include your name, email address, phone number, address, and any other information you choose to provide.
              </Typography>

              <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 600, marginBottom: '16px' }}>
                2.2 Automatically Collected Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </Typography>

              {/* How We Use Your Information */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                3. How We Use Your Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '16px', textAlign: 'justify' }}>
                We use the information we collect to:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Provide and maintain our services<br/>
                • Process your orders and payments<br/>
                • Communicate with you about our services<br/>
                • Send you marketing communications (with your consent)<br/>
                • Improve our website and services<br/>
                • Comply with legal obligations
              </Typography>

              {/* Information Sharing */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                4. Information Sharing and Disclosure
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • To comply with legal requirements<br/>
                • To protect our rights and safety<br/>
                • With your explicit consent<br/>
                • To trusted service providers who assist us in operating our website
              </Typography>

              {/* Data Security */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                5. Data Security
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </Typography>

              {/* Your Rights */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                6. Your Rights
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '16px', textAlign: 'justify' }}>
                You have the right to:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                • Access your personal information<br/>
                • Correct inaccurate information<br/>
                • Request deletion of your information<br/>
                • Opt-out of marketing communications<br/>
                • Withdraw consent at any time
              </Typography>

              {/* Cookies */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                7. Cookies and Tracking Technologies
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </Typography>

              {/* Third-Party Links */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                8. Third-Party Links
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </Typography>

              {/* Children's Privacy */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                9. Children's Privacy
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </Typography>

              {/* Changes to Privacy Policy */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                10. Changes to This Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </Typography>

              {/* Contact Information */}
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, marginTop: '32px', marginBottom: '24px' }}>
                11. Contact Us
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px', textAlign: 'justify' }}>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginLeft: '20px', marginBottom: '20px' }}>
                <strong>Laxmi Dodamani</strong><br/>
                Email: contact@laxmidodamani.com<br/>
                Location: Vijayapura, Karnataka, India
              </Typography>

              {/* Document Footer */}
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '40px', textAlign: 'center', fontStyle: 'italic' }}>
                This Privacy Policy is effective as of December 1, 2024, and will remain in effect except with respect to any changes in its provisions in the future.
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default PrivacyPolicy; 