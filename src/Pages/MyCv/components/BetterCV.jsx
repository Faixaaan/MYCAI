import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bettercv from '../../../Images/better-cv(1).png'
import betterc2 from '../../../Images/better-cv(2).png'
import betterc3 from '../../../Images/better-cv(3).png'

const BetterCV = () => {

    const cards = [
        {
            img: bettercv,
            title: "Pre-written text & customization",
            desc: "Skip the writing struggle and save time on content, formatting, and design."
        },
        {
            img: betterc2,
            title: "Professional templates",
            desc: "Stand out with clean, modern templates designed for every industry."
        },
        {
            img: betterc3,
            title: "Instant download",
            desc: "Export your resume instantly as PDF or share online in one click."
        }
    ];

    return (
        <>
            <Box sx={{ bgcolor: "#DDF2FF", minHeight: "500px", width: "100%", padding: "60px 0px" }}>
                <Container>
                    <Typography sx={{ textAlign: "center", fontSize: "48px", fontWeight: "600", lineHeight: "138%", letterSpacing: "0%" }}>
                        Why use BetterCV’s free resume builder?
                    </Typography>
                    <Box sx={{ mt: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Grid container spacing={5} justifyContent="space-between">
                            {cards.map((card, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card sx={{
                                        width: "340px",
                                        bgcolor: "transparent",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: "none"
                                    }}>
                                        <img src={card.img} alt={card.title} style={{minHeight:"384px"}} />
                                        <CardContent>
                                            <Typography sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "138%", letterSpacing: "0%", textAlign: "center" }}>
                                                {card.title}
                                            </Typography>
                                            <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "138%", letterSpacing: "0%", mt: 1, textAlign: "center" }}>
                                                {card.desc}
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

export default BetterCV
