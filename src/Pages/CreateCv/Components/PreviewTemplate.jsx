import React from "react";
import {
  Box,
  Container,
  
 Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import profileImg from "../../../Images/resume.png"; // replace with your actual image

const PreviewTemplate = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#f8f9fb" }}>
      <Container maxWidth="lg">
        {/* Use CSS Grid here to get precise control and avoid Grid API mismatch */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "7fr 5fr",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE - CV PREVIEW */}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              component="img"
              src={profileImg}
              alt="CV Template Preview"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "700px",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </Box>

          {/* RIGHT SIDE - INFO + SUBSCRIBE */}
          <Box sx={{marginLeft:{md:"30px",xs:"0px"}}}>
            <Card
              sx={{
                mb: 3,
                boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                borderRadius: "12px",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography variant="body1" mb={3} color="#444">
                  Create a modern, eye-catching CV with our easy-to-use
                  templates. Whether you are a fresher or an experienced
                  professional, showcase your skills, achievements, and
                  experience in the best way possible.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#1976d2",
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#125ea7" },
                  }}
                >
                  Try This Template
                </Button>
              </CardContent>
            </Card>

            <Card
              sx={{
                boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                borderRadius: "12px",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography variant="h6" mb={2}>
                  Subscribe
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Your Email"
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#1976d2",
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#125ea7" },
                  }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PreviewTemplate;
