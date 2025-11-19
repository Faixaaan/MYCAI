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
  Modal,
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
import { endpoints } from "../../api/endpoints/endpoints";
import { axiosInstance } from "../../api/axios/axios";
import { toast } from "react-toastify";
import StatsModal from "./statsModal";

const MotionBox = motion(Box);

const Dashboard = () => {
  const userr = useSelector((state) => state.user.userData);
  // Stats modals state - simplified
  const [openStatsModal, setOpenStatsModal] = useState({
    applied: false,
    saved: false,
    shortlisted: false
  });

  // Add this state for recent applied jobs
  const [recentAppliedJobs, setRecentAppliedJobs] = useState([]);

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
      avatarUrl: reduxUser?.profile_pic
        || null,
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

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userId, setUserId] = useState("");
  const [save, setSave] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    // ✅ Retrieve data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);

        setUserId(parsed.user_id || "");
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  const [statsCount, setStatsCount] = useState({
    applied: 0,
    saved: 0,
    shortlisted: 0
  });

  const statCards = [
    {
      title: "Total Applied Jobs",
      value: statsCount.applied, // Use actual count instead of static 25
      icon: <Work sx={{ color: "#64b5f6" }} />,
      key: "applied",
    },
    {
      title: "Saved Jobs",
      value: statsCount.saved, // Use actual count instead of static 10
      icon: <Bookmark sx={{ color: "#ffca28" }} />,
      key: "saved",
    },
    {
      title: "Shortlisted / Interviewed",
      value: statsCount.shortlisted, // Use actual count instead of static 5
      icon: <Star sx={{ color: "#66bb6a" }} />,
      key: "shortlisted",
    },
  ];

  // Add this function to fetch recent applied jobs
  const fetchRecentAppliedJobs = async () => {
    if (!userId) return;

    try {
      const res = await axiosInstance.get(`${endpoints.jobs.applied_job}/${userId}`);
      const jobs = res.data?.data || [];

      // Get latest 5 jobs (assuming they have date field, adjust as needed)
      const latestJobs = jobs
        .sort((a, b) => new Date(b.created_at || b.applied_date) - new Date(a.created_at || a.applied_date))
        .slice(0, 5);

      setRecentAppliedJobs(latestJobs);
    } catch (error) {
      console.error("Error fetching recent applied jobs:", error);
    }
  };

  // Simple click handler
  const handleStatsCardClick = (cardKey) => {
    setOpenStatsModal(prev => ({ ...prev, [cardKey]: true }));
  };

  const handleCloseStatsModal = (cardKey) => {
    setOpenStatsModal(prev => ({ ...prev, [cardKey]: false }));
  };

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

  const handlePasswordUpdate = async () => {
    if (!oldPass || !newPass || !confirmPass) {
      alert("All fields are required");
      return;
    }

    if (newPass !== confirmPass) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    const payload = {
      old_password: oldPass,
      new_password: newPass,
      confirm_password: confirmPass
    }

    try {
      const res = await axiosInstance.post(
        `${endpoints.auth.change_password}/${userId}`,
        payload
      );

      if (res?.data?.status === true) {
        toast.success(res?.data?.message);
        setOldPass("");
        setNewPass("");
        setConfirmPass("");
      } else {
        alert(res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message);
    }
  };

  const handleSubmitChanges = async () => {
    try {
      const formData = new FormData();

      // Basic fields
      formData.append("name", draftProfile.name || "");
      formData.append("phone", draftProfile.phone || "");
      formData.append("city", draftProfile.city || "");
      formData.append("gender", draftProfile.gender || "");
      formData.append("address", draftProfile.address || "");
      formData.append("country", draftProfile.country || "");
      formData.append("preferred_location", draftProfile.preferredLocation || "");

      // Avatar file (only if a NEW image is uploaded)
      if (draftProfile._avatarFile) {
        formData.append("profile_pic", draftProfile._avatarFile);
      }

      // Resume file (only if a NEW file is uploaded)
      if (draftProfile.resumeFile instanceof File) {
        formData.append("resume", draftProfile.resumeFile);
      }

      setSave(true)

      const res = await axiosInstance.post(
        `${endpoints.auth.update_profile}/${userId}`,
        formData,

      );

      setSave(false)

      if (res?.data?.status === true) {
        toast.success("Profile updated successfully!");

        // Update UI
        setProfile(draftProfile);
        localStorage.setItem("userData", JSON.stringify(res.data.data));

        setOpenSettings(false);
      } else {
        toast.error(res?.data?.message || "Update failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setSave(false)
    }
  };

  const [openCVModal, setOpenCVModal] = useState(false);
  const [cvUrl, setCvUrl] = useState("");
  const handleViewCV = async () => {
    try {
      setOpenCVModal(true);

      const res = await axiosInstance.get(
        `${endpoints.cvi_wallet.single_user}/${userId}`
      );

      console.log(res?.data, 'resumee')

      if (res?.data?.data?.resume) {
        setCvUrl(res?.data?.data?.resume); // API returns CV URL
      } else {
        toast.error("No CV found!");
        setOpenCVModal(false);
      }

    } catch (error) {
      console.error(error);
      toast.error("Failed to load CV");
      setOpenCVModal(false);
    }
  };

  // If you want to keep the interval, move it AFTER fetchStatsCounts is defined
  const fetchStatsCounts = async () => {
    if (!userId) return;

    try {
      // Fetch applied jobs count
      const appliedRes = await axiosInstance.get(`${endpoints.jobs.applied_job}/${userId}`);
      const appliedCount = appliedRes.data?.data?.length || 0;

      // Fetch saved jobs count
      const savedRes = await axiosInstance.get(`${endpoints.jobs.get_save_job}/${userId}`);
      const savedCount = savedRes.data?.data?.length || 0;

      // Fetch shortlisted jobs count
      const shortlistedRes = await axiosInstance.get(`${endpoints.jobs.shortlisted_jobs}/${userId}`);
      const shortlistedCount = shortlistedRes.data?.data?.length || 0;

      setStatsCount({
        applied: appliedCount,
        saved: savedCount,
        shortlisted: shortlistedCount
      });

    } catch (error) {
      console.error("Error fetching stats counts:", error);
    }
  };

  

  // Interval refresh - NOW this works because fetchStatsCounts is defined above
  useEffect(() => {
    if (userId) {
      const interval = setInterval(fetchStatsCounts, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [userId]);

  // fetch saved job length 

  const fetchSavedJobs = async () => {
  if (!userId) return;
  try {
    const res = await axiosInstance.get(`${endpoints.jobs.get_save_job}/${userId}`);
    const savedJobsData = res.data?.data || [];
    setSavedJobs(savedJobsData);
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
  }
};
// Fetch counts when component mounts and userId is available
  useEffect(() => {
    if (userId) {
      fetchStatsCounts();
      fetchRecentAppliedJobs(); // Also fetch recent jobs
       fetchSavedJobs();
    }
  }, [userId]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #827970ff, #827970ff, #827970ff)",
        color: "#431407",
        py: { xs: 1, sm: 2, md: 4 },
        px: { xs: 0, sm: 0 },
        overflowX: "hidden",
        width: "100%"
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
                
                sx={{
                  textAlign: {
                    xs: "center", sm: "left", background: "linear-gradient(90deg,#64b5f6,#82b1ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",fontWeight:"4000"
                  }
                }}
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
              onClick={handleViewCV}
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
                  onClick={() => handleStatsCardClick(card.key)}
                  sx={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    p: { xs: 1, sm: 2 },
                    textAlign: "center",
                    minWidth: 0,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(100,181,246,0.3)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}>
                      {card.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 16 } }}>
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

        {/* RECENT APPLIED JOBS */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 3 }}
        >
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: { xs: 15, sm: 18 } }}
              >
                Recent Applied Jobs
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#64b5f6", cursor: "pointer" }}
                onClick={() => handleStatsCardClick('applied')}
              >
                View All
              </Typography>
            </Box>

            {recentAppliedJobs.length === 0 ? (
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  textAlign: "center",
                  py: 3
                }}
              >
                No jobs applied yet
              </Typography>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {recentAppliedJobs.map((job, index) => (
                  <Box
                    key={job.id || index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 1,
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(100,181,246,0.2)",
                      },
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "#fff",
                          fontSize: { xs: 14, sm: 16 }
                        }}
                      >
                        {job.job_title || job.title || "No Title"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: { xs: 12, sm: 14 }
                        }}
                      >
                        {job.company_name || job.company || "Unknown Company"}
                      </Typography>
                      {job.applied_date && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: { xs: 11, sm: 12 }
                          }}
                        >
                          Applied on {new Date(job.applied_date).toLocaleDateString()}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: job.status === "shortlisted" ? "#66bb6a" :
                            job.status === "rejected" ? "#ff8a80" : "#ffca28",
                          fontWeight: 600,
                          fontSize: { xs: 11, sm: 12 }
                        }}
                      >
                        {job.status || "Applied"}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Card>
        </MotionBox>

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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* LEFT CARD */}
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
                {profile.resumeFile ? profile.resumeFile.name : "No resume uploaded"}
              </Typography>
            </Stack>

            <Typography
              variant="caption"
              sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.6)" }}
            >
              Accepted: PDF / DOC / DOCX
            </Typography>
          </Card>

          {/* RIGHT CARD */}
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
              label="Old Password"
              size="small"
              type="password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              sx={{ marginTop: "8px", color: "#fff" }}
              autoComplete="new-password"
            />

            <TextField
              fullWidth
              label="New Password"
              size="small"
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              sx={{ marginTop: "8px" }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              size="small"
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              sx={{ marginTop: "8px" }}
            />

            <Button fullWidth variant="contained" onClick={handlePasswordUpdate} sx={{ mt: 3 }}>
              Update Password
            </Button>
          </Card>
        </Box>

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
                "phone",
                "city",
                // Remove "gender" from this array since we'll handle it separately
                "address",
                'country',
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

              {/* Add Gender Dropdown separately */}
              <Box>
                <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                  Gender
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={draftProfile.gender || ''}
                  onChange={(e) =>
                    setDraftProfile((p) => ({ ...p, gender: e.target.value }))
                  }
                  SelectProps={{
                    native: true,
                  }}
                >

                  <option value="male">Male</option>
                  <option value="female">Female</option>

                </TextField>
              </Box>

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

            <DialogActions>
              <Button onClick={() => setOpenSettings(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleSubmitChanges} disabled={save} >
                {save ? "Saving..." : 'Save Change'}
              </Button>
            </DialogActions>

          </DialogActions>
        </Dialog>

        {/* cv modal */}
        <Modal open={openCVModal} onClose={() => setOpenCVModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 3,
              width: "90%",
              height: "90%",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" mb={2}>
              Your CV
            </Typography>

            {/* PDF Viewer */}
            {cvUrl?.includes(".pdf") ? (
              <iframe
                src={cvUrl}
                style={{
                  width: "100%",
                  height: "80vh",
                  border: "none"
                }}
                title="CV Preview"
              ></iframe>
            ) : (
              // Image CV Viewer
              <img
                src={cvUrl}
                alt="CV"
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            )}
          </Box>
        </Modal>

        {/* stats modal */}

        {/* Add modals at the bottom of your JSX */}
        <StatsModal
          open={openStatsModal.applied}
          onClose={() => handleCloseStatsModal('applied')}
          title="Applied Jobs"
          type="applied"

        />

        <StatsModal
          open={openStatsModal.saved}
          onClose={() => handleCloseStatsModal('saved')}
          title="Saved Jobs"
          type="saved"

        />

        <StatsModal
          open={openStatsModal.shortlisted}
          onClose={() => handleCloseStatsModal('shortlisted')}
          title="Shortlisted Jobs"
          type="shortlisted"

        />

      </Container>
    </Box>
  );
};

export default Dashboard;