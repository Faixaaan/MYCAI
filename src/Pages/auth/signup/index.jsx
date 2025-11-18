import React, { useState } from "react";
import {
  Box,
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
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
    address: "",
    preferred_location: "",
    profile_pic: null, // FIXED → file allowed
  });

  console.log(form,'genderForm')

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // NORMAL INPUT HANDLER
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // FILE UPLOAD HANDLER (FIXED)
  const handleFileUpload = (e) => {
    setForm((f) => ({ ...f, profile_pic: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use FormData for file upload
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const res = await axios.post(
        "https://mycvi.ai/admin/api/submit-user",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 201) {
        toast.success(res?.data?.message || "Registration successful!");

        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          gender: "",
          city: "",
          address: "",
          preferred_location: "",
          profile_pic: null,
        });

        navigate("/signin");
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
              {/* NORMAL TEXT INPUTS */}
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "text" },
                { label: "Password", name: "password", type: "password" },
                { label: "Gender", name: "gender", type: "text" },
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
                  required
                  InputLabelProps={{ sx: { color: "#d1c4e9" } }}
                  sx={{
                    input: { color: "#fff" },
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 2,
                  }}
                />
              ))}

              {/* FILE INPUT FIXED */}
              <Button
                variant="contained"
                component="label"
                sx={{
                  background: "rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Upload Profile Picture
                <input hidden type="file" name="profile_pic" onChange={handleFileUpload} />
              </Button>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  background: "linear-gradient(90deg, #764ba2 30%, #667eea 90%)",
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#fff",
                  borderRadius: 2,
                  py: 1,
                  mt: 2,
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
            Already have an account?{" "}
            <Button
              component={Link}
              to="/signin"
              sx={{ color: "#bb86fc", fontWeight: 600 }}
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
