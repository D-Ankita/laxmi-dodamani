import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Security, 
  Assignment, 
  Payment, 
  Support,
  TrendingUp,
  EmojiEvents,
  Psychology,
  Business,
  CheckCircle,
  Star
} from '@mui/icons-material';
import SEO from '../components/SEO';

const LICServices = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = useMemo(() => [
    "LIC Policy Consultation",
    "Claim Settlement Expert", 
    "Policy Renewal Services",
    "Death Claim Support",
    "Maturity Handling"
  ], []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < typingTexts[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === typingTexts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingTexts]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LIC Insurance Services",
    "description": "Comprehensive LIC insurance services including policy consultation, claim settlement, and policy management",
    "url": "https://laxmi-dodamani.netlify.app/lic-services",
    "provider": {
      "@type": "Person",
      "name": "Laxmi Dodamani",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belgaum",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Belgaum"
    },
    "serviceType": "Insurance Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LIC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Policy Consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Claim Settlement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Policy Renewal"
          }
        }
      ]
    }
  };

  const services = [
    {
      icon: Assignment,
      title: "Policy Consultation",
      description: "Expert guidance on choosing the right LIC policy based on your needs and financial goals.",
      features: ["Personalized advice", "Policy comparison", "Financial planning", "Risk assessment"]
    },
    {
      icon: Payment,
      title: "Claim Settlement",
      description: "Assistance with claim processing and settlement for death, maturity, and survival benefits.",
      features: ["Documentation help", "Claim tracking", "Quick processing", "Expert guidance"]
    },
    {
      icon: TrendingUp,
      title: "Policy Renewal",
      description: "Smooth policy renewal process with premium payment assistance and status updates.",
      features: ["Premium reminders", "Online payment", "Status tracking", "Renewal assistance"]
    },
    {
      icon: Support,
      title: "Policy Management",
      description: "Complete policy management including nomination changes, address updates, and more.",
      features: ["Nomination changes", "Address updates", "Policy modifications", "Customer support"]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "20+ Years Experience",
      description: "Decades of experience in LIC services with deep understanding of policies and procedures."
    },
    {
      icon: Star,
      title: "Trusted Advisor",
      description: "Long-term relationships built on trust, transparency, and reliable service delivery."
    },
    {
      icon: Security,
      title: "Secure Process",
      description: "All transactions and data handled with utmost confidentiality and security."
    },
    {
      icon: Support,
      title: "24/7 Support",
      description: "Round-the-clock support for all your insurance-related queries and concerns."
    }
  ];

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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="LIC Insurance Services - Expert Consultation & Claims"
        description="Professional LIC insurance services with 20+ years experience. Expert policy consultation, claim settlement, renewal assistance, and complete policy management in Belgaum."
        keywords="LIC services, insurance consultation, claim settlement, policy renewal, LIC agent, Belgaum, Karnataka"
        url="/lic-services"
        structuredData={structuredData}
      />
      
      <Container maxWidth="xl" ref={containerRef}>
        {/* Enhanced Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y }}
        >
          <motion.div 
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '80px', marginTop: '40px' }}
          >
            {/* Main Icon with Enhanced Typography */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '32px' }}
            >
              <img 
                src="/assets/LIC.png" 
                alt="LIC Logo"
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  objectFit: 'contain',
                  marginBottom: '16px'
                }}
              />
            </motion.div>
            
            {/* Main Title with Enhanced Typography */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '32px' }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 900,
                  marginBottom: '16px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                LIC Insurance Services
              </Typography>
            </motion.div>
            
            {/* Typing Effect Subtitle */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '24px', minHeight: '60px' }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  color: 'text.secondary',
                  opacity: 0.9,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {typingTexts[textIndex].substring(0, charIndex)}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ color: '#3B82F6' }}
                >
                  |
                </motion.span>
              </Typography>
            </motion.div>
            
            {/* Enhanced Description */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '32px' }}
            >
              <Typography 
                variant="h5" 
                color="text.secondary"
                sx={{ 
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  margin: '0 auto 32px',
                  opacity: 0.8
                }}
              >
                Your trusted partner for all LIC insurance needs. With over 20 years of experience, 
                I provide expert guidance on policies, claims, and complete insurance solutions.
              </Typography>
            </motion.div>
            
            {/* Enhanced Experience Badge */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '40px' }}
            >
              <motion.div
                variants={glowVariants}
                animate="animate"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.span>
                  Expert Consultation • Claim Settlement • Policy Management
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.span>
                </Typography>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
                    <div style={{ marginBottom: '24px' }}>
                      <service.icon sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
                    </div>
                    
                    <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary', marginBottom: '20px' }}>
                      {service.description}
                    </Typography>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.features.map((feature, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle sx={{ fontSize: '1rem', color: 'primary.main' }} />
                          {feature}
                        </Typography>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginBottom: '80px' }}
        >
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              <EmojiEvents sx={{ marginRight: '12px', fontSize: '2rem' }} />
              Why Choose Us?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', margin: '0 auto' }}>
              With decades of experience and thousands of satisfied clients, we provide 
              reliable, transparent, and efficient LIC insurance services.
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card className="animated-card" sx={{ height: '100%', padding: '32px', textAlign: 'center' }}>
                    <div style={{ marginBottom: '24px' }}>
                      <benefit.icon sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
                    </div>
                    
                    <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                      {benefit.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                      {benefit.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <motion.div variants={itemVariants}>
            <Card className="animated-card" sx={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* <div style={{ marginBottom: '32px' }}>
                <Psychology sx={{ fontSize: '4rem', color: 'primary.main', marginBottom: '16px' }} />
              </div> */}
              
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                Ready to Secure Your Future?
              </Typography>
              
              <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, marginBottom: '32px' }}>
                Let's discuss your insurance needs and find the perfect LIC policy for you and your family. 
                Get expert advice backed by 20+ years of experience.
              </Typography>
              
              <motion.button
                className="animated-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontSize: '1.1rem',
                  padding: '16px 32px',
                  margin: '0 12px'
                }}
              >
                Contact Now
              </motion.button>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default LICServices; 