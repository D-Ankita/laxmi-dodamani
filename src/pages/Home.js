import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Restaurant, 
  Security, 
  Star, 
  EmojiEvents,
  Business,
  Favorite
} from '@mui/icons-material';
import SEO from '../components/SEO';

const Home = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = useMemo(() => [
    "Insurance Expert",
    "Traditional Food Entrepreneur", 
    "LIC Specialist",
    "Star Health Advisor",
    "Homemade Delicacies"
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
    "@type": "LocalBusiness",
    "name": "Laxmi Dodamani",
    "description": "Insurance services and homemade traditional delicacies in Vijayapura, Karnataka",
    "url": "https://laxmi-dodamani.netlify.app",
    "telephone": "",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LIC Insurance Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Star Health Insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dareshwar Kitchen - Homemade Delicacies"
          }
        }
      ]
    }
  };

  const techStack = [
    "Insurance Expertise", "LIC Services", "Star Health", "Policy Management",
    "Claim Settlement", "Traditional Cooking", "Homemade Delicacies", "Customer Service",
    "Financial Planning", "Health Insurance", "Life Insurance", "Bulk Orders"
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
        title="Insurance Services & Homemade Delicacies"
        description="Laxmi Dodamani offers 20+ years of insurance expertise in LIC and Star Health services, plus traditional homemade delicacies through Dareshwar Kitchen. Get expert insurance consultation and authentic homemade food in Vijayapura."
        keywords="LIC services, Star Health insurance, homemade ladoos, traditional food, insurance consultation, Vijayapura, Karnataka, Dareshwar Kitchen"
        url="/"
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
            {/* Main Name with Enhanced Typography */}
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
                  background: 'var(--trust-500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                Laxmi Dodamani
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
                  style={{ color: 'var(--trust-500)' }}
                >
                  |
                </motion.span>
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
                  background: 'var(--trust-100)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    background: 'var(--trust-500)',
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
                  20+ Years of Trusted Service
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.span>
                </Typography>
              </motion.div>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div
              variants={textVariants}
              style={{ marginBottom: '40px' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  background: 'var(--surface-200)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Business sx={{ fontSize: '2rem', color: 'primary.main' }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    background: 'var(--trust-500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Expertise & Skills
                </Typography>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginBottom: '80px' }}
        >
          {/* <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="h4" color="primary" gutterBottom>
              <Business sx={{ marginRight: '12px', fontSize: '2rem' }} />
              Expertise & Skills
            </Typography>
          </motion.div> */}
          
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="tech-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginBottom: '80px' }}
        >
          <motion.div variants={itemVariants}>
            <Card className="service-card" sx={{ 
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* <motion.div
                style={{ marginBottom: '32px' }}
              >
                <Psychology sx={{ fontSize: '4rem', color: 'primary.main', marginBottom: '16px' }} />
              </motion.div> */}
              
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                About Me
              </Typography>
              
              <Typography variant="h6" color="text.secondary" paragraph sx={{ lineHeight: 1.8, marginBottom: '32px' }}>
                Hello! I'm Laxmi Dodamani, a dedicated professional with over 20 years of experience in the insurance sector. 
                I specialize in LIC and Star Health services, helping families secure their future with the right insurance solutions.
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                In 2015, I expanded my horizons by founding Dareshwar Kitchen, bringing the authentic taste of traditional 
                homemade delicacies to your doorstep. Every product is crafted with pure ghee and premium ingredients, 
                ensuring quality and taste in every bite.
              </Typography>
            </Card>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ marginBottom: '80px' }}>
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card className="service-card" sx={{ 
                height: '100%',
                padding: '32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <motion.div
                  style={{ marginBottom: '24px' }}
                >
                  <Restaurant sx={{ fontSize: '3rem', color: 'secondary.main', marginBottom: '16px' }} />
                </motion.div>
                
                <Typography variant="h5" gutterBottom color="secondary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                  Dareshwar Kitchen
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  Traditional homemade delights specializing in healthy ladoos, made with pure ghee & premium ingredients. 
                  Bulk orders welcome with home delivery available.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card className="service-card" sx={{ 
                height: '100%',
                padding: '32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <motion.div
                  style={{ marginBottom: '24px' }}
                >
                  <Security sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
                </motion.div>
                
                <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                  LIC Services
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  Expert policy consultation, claim settlement, policy renewal, nomination changes, 
                  maturity handling, and death claim support with 20+ years experience.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card className="service-card" sx={{ 
                height: '100%',
                padding: '32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <motion.div
                  style={{ marginBottom: '24px' }}
                >
                  <Star sx={{ fontSize: '3rem', color: 'primary.main', marginBottom: '16px' }} />
                </motion.div>
                
                <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 700, marginBottom: '16px' }}>
                  Star Health Services
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  Comprehensive health insurance consultation, policy recommendations, claim settlement, 
                  policy renewal, and cashless hospital process with 24/7 support.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Recognition Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginBottom: '80px' }}
        >
          <motion.div variants={itemVariants}>
            <Card className="service-card" sx={{ 
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{ marginBottom: '32px' }}
              >
                <EmojiEvents sx={{ fontSize: '4rem', color: 'primary.main', marginBottom: '16px' }} />
              </motion.div>
              
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                Recognition & Experience
              </Typography>
              
              <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                With numerous awards and accolades in the insurance sector, I take pride in providing 
                reliable and trustworthy services to my clients. My commitment to excellence extends 
                to both insurance solutions and culinary creations.
              </Typography>
            </Card>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <motion.div variants={itemVariants}>
            <Card className="service-card" sx={{ 
              padding: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{ marginBottom: '32px' }}
              >
                <Favorite sx={{ fontSize: '4rem', color: 'secondary.main', marginBottom: '16px' }} />
              </motion.div>
              
              <Typography variant="h3" color="secondary" gutterBottom sx={{ fontWeight: 700, marginBottom: '24px' }}>
                Ready to Get Started?
              </Typography>
              
              <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, marginBottom: '32px' }}>
                Let's discuss your insurance needs or place an order for delicious homemade delicacies. 
                I'm here to help you make the best choices for your family's future.
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
                Contact Me Today
              </motion.button>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};

export default Home; 