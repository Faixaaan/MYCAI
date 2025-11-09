// src/Pages/Dashboard.jsx

import React, { useMemo, useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  LinearProgress,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work,
  Bookmark,
  Star,
  Add,
  UploadFile,
  Settings,
  CameraAlt,
  Delete,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const MotionBox = motion(Box);

const Dashboard = () => {
  const userr = useSelector((state) => state.user.userData);

  // Initialize profile from Redux or localStorage
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("userData");
    const reduxUser = userr || (stored ? JSON.parse(stored) : null);
    return {
      name: reduxUser?.name || "Faizan Mohammed",
      email: reduxUser?.email || "faizan@example.com",
      phone: reduxUser?.phone || "9876543210",
      state: reduxUser?.state || "West Bengal",
      city: reduxUser?.city || "Kolkata",
      address: reduxUser?.address || "Park Street",
      preferredLocation: reduxUser?.preferredLocation || "Kolkata",
      avatarUrl: reduxUser?.avatarUrl || null,
      resumeFile: null,
    };
  });

  const [draftProfile, setDraftProfile] = useState(profile);
  const [openSettings, setOpenSettings] = useState(false);

  const [experienceList, setExperienceList] = useState([
    {
      id: Date.now(),
      company: "Adret Software",
      title: "Frontend Developer",
      startDate: "2023-05",
      endDate: "2024-11",
      years: "1.5",
    },
  ]);

  const statCards = [
    {
      title: "Total Applied Jobs",
      value: 25,
      icon: <Work sx={{ color: "#64b5f6" }} />,
    },
    {
      title: "Saved Jobs",
      value: 10,
      icon: <Bookmark sx={{ color: "#ffca28" }} />,
    },
    {
      title: "Shortlisted / Interviewed",
      value: 5,
      icon: <Star sx={{ color: "#66bb6a" }} />,
    },
  ];

  // Update profile if Redux changes
  useEffect(() => {
    if (userr) {
      setProfile((p) => ({ ...p, ...userr }));
      setDraftProfile((p) => ({ ...p, ...userr }));
    }
  }, [userr]);

  const completion = useMemo(() => {
    let score = 0;
    const {
      name,
      email,
      phone,
      state,
      city,
      address,
      preferredLocation,
      avatarUrl,
      resumeFile,
    } = profile;
    if (name) score += 12.5;
    if (email) score += 12.5;
    if (phone) score += 12.5;
    if (state && city) score += 12.5;
    if (address) score += 12.5;
    if (preferredLocation) score += 12.5;
    if (avatarUrl) score += 12.5;
    if (resumeFile) score += 12.5;
    return Math.round(Math.min(100, score));
  }, [profile]);

  const handleDraftAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setDraftProfile((p) => ({ ...p, avatarUrl: url, _avatarFile: file }));
  };

  const handleDraftResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type))
      return alert("Please upload PDF or DOC/DOCX");
    setDraftProfile((p) => ({ ...p, resumeFile: file }));
  };

  const openAccountSettings = () => {
    setDraftProfile(profile);
    setOpenSettings(true);
  };

  const handleMainResumeUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type))
      return alert("Please upload PDF or DOC/DOCX");
    setProfile((p) => ({ ...p, resumeFile: file }));
  };

  const handleAddExperience = () => {
    setExperienceList((prev) => [
      ...prev,
      {
        id: Date.now(),
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        years: "",
      },
    ]);
  };

  const handleExperienceChange = (id, key, value) => {
    setExperienceList((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp))
    );
  };

  const handleRemoveExperience = (id) => {
    setExperienceList((prev) => prev.filter((e) => e.id !== id));
  };

  const computeYears = (start, end) => {
    if (!start || !end) return "";
    try {
      const [sY, sM] = start.split("-");
      const [eY, eM] = end.split("-");
      const sDate = new Date(Number(sY), Number(sM) - 1);
      const eDate = new Date(Number(eY), Number(eM) - 1);
      const diffYears = (eDate - sDate) / (1000 * 60 * 60 * 24 * 365);
      return diffYears > 0 ? diffYears.toFixed(2) : "";
    } catch {
      return "";
    }
  };

  // Avatar & Name for display
  const displayAvatar =
    profile.avatarUrl ||
    (profile.name ? profile.name.charAt(0).toUpperCase() : "U");
  const displayName = userr?.name || profile.name || "Candidate";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        py: { xs: 1, sm: 2, md: 4 },
        px: { xs: 0, sm: 0 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            mb: { xs: 2, sm: 4 },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: { xs: "100%", sm: "auto" },
              mb: { xs: 1, sm: 0 },
            }}
          >
            <Avatar
              src={profile.avatarUrl || undefined}
              sx={{
                width: { xs: 56, sm: 80 },
                height: { xs: 56, sm: 80 },
                fontSize: { xs: 22, sm: 32 },
                border: "3px solid rgba(100,181,246,0.35)",
                boxShadow: profile.avatarUrl
                  ? "0 6px 20px rgba(0,176,255,0.18)"
                  : "none",
                bgcolor: "#2b2f36",
                mb: { xs: 1, sm: 0 },
              }}
            >
              {!profile.avatarUrl && displayAvatar}
            </Avatar>
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: "auto" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(90deg,#64b5f6,#82b1ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: 18, sm: 24 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Welcome, {displayName}
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                Profile Completion
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                  width: { xs: "100%", sm: "auto" },
                  flexWrap: "wrap",
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={completion}
                  sx={{
                    width: { xs: "85%", sm: 200, md: 260 },
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    "& .MuiLinearProgress-bar": { backgroundColor: "#00b0ff" },
                  }}
                />
                <Typography
                  sx={{
                    color: "#bcdffb",
                    fontWeight: 600,
                    fontSize: { xs: 12, sm: 16 },
                  }}
                >
                  {completion}%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{
              width: { xs: "100%", sm: "auto" },
              mt: { xs: 1, sm: 0 },
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Settings />}
              onClick={openAccountSettings}
              sx={{
                backgroundColor: "#2196f3",
                "&:hover": { backgroundColor: "#1769aa" },
                fontWeight: 700,
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: 13, sm: 15 },
              }}
            >
              Account Settings
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#cfefff",
                borderColor: "rgba(255,255,255,0.08)",
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: 13, sm: 15 },
              }}
            >
              View CV
            </Button>
          </Stack>
        </Box>

        {/* STATS */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {statCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    p: { xs: 1, sm: 2 },
                    textAlign: "center",
                    minWidth: 0,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 0.5,
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 16 } }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "#64b5f6",
                        mt: 1,
                        fontSize: { xs: 22, sm: 34 },
                      }}
                    >
                      {card.value}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* EXPERIENCE SECTION (responsive) */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              p: { xs: 1, sm: 3 },
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 2,
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 15, sm: 18 } }}
              >
                Work Experience
              </Typography>
              <Button
                startIcon={<Add />}
                variant="contained"
                onClick={handleAddExperience}
                sx={{
                  backgroundColor: "#64b5f6",
                  "&:hover": { backgroundColor: "#42a5f5" },
                  width: { xs: "100%", sm: "auto" },
                  mt: { xs: 1, sm: 0 },
                }}
              >
                Add Experience
              </Button>
            </Box>

            {experienceList.map((exp) => {
              const autoYears = computeYears(exp.startDate, exp.endDate);
              return (
                <Box
                  key={exp.id}
                  sx={{
                    mb: { xs: 2, sm: 1 },
                    p: { xs: 2, sm: 0 },
                    background: { xs: "rgba(255,255,255,0.025)", sm: "none" },
                    borderRadius: 1,
                  }}
                >
                  <Grid container spacing={1.2} alignItems="center">
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label="Company Name"
                        size="small"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "company",
                            e.target.value
                          )
                        }
                        fullWidth
                        InputLabelProps={{ sx: { color: "#b7cfee" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& .MuiOutlinedInput-root fieldset": {
                            borderColor: "#555",
                          },
                          mb: { xs: 1, sm: 0 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label="Job Title"
                        size="small"
                        value={exp.title}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "title",
                            e.target.value
                          )
                        }
                        fullWidth
                        InputLabelProps={{ sx: { color: "#b7cfee" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& .MuiOutlinedInput-root fieldset": {
                            borderColor: "#555",
                          },
                          mb: { xs: 1, sm: 0 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        label="Start Date"
                        type="month"
                        size="small"
                        value={exp.startDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "startDate",
                            e.target.value
                          )
                        }
                        fullWidth
                        InputLabelProps={{ sx: { color: "#b7cfee" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& .MuiOutlinedInput-root fieldset": {
                            borderColor: "#555",
                          },
                          mb: { xs: 1, sm: 0 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        label="End Date"
                        type="month"
                        size="small"
                        value={exp.endDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "endDate",
                            e.target.value
                          )
                        }
                        fullWidth
                        InputLabelProps={{ sx: { color: "#b7cfee" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& .MuiOutlinedInput-root fieldset": {
                            borderColor: "#555",
                          },
                          mb: { xs: 1, sm: 0 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8} md={1.5}>
                      <TextField
                        label="Years"
                        size="small"
                        value={exp.years || autoYears}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "years",
                            e.target.value
                          )
                        }
                        InputLabelProps={{ sx: { color: "#b7cfee" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& .MuiOutlinedInput-root fieldset": {
                            borderColor: "#555",
                          },
                          mb: { xs: 1, sm: 0 },
                          width: { xs: "100%" },
                        }}
                        fullWidth
                      />
                    </Grid>
                    {/* Only show delete icon inline on sm+ */}
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={0.5}
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        justifyContent: "flex-end",
                      }}
                    >
                      <IconButton
                        onClick={() => handleRemoveExperience(exp.id)}
                        sx={{ color: "#ff8a80" }}
                        title="Remove experience"
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                  {/* On mobile: Delete button below all fields, centered */}
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      justifyContent: "center",
                      mt: 1,
                    }}
                  >
                    <IconButton
                      onClick={() => handleRemoveExperience(exp.id)}
                      sx={{
                        color: "#ff8a80",
                        border: "1px solid #ff8a80",
                        borderRadius: 2,
                        p: 1.2,
                        width: 40,
                        height: 40,
                        background: "rgba(255, 138, 128, 0.04)",
                      }}
                      title="Remove experience"
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Card>
        </MotionBox>

        {/* RESUME & ACTIONS (responsive) */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                p: { xs: 1, sm: 3 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700, fontSize: { xs: 15, sm: 18 } }}
              >
                Resume & Actions
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFile />}
                  sx={{
                    backgroundColor: "#00b0ff",
                    "&:hover": { backgroundColor: "#0288d1" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Upload/Replace Resume
                  <input
                    hidden
                    accept=".pdf,.doc,.docx"
                    type="file"
                    onChange={handleMainResumeUpload}
                  />
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (profile.resumeFile)
                      window.open(URL.createObjectURL(profile.resumeFile));
                    else alert("No resume uploaded");
                  }}
                  sx={{ color: "#cfefff", width: { xs: "100%", sm: "auto" } }}
                >
                  Preview Resume
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#bcdffb",
                    wordBreak: "break-word",
                    pt: { xs: 1, sm: 0 },
                  }}
                >
                  {profile.resumeFile
                    ? profile.resumeFile.name
                    : "No resume uploaded"}
                </Typography>
              </Stack>
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.6)" }}
              >
                Accepted: PDF / DOC / DOCX
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                p: { xs: 1, sm: 3 },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700, fontSize: { xs: 15, sm: 18 } }}
              >
                Change Password
              </Typography>
              <TextField
                fullWidth
                label="New Password"
                size="small"
                type="password"
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "#555" },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#64b5f6",
                  "&:hover": { backgroundColor: "#42a5f5" },
                }}
              >
                Update Password
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* ACCOUNT SETTINGS MODAL */}
        <Dialog
          open={openSettings}
          onClose={() => setOpenSettings(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ textAlign: "center", fontWeight: 800 }}>
            Account Settings
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ position: "relative" }}>
                  <Avatar
                    src={
                      draftProfile.avatarUrl || profile.avatarUrl || undefined
                    }
                    sx={{
                      width: 110,
                      height: 110,
                      border: "3px solid rgba(100,181,246,0.35)",
                    }}
                  >
                    {!(draftProfile.avatarUrl || profile.avatarUrl) &&
                      (draftProfile.name || profile.name || "U")
                        .charAt(0)
                        .toUpperCase()}
                  </Avatar>
                  <IconButton
                    component="label"
                    sx={{
                      position: "absolute",
                      right: -6,
                      bottom: -6,
                      bgcolor: "#64b5f6",
                      color: "#001",
                      "&:hover": { bgcolor: "#42a5f5" },
                    }}
                  >
                    <CameraAlt />
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleDraftAvatarChange}
                    />
                  </IconButton>
                </Box>
              </Box>

              {[
                "name",
                "email",
                "phone",
                "state",
                "city",
                "address",
                "preferredLocation",
              ].map((field) => (
                <TextField
                  key={field}
                  label={
                    field.charAt(0).toUpperCase() +
                    field.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  value={draftProfile[field]}
                  fullWidth
                  onChange={(e) =>
                    setDraftProfile((p) => ({ ...p, [field]: e.target.value }))
                  }
                />
              ))}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFile />}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  Upload Resume
                  <input
                    hidden
                    accept=".pdf,.doc,.docx"
                    type="file"
                    onChange={handleDraftResumeChange}
                  />
                </Button>
                <Typography variant="body2" sx={{ color: "#bcdffb" }}>
                  {draftProfile.resumeFile
                    ? draftProfile.resumeFile.name
                    : profile.resumeFile
                    ? profile.resumeFile.name
                    : "No resume selected"}
                </Typography>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 },
              px: 3,
              pb: 2,
            }}
          >
            <Button fullWidth={true} onClick={() => setOpenSettings(false)}>
              Cancel
            </Button>
            <Button
              fullWidth={true}
              variant="contained"
              onClick={() => {
                setProfile((p) => ({ ...p, ...draftProfile }));
                setOpenSettings(false);
              }}
            >
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Dashboard;
