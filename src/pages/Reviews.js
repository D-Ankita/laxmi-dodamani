import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, Rating, Box, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Send } from '@mui/icons-material';
import SEO from '../components/SEO';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    rating: 5,
    review: '',
  });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: '', message: '' });
  const [fetchingReviews, setFetchingReviews] = useState(true);

  // Airtable configuration - User will add their details here
  const AIRTABLE_CONFIG = {
    baseId: process.env.REACT_APP_AIRTABLE_BASE_ID || 'YOUR_BASE_ID',
    tableId: process.env.REACT_APP_AIRTABLE_TABLE_ID || 'YOUR_TABLE_ID',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY || 'YOUR_API_KEY',
  };

  // Fetch approved reviews from Airtable
  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReviews = async () => {
    try {
      // Check if Airtable is configured
      if (AIRTABLE_CONFIG.baseId === 'YOUR_BASE_ID') {
        // Show demo reviews if Airtable not configured yet
        setReviews([
          {
            id: '1',
            name: 'Rajesh Kumar',
            service: 'LIC Services',
            rating: 5,
            review: 'Excellent service! Laxmi helped me get the best insurance plan for my family. Very professional and knowledgeable.',
            date: '2024-01-15',
          },
          {
            id: '2',
            name: 'Priya Sharma',
            service: 'Dareshwar Kitchen',
            rating: 5,
            review: 'The homemade ladoos are amazing! Just like my grandmother used to make. Fresh, authentic, and delicious!',
            date: '2024-01-10',
          },
          {
            id: '3',
            name: 'Amit Desai',
            service: 'Star Health Insurance',
            rating: 5,
            review: 'Quick and hassle-free health insurance process. Laxmi explained everything clearly and helped with claim settlement.',
            date: '2024-01-05',
          },
        ]);
        setFetchingReviews(false);
        return;
      }

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableId}?filterByFormula={Approved}=1`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_CONFIG.apiKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const formattedReviews = data.records.map(record => ({
          id: record.id,
          name: record.fields.Name,
          service: record.fields.Service,
          rating: record.fields.Rating,
          review: record.fields.Review,
          date: record.fields.Date || record.createdTime,
        }));
        setReviews(formattedReviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setFetchingReviews(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      rating: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ show: false, type: '', message: '' });

    try {
      // Check if Airtable is configured
      if (AIRTABLE_CONFIG.baseId === 'YOUR_BASE_ID') {
        // Demo mode - just show success message
        setTimeout(() => {
          setLoading(false);
          setSubmitStatus({
            show: true,
            type: 'success',
            message: 'Thank you for your review! It will be published after approval. (Demo Mode - Airtable not configured yet)',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            rating: 5,
            review: '',
          });
        }, 1000);
        return;
      }

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${AIRTABLE_CONFIG.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              Name: formData.name,
              Email: formData.email,
              Phone: formData.phone,
              Service: formData.service,
              Rating: formData.rating,
              Review: formData.review,
              Date: new Date().toISOString().split('T')[0],
              Approved: false, // Default to not approved
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          show: true,
          type: 'success',
          message: 'Thank you for your review! It will be published after approval.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          rating: 5,
          review: '',
        });
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      setSubmitStatus({
        show: true,
        type: 'error',
        message: 'Failed to submit review. Please try again or contact us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Customer Reviews & Testimonials - Laxmi Dodamani"
        description="Read customer reviews and share your experience with our insurance services and homemade delicacies in Vijayapura, Karnataka."
        keywords="customer reviews, testimonials, LIC reviews, Star Health reviews, Dareshwar Kitchen reviews, Vijayapura"
        canonical="https://laxmi-dodamani.github.io/reviews"
      />

      <Box sx={{ minHeight: '100vh', background: 'var(--bg-primary)', pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box className="page-hero" sx={{ textAlign: 'center', mb: 6 }}>
              <Star sx={{ fontSize: 60, color: 'var(--primary-gold)', mb: 2 }} />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Customer Reviews
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Share your experience and read what our customers say
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Submit Review Form */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    p: 4,
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-2xl)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                    Share Your Experience
                  </Typography>

                  {submitStatus.show && (
                    <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
                      {submitStatus.message}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      select
                      label="Service Used"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="LIC Services">LIC Services</option>
                      <option value="Star Health Insurance">Star Health Insurance</option>
                      <option value="Dareshwar Kitchen">Dareshwar Kitchen</option>
                    </TextField>

                    <Box sx={{ mb: 3 }}>
                      <Typography component="legend" sx={{ mb: 1 }}>
                        Your Rating
                      </Typography>
                      <Rating
                        name="rating"
                        value={formData.rating}
                        onChange={handleRatingChange}
                        size="large"
                      />
                    </Box>

                    <TextField
                      fullWidth
                      label="Your Review"
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      sx={{ mb: 3 }}
                      placeholder="Tell us about your experience..."
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                      sx={{
                        background: 'var(--gradient-primary)',
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'var(--gradient-secondary)',
                          transform: 'translateY(-2px)',
                          boxShadow: 'var(--shadow-xl)',
                        },
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </Grid>

            {/* Display Reviews */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  What Our Customers Say
                </Typography>

                {fetchingReviews ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                    <CircularProgress />
                  </Box>
                ) : reviews.length > 0 ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {reviews.map((review, index) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card
                          sx={{
                            p: 3,
                            background: 'var(--bg-card)',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'var(--transition-normal)',
                            '&:hover': {
                              boxShadow: 'var(--shadow-xl)',
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {review.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {review.service}
                              </Typography>
                            </Box>
                            <CheckCircle sx={{ color: 'var(--primary-gold)' }} />
                          </Box>

                          <Rating value={review.rating} readOnly size="small" sx={{ mb: 2 }} />

                          <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            "{review.review}"
                          </Typography>

                          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                            {new Date(review.date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </Typography>
                        </Card>
                      </motion.div>
                    ))}
                  </Box>
                ) : (
                  <Card sx={{ p: 4, textAlign: 'center', borderRadius: 'var(--radius-xl)' }}>
                    <Star sx={{ fontSize: 48, color: 'var(--text-muted)', mb: 2 }} />
                    <Typography color="text.secondary">
                      No reviews yet. Be the first to share your experience!
                    </Typography>
                  </Card>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;

