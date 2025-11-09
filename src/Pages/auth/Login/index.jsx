// src/Pages/SignIn.jsx

import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../Redux/userSlice";

const MotionCard = motion(Card);

const SignIn = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://mycvi.adretsoftware.in/admin/api/login-user",
        values
      );

      console.log(res, "login");

      if (res.status === 200) {
        toast.success(res?.data?.message || "Login successful! 🎉");
        const userData = res?.data?.user
        // ✅ Store user data or token in localStorage
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);

        // ✅ Navigate after successful login
        
        dispatch(setUserData(userData))
        navigate("/dashboard");
        // ✅ Clear form fields
        setValues({ email: "", password: "" });
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err?.response?.data?.message || "Login failed! Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0B1120",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="xs" sx={{ px: { xs: 1, sm: 2 } }}>
        <MotionCard
          elevation={8}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0 12px 32px 0 rgba(118, 75, 162, 0.45)",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
              textAlign: "center",
              color: "#fff",
              letterSpacing: 1.2,
              pb: 3,
              fontSize: { xs: "24px", md: "30px" },
            }}
          >
            Sign In
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="email"
                label="Email Address"
                type="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: "#764ba2" }} />,
                }}
                sx={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 2,
                  input: { color: "#fff" },
                  label: { color: "#d1c4e9" },
                  "& .MuiOutlinedInput-root": { color: "#fff" },
                }}
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  startAdornment: <Lock sx={{ mr: 1, color: "#764ba2" }} />,
                }}
                sx={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 2,
                  input: { color: "#fff" },
                  label: { color: "#d1c4e9" },
                  "& .MuiOutlinedInput-root": { color: "#fff" },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  background:
                    "linear-gradient(90deg, #764ba2 30%, #667eea 90%)",
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 5px 15px rgba(118, 75, 162, 0.6)",
                  py: 1,
                  mt: 1,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #5f3b95 30%, #5461d3 90%)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Sign In"
                )}
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.25)" }} />

          <Typography
            align="center"
            sx={{ mb: 1, color: "#d1c4e9", fontSize: 14 }}
          >
            Sign in with
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            {[FacebookIcon, GoogleIcon, TwitterIcon, InstagramIcon].map(
              (Icon, i) => (
                <IconButton
                  key={i}
                  size="large"
                  sx={{
                    color: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <Icon />
                </IconButton>
              )
            )}
          </Stack>

          <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.15)" }} />

          <Typography align="center" sx={{ color: "#c5cae9", fontSize: 14 }}>
            Don't have an account?{" "}
            <Button
              color="secondary"
              sx={{
                p: 0,
                fontSize: 14,
                textTransform: "none",
                fontWeight: 600,
                color: "#bb86fc",
              }}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </Typography>
        </MotionCard>
      </Container>
    </Box>
  );
};

export default SignIn;
