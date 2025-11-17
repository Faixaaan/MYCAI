import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SubscriptionPlan = () => {
  return (
    <>
      <Box sx={{ background: "#f4f2ff", padding: "60px 0px" }}>
        <Container maxWidth="md">
          {/* Page Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Choose Your Subscription Plan
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#666",
              marginBottom: "40px",
              fontSize: "17px",
            }}
          >
            Select the plan that best fits your resume-building needs.
          </Typography>

          <Grid container spacing={4} justifyContent="center">

            {/* BASIC PLAN */}
            <Grid item xs={12} sm={10} md={6}>
              <Card
                sx={{
                  padding: "25px",
                  borderRadius: "18px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.07)",
                  background: "#fff",
                  height: "100%",
                  mb:{xs:"80px",md:"0px"}
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Basic
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      marginBottom: "8px",
                      mt: 1,
                      fontSize: { xs: "32px", md: "38px" },
                    }}
                  >
                    £ 69
                    <span style={{ fontSize: "18px", color: "#777" }}>/mo</span>
                  </Typography>

                  <Typography sx={{ color: "#777", marginBottom: "20px" }}>
                    83% OFF – Perfect for beginners & students
                  </Typography>

                  <Divider sx={{ marginBottom: "20px" }} />

                  <List dense>
                    {[
                      "Create 1 Resume",
                      "Basic Templates Access",
                      "Free SSL for Data Safety",
                      "Download in PDF",
                      "Email Support",
                    ].map((item, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "#6e55ff" }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      padding: "12px",
                      borderRadius: "12px",
                      fontWeight: 700,
                      mt: 2,
                    }}
                  >
                    Choose Basic
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* PREMIUM PLAN */}
            <Grid item xs={12} sm={10} md={6}>
              <Card
                sx={{
                  padding: "25px",
                  borderRadius: "18px",
                  border: "3px solid #7b4fff",
                  boxShadow: "0px 5px 30px rgba(123, 79, 255, 0.25)",
                  background: "#fff",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#7b4fff",
                    }}
                  >
                    Premium (Most Popular)
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      marginBottom: "8px",
                      mt: 1,
                      color: "#7b4fff",
                      fontSize: { xs: "32px", md: "38px" },
                    }}
                  >
                    £ 129
                    <span style={{ fontSize: "18px", color: "#777" }}>/mo</span>
                  </Typography>

                  <Typography sx={{ color: "#777", marginBottom: "20px" }}>
                    80% OFF + 3 Months Free
                  </Typography>

                  <Divider sx={{ marginBottom: "20px" }} />

                  <List dense>
                    {[
                      "Unlimited Resume Downloads",
                      "40+ Premium Templates",
                      "AI Resume Builder Included",
                      "Advanced Editing Tools",
                      "Priority 24/7 Support",
                      "Access to Cover Letter Builder",
                      "Remove Watermark",
                    ].map((item, i) => (
                      <ListItem key={i} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "#7b4fff" }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      padding: "12px",
                      borderRadius: "12px",
                      fontWeight: 700,
                      mt: 2,
                      background: "#7b4fff",
                      ":hover": { background: "#6938ff" },
                    }}
                  >
                    Choose Premium
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Terms Section */}
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "center",
              marginTop: "100px",
              color: "#666",
            }}
          >
            * Prices include discount. Subscription auto-renews unless cancelled.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default SubscriptionPlan;
