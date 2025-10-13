import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import resumeSample from "../../../Images/cv-builder.png"; // <-- update path if needed

const CvBuilder = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 8 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontSize: "42px",
            fontWeight: 700,
            textAlign: "center",
            mb: 10,
            lineHeight: "120%",
          }}
        >
          CVI Easiest and most feature-packed CV builder available
        </Typography>

        {/* Content Grid */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: "#E8F4FF",
                borderRadius: "30px",
                p: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "500px",
              }}
            >
              <Box
                component="img"
                src={resumeSample}
                alt="Resume Example"
                sx={{
                  width: "80%",
                  maxWidth: "400px",
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "10px",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", pl: 4 }}>
              {/* Dotted Line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 4,
                  left: 4,
                  width: "2px",
                  height: "66%",
                  borderLeft: "2px dashed #d8e0ea",
                }}
              />

              {/* Step 1 */}
              <Box sx={{ mb: 5, position: "relative" }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: "#E8F4FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                    position: "absolute",
                    left: -46,
                    top: "4px",
                    color: "#2D8CFF",
                    fontSize: "14px",
                  }}
                >
                  1
                </Box>
                <Typography
                  sx={{
                    color: "#2D8CFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  STEP 1
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Choose a stylish template
                </Typography>
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "15px",
                    lineHeight: "150%",
                    maxWidth: "420px",
                  }}
                >
                  Select one of the recruiter-approved templates designed specifically
                  to always make it past the screening stage.
                </Typography>
              </Box>

              {/* Step 2 */}
              <Box sx={{ mb: 5, position: "relative" }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: "#E8F4FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                    position: "absolute",
                    left: -46,
                    top: "4px",
                    color: "#2D8CFF",
                    fontSize: "14px",
                  }}
                >
                  2
                </Box>
                <Typography
                  sx={{
                    color: "#2D8CFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  STEP 2
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Customize each section
                </Typography>
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "15px",
                    lineHeight: "150%",
                    maxWidth: "420px",
                  }}
                >
                  Add details about your experience, education, and skills with one
                  click. Need more sections? We’ve got plenty.
                </Typography>
              </Box>

              {/* Step 3 */}
              <Box sx={{ mb: 5, position: "relative" }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: "#E8F4FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                    position: "absolute",
                    left: -46,
                    top: "4px",
                    color: "#2D8CFF",
                    fontSize: "14px",
                  }}
                >
                  3
                </Box>
                <Typography
                  sx={{
                    color: "#2D8CFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  STEP 3
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Download your resume in seconds
                </Typography>
                <Typography
                  sx={{
                    color: "#6b7280",
                    fontSize: "15px",
                    lineHeight: "150%",
                    maxWidth: "420px",
                    mb: 3,
                  }}
                >
                  You’ve saved hours on resume creation—now use that extra time to
                  prepare for job interviews and shine on them.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FF7A00",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "6px",
                    px: 3,
                    py: 1,
                    "&:hover": {
                      bgcolor: "#E96C00",
                    },
                  }}
                >
                  Create my resume now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CvBuilder;
