import React from 'react';
import { Container, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Security, Visibility, Shield, Lock, Policy } from '@mui/icons-material';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Laxmi Dodamani's website",
    "url": "https://laxmi-dodamani.netlify.app/privacy-policy"
  };

  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Laxmi Dodamani's website. Learn how we collect, use, and protect your information."
        keywords="privacy policy, data protection, information security"
        url="/privacy-policy"
        structuredData={structuredData}
      />
      <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Policy sx={{ fontSize: 60, color: 'primary.main', marginBottom: '16px' }} />
            <Typography variant="h3" color="primary" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Protecting Your Privacy
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Typography>
          </div>

          {/* Introduction */}
          <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.50' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Security color="primary" />
              Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              At Laxmi Dodamani, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </Typography>
            <Typography variant="body1">
              By using our website and services, you consent to the data practices described in this policy.
            </Typography>
          </Paper>

          {/* Information Collection */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Visibility color="primary" />
              Information We Collect
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Personal Information
            </Typography>
            <Typography variant="body1" paragraph>
              We may collect personal information that you voluntarily provide to us, including:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Contact Information:</strong> Name, email address, phone number, and mailing address
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Service Information:</strong> Insurance policy details, claim information, and service preferences
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Order Information:</strong> Product preferences, delivery addresses, and payment information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Communication Records:</strong> Correspondence, inquiries, and feedback
              </Typography>
            </ul>
            
            <Typography variant="h6" gutterBottom>
              Automatically Collected Information
            </Typography>
            <Typography variant="body1" paragraph>
              When you visit our website, we automatically collect certain information, including:
            </Typography>
            <ul style={{ paddingLeft: '32px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation patterns
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience
              </Typography>
            </ul>
          </Paper>

          {/* How We Use Information */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Shield color="primary" />
              How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the collected information for the following purposes:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Service Provision:</strong> To provide insurance consultation, process claims, and deliver products
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Improvement:</strong> To enhance our website, services, and user experience
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Compliance:</strong> To fulfill legal obligations and regulatory requirements
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Marketing:</strong> To send relevant information about our services (with your consent)
              </Typography>
            </ul>
          </Paper>

          {/* Information Sharing */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Lock color="primary" />
              Information Sharing and Disclosure
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Service Providers:</strong> With trusted partners who assist in providing our services
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Consent:</strong> With your explicit consent for specific purposes
              </Typography>
            </ul>
          </Paper>

          {/* Data Security */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Security color="primary" />
              Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate technical and organizational security measures to protect your personal information against:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Unauthorized access, alteration, or disclosure
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Accidental loss or destruction
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Data breaches and cyber threats
              </Typography>
            </ul>
            <Typography variant="body1">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </Typography>
          </Paper>

          {/* Your Rights */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Your Rights and Choices
            </Typography>
            <Typography variant="body1" paragraph>
              You have the following rights regarding your personal information:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Access:</strong> Request a copy of your personal information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Correction:</strong> Request correction of inaccurate information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Deletion:</strong> Request deletion of your personal information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Portability:</strong> Request transfer of your data to another service
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Objection:</strong> Object to processing of your personal information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Withdrawal:</strong> Withdraw consent for marketing communications
              </Typography>
            </ul>
          </Paper>

          {/* Cookies */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" paragraph>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
              These technologies help us:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Remember your preferences and settings
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Analyze website traffic and usage patterns
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Provide personalized content and recommendations
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Improve website functionality and performance
              </Typography>
            </ul>
            <Typography variant="body1">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
            </Typography>
          </Paper>

          {/* Contact */}
          <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.50' }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </Typography>
            <div style={{ paddingLeft: '16px' }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Through our website contact form
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Via email at our contact address
              </Typography>
              <Typography variant="body1">
                • By visiting our office in Belgaum, Karnataka
              </Typography>
            </div>
          </Paper>

          {/* Updates */}
          <Paper sx={{ p: 4, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Updates to This Policy
            </Typography>
            <Typography variant="body1">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new policy on this page and updating the "Last updated" date. We encourage you to review this policy 
              periodically to stay informed about how we protect your information.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
};

export default PrivacyPolicy; 