import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const MyEarnings = () => {
  return (
    <Box
      sx={{
        minHeight: {sm:"80vh",xs:"70vh"},
        width: {sm:"100%",xs:"91.5%"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f2937, #111827)",
        color: "#fff",
        textAlign: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, rgba(123,97,255,0.15), rgba(76,201,240,0.15))",
            boxShadow: "0px 0px 25px rgba(0,0,0,0.4)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.8rem" },
              background:
                "linear-gradient(90deg, #7B61FF 0%, #4CC9F0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeIn 1.2s ease-in-out",
            }}
          >
            Coming Soon 🚀
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              animation: "fadeIn 1.6s ease-in-out",
            }}
          >
            We’re working hard to bring you something amazing.<br />
            Stay tuned for updates!
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              background:
                "linear-gradient(90deg, #7B61FF 0%, #4CC9F0 100%)",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "12px",
              textTransform: "none",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #4CC9F0 0%, #7B61FF 100%)",
              },
            }}
          >
            Notify Me
          </Button>
        </Box>
      </Container>

      {/* 🔹 Keyframes for animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default MyEarnings;
