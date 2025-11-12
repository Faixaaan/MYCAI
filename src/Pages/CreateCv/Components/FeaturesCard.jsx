import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const FeaturesCard = () => {
    return (
        <>
            <Box sx={{ py: { xs: 5, sm: 6, md: 8 }, px: { xs: 2, sm: 4 } }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: { xs: 2, sm: 3, md: 4 },
                    }}
                >

                    {[
                        {
                            icon: "📋",
                            bg: "#FFF4E6",
                            color: "#F59E0B",
                            title: "Proven CV Templates to increase Hiring Chance",
                            desc: "Access a range of industry approved CV templates built to meet professional standards and increase your chances of securing interviews.",
                        },
                        {
                            icon: "🎨",
                            bg: "#E0F2FE",
                            color: "#3B82F6",
                            title: "Creative, Modern and Clean Templates Design",
                            desc: "Leverage a collection of clean and contemporary templates that align with modern recruitment trends.",
                        },
                        {
                            icon: "💻",
                            bg: "#FFE4E6",
                            color: "#EF4444",
                            title: "Easy and Intuitive Online CV and Resume Builder",
                            desc: "Our platform ensures a seamless user experience with an intuitive interface that simplifies CV creation.",
                        },
                        {
                            icon: "🪂",
                            bg: "#D1FAE5",
                            color: "#10B981",
                            title: "Free to use. Developed by hiring professionals.",
                            desc: "Our CV builder is completely free to use and has been developed by experienced hiring professionals.",
                        },
                        {
                            icon: "🎟️",
                            bg: "#FEF3C7",
                            color: "#F59E0B",
                            title: "Recruiter Approved Phrases with Module Notification",
                            desc: "Get access to pre-approved professional phrases and receive module notifications to help you craft the perfect CV.",
                        },
                        {
                            icon: "📱",
                            bg: "#DBEAFE",
                            color: "#3B82F6",
                            title: "Fast Easy CV and Resume Formatting",
                            desc: "Format your CV quickly and easily with our streamlined tools.",
                        },
                    ].map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                borderRadius: "16px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                p: 4,
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                    transform: "translateY(-6px)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    backgroundColor: card.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mx: "auto",
                                    mb: 3,
                                    fontSize: "48px",
                                    color: card.color,
                                }}
                            >
                                {card.icon}
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#1e40af",
                                    fontWeight: 700,
                                    mb: 1.5,
                                    fontSize: "1.1rem",
                                }}
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#9ca3af",
                                    lineHeight: 1.7,
                                    fontSize: "0.95rem",
                                }}
                            >
                                {card.desc}
                            </Typography>
                        </Card>
                    ))}
                </Box>
            </Box>

        </>
    )
}

export default FeaturesCard
