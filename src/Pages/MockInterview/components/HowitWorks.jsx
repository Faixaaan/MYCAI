import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Howitworks from "../../../Images/howitworks.png"; // update path if needed

const steps = [
  {
    id: 1,
    text: "Select your desired role and other interview details to start practicing.",
    active: true,
  },
  {
    id: 2,
    text: "Practice in real-time with live followup questions.",
  },
  {
    id: 3,
    text: "Get actionable feedback based on industry evaluation parameters.",
  },
  {
    id: 4,
    text: "Track and improve your performance through mock practices.",
  },
];

const HowitWorks = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            color: "#000",
            fontSize:"48px"
          }}
        >
          How it works?
        </Typography>

        {/* Responsive Grid Layout */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side - Steps */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                maxWidth: "500px",
              }}
            >
              {steps.map((step) => (
                <Paper
                  key={step.id}
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: "14px",
                    px: 2,
                    py: 1.8,
                    backgroundColor: step.active ? "#E6EEFF" : "#F8F8F8",
                    border: step.active
                      ? "1px solid #B8CEFF"
                      : "1px solid #E0E0E0",
                    transition: "0.3s ease",
                    "&:hover": {
                      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: step.active ? "#fff" : "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {step.id}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#000",
                      fontWeight: step.active ? 500 : 400,
                    }}
                  >
                    {step.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Right Side - Image */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={Howitworks}
              alt="How It Works"
              sx={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowitWorks;
