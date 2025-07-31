import React from 'react';
import { Container, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Gavel, Business, Security, Warning, ContactSupport, Description } from '@mui/icons-material';
import SEO from '../components/SEO';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for Laxmi Dodamani's website",
    "url": "https://laxmi-dodamani.netlify.app/terms-of-service"
  };

  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Terms of Service for Laxmi Dodamani's website. Read our terms and conditions for using our services."
        keywords="terms of service, terms and conditions, legal"
        url="/terms-of-service"
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
            <Gavel sx={{ fontSize: 60, color: 'primary.main', marginBottom: '16px' }} />
            <Typography variant="h3" color="primary" gutterBottom>
              Terms of Service
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Legal Agreement
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
              <Description color="primary" />
              Agreement to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms of Service ("Terms") govern your use of the website and services operated by Laxmi Dodamani 
              ("we," "us," or "our"). By accessing or using our website and services, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, you may not access our services.
            </Typography>
            <Typography variant="body1">
              These Terms apply to all visitors, users, and others who access or use our services.
            </Typography>
          </Paper>

          {/* Services */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business color="primary" />
              Our Services
            </Typography>
            <Typography variant="body1" paragraph>
              We provide the following services:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Insurance Services:</strong> LIC and Star Health insurance consultation, policy management, and claim assistance
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Food Products:</strong> Traditional homemade delicacies through Dareshwar Kitchen
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Consultation:</strong> Expert advice and support for insurance and food products
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                <strong>Customer Support:</strong> Assistance with inquiries, orders, and service-related matters
              </Typography>
            </ul>
          </Paper>

          {/* Use License */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Use License
            </Typography>
            <Typography variant="body1" paragraph>
              Permission is granted to temporarily access the materials on Laxmi Dodamani's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Modify or copy the materials for commercial purposes
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Use the materials for any commercial purpose or public display
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Attempt to reverse engineer any software contained on the website
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Remove any copyright or other proprietary notations from the materials
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Transfer the materials to another person or "mirror" the materials on any other server
              </Typography>
            </ul>
            <Typography variant="body1">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated 
              by Laxmi Dodamani at any time.
            </Typography>
          </Paper>

          {/* User Responsibilities */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              User Responsibilities
            </Typography>
            <Typography variant="body1" paragraph>
              When using our services, you agree to:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Provide accurate and complete information when required
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Maintain the security of your account and information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Use our services in compliance with applicable laws and regulations
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Not engage in any activity that could harm our systems or other users
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Respect intellectual property rights and not infringe on our or others' rights
              </Typography>
            </ul>
          </Paper>

          {/* Intellectual Property */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Intellectual Property Rights
            </Typography>
            <Typography variant="body1" paragraph>
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of Laxmi Dodamani and its licensors. The Service is protected by copyright, trademark, and other laws.
            </Typography>
            <Typography variant="body1" paragraph>
              Our trademarks and trade dress may not be used in connection with any product or service without our prior 
              written consent.
            </Typography>
          </Paper>

          {/* Disclaimer */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Warning color="primary" />
              Disclaimer
            </Typography>
            <Typography variant="body1" paragraph>
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              Laxmi Dodamani excludes all representations, warranties, conditions and terms whether express or implied.
            </Typography>
            <Typography variant="body1" paragraph>
              We make no warranties about:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                The completeness, accuracy, reliability, suitability, or availability of the information
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                The website or the information, products, services, or related graphics contained on the website
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Uninterrupted or error-free operation of the website
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                The correction of any errors or defects in the website
              </Typography>
            </ul>
          </Paper>

          {/* Limitations */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Limitations of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              In no event shall Laxmi Dodamani, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </Typography>
            <ul style={{ paddingLeft: '32px', marginBottom: '24px' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Your use or inability to use the Service
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Any unauthorized access to or use of our servers and/or any personal information stored therein
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Any interruption or cessation of transmission to or from the Service
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service
              </Typography>
            </ul>
          </Paper>

          {/* Privacy */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Security color="primary" />
              Privacy and Data Protection
            </Typography>
            <Typography variant="body1" paragraph>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices regarding the collection and use of your personal information.
            </Typography>
            <Typography variant="body1">
              By using our Service, you consent to the collection and use of information in accordance with our Privacy Policy.
            </Typography>
          </Paper>

          {/* Termination */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Termination
            </Typography>
            <Typography variant="body1" paragraph>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms.
            </Typography>
            <Typography variant="body1" paragraph>
              Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, 
              you may simply discontinue using the Service.
            </Typography>
          </Paper>

          {/* Governing Law */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. 
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </Typography>
            <Typography variant="body1">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions 
              of these Terms will remain in effect.
            </Typography>
          </Paper>

          {/* Changes */}
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
              material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </Typography>
            <Typography variant="body1">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use 
              our Service after those revisions become effective, you agree to be bound by the revised terms.
            </Typography>
          </Paper>

          {/* Contact */}
          <Paper sx={{ p: 4, mb: 4, bgcolor: 'primary.50' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ContactSupport color="primary" />
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about these Terms of Service, please contact us:
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

          {/* Acknowledgment */}
          <Paper sx={{ p: 4, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Acknowledgment
            </Typography>
            <Typography variant="body1">
              By using our Service, you acknowledge that you have read these Terms of Service and agree to be bound by them. 
              If you do not agree to these terms, please do not use our Service.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
};

export default TermsOfService; 