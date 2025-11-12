import React from 'react'
import { Box, Container, Button, Typography, Card } from '@mui/material'
import FeaturesCard from './FeaturesCard'

import Template1 from '../../../Images/resume.png'
import Template2 from '../../../Images/resume2.png'
import Template3 from '../../../Images/resume3.png'

const Templates = () => {
  return (
    <>
      <Box>
        <Container maxWidth='lg'>
          <Box sx={{ padding: "80px 0px" }}>
            {/* Colorful dots */}
            <Box sx={{ display: 'flex', gap: '8px', mb: 3, justifyContent: "center" }}>
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

            <Typography
              component='h2'
              sx={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#13257e",
                textAlign: "center",
                lineHeight: "120%",
                letterSpacing: "0%",
                marginBottom: "10px"
              }}
            >
              Our Creative Templates
            </Typography>

            <Box sx={{ justifyContent: "center", display: "flex", padding: "15px 0px" }}>
              <Typography
                component='h2'
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#888888",
                  textAlign: "center",
                  lineHeight: "35px",
                  letterSpacing: "0%",
                  marginBottom: "10px",
                  maxWidth: { sm: "60%", xs: "100%" }
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>

            {/* 🔹 Three Cards in a Row (Added Section) */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)"
                },
                gap: 4,
                mt: 4
              }}
            >
              {[
                {
                  img: Template1,
                  linkSee: "https://mycvi.adretsoftware.in/cv/templates.html",
                  linkUse: "https://mycvi.adretsoftware.in/cv/templates.html"
                },
                {
                  img: Template2,
                  linkSee: "https://mycvi.adretsoftware.in/cv/templates.html",
                  linkUse: "https://mycvi.adretsoftware.in/cv/templates.html"
                },
                {
                  img: Template3,
                  linkSee: "https://mycvi.adretsoftware.in/cv/templates.html",
                  linkUse: "https://mycvi.adretsoftware.in/cv/templates.html"
                }
              ].map((template, index) => (
                <Card
                  key={index}
                  sx={{
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    textAlign: "center",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" }
                  }}
                >
                  <Box
                    component="img"
                    src={template.img}
                    alt={`Template ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      background: "#fff",
                      py: 2,
                      flexWrap: "wrap"
                    }}
                  >
                    <Button
                      onClick={() => window.open(template.linkSee, "_blank")}
                      sx={{
                        border: "2px solid #3B82F6",
                        color: "#3B82F6",
                        borderRadius: "30px",
                        px: 3,
                        py: 0.8,
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": { background: "#3B82F6", color: "#fff" }
                      }}
                    >
                      SEE TEMPLATE →
                    </Button>
                    <Button
                      onClick={() => window.open(template.linkUse, "_blank")}
                      sx={{
                        border: "2px solid #3B82F6",
                        color: "#3B82F6",
                        borderRadius: "30px",
                        px: 3,
                        py: 0.8,
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": { background: "#3B82F6", color: "#fff" }
                      }}
                    >
                      USE TEMPLATE →
                    </Button>
                  </Box>
                </Card>
              ))}
            </Box>
            {/* 🔹 End of Cards */}

            {/* Bottom Colorful dots */}
            <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center', mt: 5 }}>
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

          {/* features card component  */}
          <FeaturesCard />
        </Container>
      </Box>
    </>
  )
}

export default Templates
