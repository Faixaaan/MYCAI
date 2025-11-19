import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  CircularProgress,
  MenuItem,
  Chip,
  Autocomplete,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MotionCard = motion(Card);

// List of Indian cities for autocomplete
const INDIAN_CITIES = [
    "London",
  "Birmingham",
  "Manchester",
  "Liverpool",
  "Leeds",
  "Sheffield",
  "Newcastle upon Tyne",
  "Bristol",
  "Nottingham",
  "Leicester",
  "Coventry",
  "Southampton",
  "Portsmouth",
  "Wolverhampton",
  "Bradford",
  "Derby",
  "Stoke-on-Trent",
  "Sunderland",
  "York",
  "Peterborough",
  "Brighton & Hove",
  "Plymouth",
  "Oxford",
  "Cambridge",
  "Milton Keynes",
  "Reading",
  "Luton",
  "Swindon",
  "Northampton",
  "Kingston upon Hull",
  "Edinburgh",
  "Glasgow",
  "Aberdeen",
  "Dundee",
  "Inverness",
  "Stirling",
  "Perth",
  "Cardiff",
  "Swansea",
  "Newport",
  "Wrexham",
  "Belfast",
  "Derry",
  "Lisburn",
  "Newry"
];

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
    address: "",
    preferred_location: "", // Store as string
    country: "",
    profile_pic: null,
  });

  const [preferredLocationError, setPreferredLocationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // NORMAL INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`TextField changed - ${name}:`, value);
    setForm((f) => ({ ...f, [name]: value }));
  };

  // MULTI-SELECT HANDLER FOR PREFERRED LOCATION
  const handlePreferredLocationChange = (event, newValue) => {
    console.log("Preferred Location selected (array):", newValue);
    
    // Convert array to comma-separated string
    const locationString = newValue.join(',');
    console.log("Preferred Location (string):", locationString);
    
    setForm((f) => ({ ...f, preferred_location: locationString }));
    setPreferredLocationError(newValue.length === 0);
  };

  // Convert string back to array for Autocomplete value
  const getPreferredLocationArray = () => {
    return form.preferred_location ? form.preferred_location.split(',') : [];
  };

  // FILE UPLOAD HANDLER
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("File selected:", file);
    
    if (file) {
      setForm((f) => ({
        ...f,
        profile_pic: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("=== FORM SUBMISSION STARTED ===");
    console.log("Current form state:", form);
    console.log("Preferred location (string):", form.preferred_location);
    
    // IMPORTANT: KEEP THE VALIDATION - Don't remove this!
    if (!form.preferred_location || form.preferred_location.trim() === '') {
      console.log("VALIDATION FAILED: No preferred location selected");
      setPreferredLocationError(true);
      toast.error("Please select at least one preferred location");
      return;
    }

    console.log("VALIDATION PASSED: Proceeding with API call");
    setLoading(true);

    try {
      // Use FormData for file upload
      const formData = new FormData();
      console.log("Creating FormData...");
      
      Object.keys(form).forEach((key) => {
        console.log(`Appending ${key}:`, form[key]);
        formData.append(key, form[key]);
      });

      // Log FormData contents
      console.log("FormData contents:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ', pair[1]);
      }

      console.log("Making API call to:", "https://mycvi.ai/admin/api/submit-user");
      
      const res = await axios.post(
        "https://mycvi.ai/admin/api/submit-user",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("API Response:", res);
      
      if (res.status === 201) {
        console.log("REGISTRATION SUCCESSFUL");
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
          country: "",
          profile_pic: null,
        });
        setPreferredLocationError(false);

        navigate("/signin");
      }
    } catch (err) {
      console.error("API ERROR:", err);
      console.error("Error response:", err.response);
      console.error("Error data:", err.response?.data);
      toast.error(
        err?.response?.data?.message || "Registration failed! Please try again."
      );
    } finally {
      setLoading(false);
      console.log("=== FORM SUBMISSION COMPLETED ===");
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

          {/* REMOVE THE FORM TAG AND USE DIV INSTEAD */}
          <div>
            <Stack spacing={2}>
              {/* NORMAL TEXT INPUTS */}
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "text" },
                { label: "Password", name: "password", type: "password" },
                { label: "", name: "gender", type: "select", options: ["Male", "Female"] },
                { label: "City", name: "city", type: "text" },
                { label: "Address", name: "address", type: "text" },
                { label: "Country", name: "country", type: "text" },
              ].map(({ label, name, type, options }) =>
                type === "select" ? (
                  <TextField
                    key={name}
                    select
                    label={label}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{ sx: { color: "#d1c4e9" } }}
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (selected) => {
                        if (!selected) {
                          return <span style={{ color: "#bdbdbd" }}>Select Gender</span>;
                        }
                        return selected;
                      },
                    }}
                    sx={{
                      "& .MuiSelect-select": {
                        color: form[name] ? "#fff" : "#bdbdbd",
                      },
                      "& .MuiSvgIcon-root": { color: "#fff" },
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 2,
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Gender
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
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
                )
              )}

              {/* MULTI-SELECT AUTOCOMPLETE FOR PREFERRED LOCATION */}
              <Autocomplete
                multiple
                options={INDIAN_CITIES}
                value={getPreferredLocationArray()} // Convert string back to array for display
                onChange={handlePreferredLocationChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Preferred Location"
                    error={preferredLocationError}
                    helperText={preferredLocationError ? "Please select at least one preferred location" : ""}
                    InputLabelProps={{ sx: { color: "#d1c4e9" } }}
                    sx={{
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 2,
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#f44336",
                      },
                    }}
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      sx={{
                        background: "rgba(187, 134, 252, 0.3)",
                        color: "#fff",
                        border: "1px solid #bb86fc",
                      }}
                    />
                  ))
                }
                sx={{
                  "& .MuiAutocomplete-popupIndicator": { color: "#fff" },
                  "& .MuiAutocomplete-clearIndicator": { color: "#fff" },
                }}
              />

              {/* HIDDEN INPUT FOR BROWSER VALIDATION - THIS IS THE FIX! */}
              <input
                type="text"
                required
                value={form.preferred_location}
                onChange={() => {}} // Empty handler
                style={{ 
                  display: 'none',
                  position: 'absolute',
                  left: '-9999px'
                }}
              />

              {/* Display the actual string value for debugging */}
              <Typography variant="body2" sx={{ color: "#d1c4e9", fontSize: 12 }}>
                Debug - Preferred Location String: "{form.preferred_location}"
              </Typography>

              {/* FILE INPUT */}
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

              {/* preview picture */}
              {form.preview && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={form.preview}
                    alt="Profile Preview"
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #bb86fc",
                    }}
                  />
                </Box>
              )}

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                onClick={handleSubmit} // Use onClick instead of form onSubmit
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
                {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Sign Up"}
              </Button>
            </Stack>
          </div>

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