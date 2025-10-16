import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import React from 'react'

const Categories = () => {
    // Category data with icons (you can replace with actual icons)
    const categories = [
        {
            title: "Company Interview",
            icon: "💼" // Replace with actual icon component
        },
        {
            title: "JD Based Interview", 
            icon: "📋" // Replace with actual icon component
        },
        {
            title: "Communication Skills",
            icon: "💬" // Replace with actual icon component
        },
        {
            title: "Resume Builder",
            icon: "📄" // Replace with actual icon component
        }
        // Add more categories as needed
    ];

    return (
        <>
            <Box sx={{ bgcolor: '#fff', minHeight: '400px' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ py: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                mb: { xs: 4, md: 8 },
                                color: '#000',
                                fontSize: '48px',
                            }}
                        >
                            Browse by category
                        </Typography>

                        {/* Category Cards Grid */}
                        <Grid container spacing={6} >
                            {categories.map((category, index) => (
                                <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                                    <Card 
                                        sx={{ 
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: {md:'center'},
                                            justifyContent: {md:'center',xs:"center"},
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '21px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                            },
                                            width:"250px",
                                            bgcolor:"#DDF2FF"
                                        }}
                                    >
                                        <CardContent sx={{ 
                                            p: 2, 
                                            textAlign: 'center',
                                            '&:last-child': { pb: 2 },
                                            display:"flex",
                                            justifyContent:"center",
                                            alignItems:"center"
                                        }}>
                                            {/* Icon */}
                                            <Box sx={{ 
                                                fontSize: '40px', 
                                                mb: 2,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                {category.icon}
                                            </Box>
                                            
                                            {/* Category Title */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: '#000',
                                                    fontSize: '16px',
                                                    lineHeight: 1.2,
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {category.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Categories