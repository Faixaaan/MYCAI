import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import FeaturesCard from './FeaturesCard';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {

    const navigate = useNavigate()
    return (
        <>
            <Box>
                <Container maxWidth='lg'>
                    <Box sx={{ padding: "80px 0px" }}>
                        {/* Colorful dots */}
                        <Box sx={{ display: 'flex', gap: '8px', mb: 3 }}>
                            {['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'].map((color, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: color
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Three Cards in a Row */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 4,
                                mb: 6,
                                flexDirection: { xs: 'column', md: 'row' }
                            }}
                        >
                            {/* Our Pricing Card */}
                            <Card
                                sx={{
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    flex: 1,
                                    p: 4
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#1e40af',
                                        fontWeight: 700,
                                        mb: 3,
                                        fontSize: { xs: '1.75rem', md: '2rem' }
                                    }}
                                >
                                    Our Pricing
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#6b7280',
                                        mb: 4,
                                        lineHeight: 1.8,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Build your professional CV effortlessly with flexible plans designed to suit your needs. Whether you're a student, job seeker, or professional, get unlimited access to all premium templates and new updates with your chosen plan.
                                </Typography>

                                {/* CTA Button */}
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#3B82F6',
                                        color: '#3B82F6',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        padding: '12px 32px',
                                        mb: 2,
                                        width: '100%',
                                        '&:hover': {
                                            borderColor: '#2563eb',
                                            backgroundColor: 'rgba(59, 130, 246, 0.04)'
                                        }
                                    }}
                                >
                                    <Box>
                                        <Typography sx={{ fontWeight: 600 }}>Lets Build CV</Typography>
                                        <Typography sx={{ fontSize: '0.875rem' }}>with 7days of Free Trial</Typography>
                                    </Box>
                                </Button>

                                {/* Terms & Conditions */}
                                <Box>
                                    <Typography
                                        sx={{
                                            color: '#3B82F6',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            mb: 0.5
                                        }}
                                    >
                                        Terms & Conditions
                                    </Typography>
                                    <Typography sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                                        subject to change with perior notice
                                    </Typography>
                                </Box>
                            </Card>
                            {/* Monthly Pack */}
                            <Card
                                sx={{
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    position: 'relative',
                                    overflow: 'visible',
                                    flex: 1,
                                    mt: { xs: "20px", sm: "0px" }
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: { sm: '-40px', xs: "-20px" },
                                        right: '20px',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563eb 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontSize: '3rem',
                                            fontWeight: 700,
                                            lineHeight: 1
                                        }}
                                    >
                                        £9.99
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#60D5FF',
                                            fontSize: '1.25rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        / month
                                    </Typography>
                                </Box>

                                <CardContent sx={{ pt: 24, pb: 4, px: 4 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: '#1e40af',
                                            fontWeight: 700,
                                            mb: 2
                                        }}
                                    >
                                        Monthly Pack
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#6b7280',
                                            mb: 3,
                                            lineHeight: 1.7
                                        }}
                                    >
                                        You will be billed per month, and get unlimited access to all resume Templates and new added ones
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderColor: '#3B82F6',
                                            color: '#3B82F6',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            padding: '10px',
                                            fontWeight: 600,
                                            '&:hover': {
                                                borderColor: '#2563eb',
                                                backgroundColor: 'rgba(59, 130, 246, 0.04)'
                                            }
                                        }}
                                        onClick={()=>navigate('/cvi-wallet')}
                                    >
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Yearly Pack */}
                            <Card
                                sx={{
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    position: 'relative',
                                    overflow: 'visible',
                                    flex: 1,
                                    mt: { xs: "20px", sm: "0px" }
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: { sm: '-40px', xs: "-20px" },
                                        right: '20px',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563eb 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontSize: '3rem',
                                            fontWeight: 700,
                                            lineHeight: 1
                                        }}
                                    >
                                        £7.99
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#60D5FF',
                                            fontSize: '1.25rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        / month
                                    </Typography>
                                </Box>

                                <CardContent sx={{ pt: 24, pb: 4, px: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#1e40af',
                                                fontWeight: 700
                                            }}
                                        >
                                            Yearly Pack
                                        </Typography>
                                        <Chip
                                            label="save 20%"
                                            sx={{
                                                backgroundColor: '#DBEAFE',
                                                color: '#2563eb',
                                                fontWeight: 600,
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            color: '#6b7280',
                                            mb: 3,
                                            lineHeight: 1.7
                                        }}
                                    >
                                        You will be billed per Year, and get unlimited access to all resume Templates and new added ones
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderColor: '#3B82F6',
                                            color: '#3B82F6',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            padding: '10px',
                                            fontWeight: 600,
                                            '&:hover': {
                                                borderColor: '#2563eb',
                                                backgroundColor: 'rgba(59, 130, 246, 0.04)'
                                            }
                                        }}
                                         onClick={()=>navigate('/cvi-wallet')}
                                    >
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Bottom Colorful dots */}
                        <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            {['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'].map((color, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: color
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* end card part */}
                    {/* start main features */}

                    <FeaturesCard/>

                </Container>
            </Box>
        </>
    );
};

export default Pricing;