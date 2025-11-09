import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MotionCard = motion(Card);

const SignUp = () => {
  const [form, setForm] = useState({
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    phone: "9898765432",
    password: "123456",
    state: "Gujarat",
    city: "Ahmedabad",
    address: "Navrangpura",
    preferred_location: "Ahmedabad,Surat",
  });

  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      "https://mycvi.adretsoftware.in/admin/api/submit-user",
      form
    );

    if (res.status === 201) {
      toast.success(res?.data?.message || "Registration successful! 🎉");
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        state: "",
        city: "",
        address: "",
        preferred_location: "",
      });
      navigate("/signin"); // optional: redirect after successful signup
    }
  } catch (err) {
    console.error(err);
    toast.error(
      err?.response?.data?.message || "Registration failed! Please try again."
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
        padding: "60px",
      }}
    >
      <Box sx={{ minWidth: { xs: "330px", sm: "480px" } }}>
        <MotionCard
          elevation={8}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            p: { xs: "15px", sm: "30px" },
            borderRadius: 3,
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 12px 32px rgba(118,75,162,0.45)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              textAlign: "center",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "text" },
                { label: "Password", name: "password", type: "password" },
                { label: "State", name: "state", type: "text" },
                { label: "City", name: "city", type: "text" },
                { label: "Address", name: "address", type: "text" },
                {
                  label: "Preferred Location",
                  name: "preferred_location",
                  type: "text",
                },
              ].map(({ label, name, type }) => (
                <TextField
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  fullWidth
                  required={
                    name !== "state" &&
                    name !== "city" &&
                    name !== "address" &&
                    name !== "preferred_location"
                  }
                  InputLabelProps={{ sx: { color: "#d1c4e9" } }}
                  sx={{
                    input: { color: "#fff" },
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 2,
                  }}
                />
              ))}
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
                  mt: 2,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #5f3b95 30%, #5461d3 90%)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.25)" }} />

          <Typography
            align="center"
            sx={{ mb: 1, color: "#d1c4e9", fontSize: 14 }}
          >
            Register with
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
            <IconButton
              size="large"
              sx={{
                color: "#1877f2",
                bgcolor: "rgba(24, 119, 242, 0.1)",
                borderRadius: 2,
                "&:hover": { bgcolor: "rgba(24, 119, 242, 0.2)" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: "#ea4335",
                bgcolor: "rgba(234, 67, 53, 0.1)",
                borderRadius: 2,
                "&:hover": { bgcolor: "rgba(234, 67, 53, 0.2)" },
              }}
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: "#1da1f2",
                bgcolor: "rgba(29, 161, 242, 0.1)",
                borderRadius: 2,
                "&:hover": { bgcolor: "rgba(29, 161, 242, 0.2)" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                color: "#e1306c",
                bgcolor: "rgba(225, 48, 108, 0.1)",
                borderRadius: 2,
                "&:hover": { bgcolor: "rgba(225, 48, 108, 0.2)" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>

          <Typography align="center" sx={{ color: "#c5cae9", fontSize: 14 }}>
            Already have an account?{" "}
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
              to="/signin"
            >
              Sign In
            </Button>
          </Typography>
        </MotionCard>
      </Box>
    </Box>
  );
};

export default SignUp;
