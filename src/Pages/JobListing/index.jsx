import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Chip,
  Avatar,
  Divider,
  Container,
  Grid,
  CircularProgress,
  TextField,
  Stack
} from "@mui/material";
import {
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,

  Share as ShareIcon,
  MoreVert as MoreVertIcon,


} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { endpoints } from "../../api/endpoints/endpoints";
import { axiosInstance } from "../../api/axios/axios";
import axios from "axios";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import { toast } from "react-toastify";



const JobCard = ({ job, onClose, isExpanded, onClick, onTitleClick }) => (
  <Card
    onClick={onClick}
    sx={{
      mb: 2,
      cursor: "pointer",
      "&:hover": { bgcolor: "action.hover" },
      border: isExpanded ? "2px solid #0a66c2" : "1px solid #e0e0e0",
    }}
  >
    <CardContent sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
        <img src={job?.company_logo  || 'https://icons.veryicon.com/png/o/miscellaneous/fill/part-time-job.png'} alt="" style={{ width: "68px", height: "68px" }} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#0a66c2",
              fontWeight: 600,
              mb: 0.5,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={(e) => {
              e.stopPropagation();
              // guard in case job is not yet defined
              if (job?.id) onTitleClick(job.id);
            }}
          >
            {job?.job_title}

          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            {job?.company_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {job?.city}

          </Typography>

          {job.activelyReviewing && (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}
            >
              <CheckCircleIcon sx={{ fontSize: 16, color: "success.main" }} />
              <Typography variant="body2" color="text.secondary">
                Actively reviewing applicants
              </Typography>
            </Box>
          )}

          <Typography variant="caption" color="text.secondary">
            {job.salary
            }
          </Typography>
        </Box>

        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

const JobDetail = ({ job, onClick, onTitleClick, handleModalOpen, appliedJobs }) => {

  const isApplied = appliedJobs?.includes(job?.id || job?.job_id);
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              bgcolor: "#fff",
              color: "#000",
              border: "1px solid #e0e0e0",
            }}
          >
            N
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Naukr.ai
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{ fontWeight: 600, mb: 2, cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            if (job?.job_id) onTitleClick(job.job_id);
          }}
          onKeyDown={(e) => {
            // support keyboard activation (Enter / Space)
            if ((e.key === 'Enter' || e.key === ' ') && job?.job_id) {
              e.preventDefault();
              onTitleClick(job.job_id);
            }
          }}
        >
          {job?.job_title}


        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          India · 1 day ago · Over 100 applicants
        </Typography>

        <Typography variant="body2" sx={{ mb: 3 }}>
          Promoted by hirer ·{" "}
          <Box component="span" sx={{ color: "#057642", fontWeight: 600 }}>
            Actively reviewing applicants
          </Box>
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
          <Chip label="Remote" variant="outlined" />
          <Chip label="Full-time" variant="outlined" />
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: isApplied ? "#22c55e" : "#0a66c2",
              "&:hover": { bgcolor: isApplied ? "#16a34a" : "#004182" },
            }}
            disabled={isApplied}
            onClick={() => !isApplied && handleModalOpen("apply")}
          >
            {isApplied ? "Applied" : "Ai Apply"}
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#0a66c2",
              color: "#0a66c2",
            }}
            onClick={() => handleModalOpen("save")}
          >
            Save
          </Button>

        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          About the job
        </Typography>

        <Box sx={{ bgcolor: "action.hover", p: 2, borderRadius: 1, mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Tips:</strong> Provide a summary of the role, what success in
            the position looks like, and how this role fits into the organization
            overall.
          </Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          Responsibilities
        </Typography>

        <Box sx={{ pl: 3, mb: 2 }}>
          <Typography
            variant="body2"
            component="div"
            dangerouslySetInnerHTML={{ __html: job?.job_desc }} />




        </Box>
      </Box>
    </Box>
  )
}

const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [job, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "apply" or "save"
  const [namee, setNamee] = useState('')
  const [isApplying, setIsApplying] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);


  const [userId, setUserId] = useState("");

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


  const navigate = useNavigate();
  const [applyData, setApplyData] = useState({
    name: "",
    job_position: "",
    resume: null,
  });

  const stored = localStorage.getItem("userData");

  useEffect(() => {
    if (stored) {
      const parsed = JSON.parse(stored);
      setNamee(parsed?.name || "");
    }
  }, []);



  useEffect(() => {
    const fetchJobData = async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get(endpoints.jobs.allJobs);
        setJobData(res?.data?.adminJob);
        console.log(res?.data?.adminJob, "all_job_data");

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);


  const handleTitleClick = (job_id) => {
    navigate(`/job-detail/${job_id}`);
  };

  const handleModalOpen = (type) => {
    setModalType(type);

    if (type === "apply") {
      setApplyData((prev) => ({
        ...prev,
        name: namee || "",
        job_position: job[selectedJob]?.title || "",
      }));
    }

    setOpenModal(true);
  };




  // handleapplyNow

  const handleApplyNow = async () => {
    if (!applyData.name || !applyData.job_position || !applyData.resume) {
      alert("Please fill all fields and upload resume");
      return;
    }

    setIsApplying(true);

    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("job_id", job[selectedJob]?.job_id || job[selectedJob]?.job_id);
      formData.append("cv", applyData.resume);

      const res = await axiosInstance.post(endpoints.jobs.aplly, formData);

      toast.success(res.data?.message);

      // 🔥 ADD THIS → store applied job ID
      const appliedJobId = job[selectedJob]?.id || job[selectedJob]?.job_id;
      setAppliedJobs((prev) => [...prev, appliedJobId]);

      setOpenModal(false);

      setApplyData({
        name: namee || "",
        job_position: "",
        resume: null,
      });

    } catch (err) {
      console.error("Apply Error:", err);
      toast.error("Failed to apply");
    } finally {
      setIsApplying(false);
    }
  };






  return (
    <Box sx={{ bgcolor: "#f3f2ef", minHeight: "100vh", py: 3 }}>
      <Container maxWidth="lg" sx={{ px: 4 }}>
        {
          loading ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            </>
          ) : (
            <>
              <Grid container spacing={3}>
                {/* Left Panel - Job List */}
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Top job picks for you
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        Based on your profile, preferences, and activity like applies,
                        searches, and saves
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {job?.length || 0} results
                      </Typography>
                    </CardContent>
                  </Card>

                  <Box
                    sx={{
                      maxHeight: { lg: "calc(100vh - 200px)" },
                      overflow: "auto",
                    }}
                  >
                    {job.map((item, index) => (
                      <JobCard
                        key={item.job_id || index}
                        job={item}
                        onClose={() => { }}
                        isExpanded={selectedJob === index}
                        onClick={() => setSelectedJob(index)}
                        onTitleClick={handleTitleClick}
                      />
                    ))}
                  </Box>
                </Grid>

                {/* Right Panel - Job Details */}
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Card sx={{ position: "sticky", top: 16 }}>
                    <CardContent sx={{ p: 3 }}>
                      <JobDetail
                        job={job[selectedJob]}
                        onTitleClick={handleTitleClick}
                        handleModalOpen={handleModalOpen}
                        appliedJobs={appliedJobs}
                      />

                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )
        }

        {/* modal */}

        {/* APPLY FORM MODAL */}
        <Dialog
          open={openModal && modalType === "apply"}
          onClose={() => setOpenModal(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              p: 1,
              background: "linear-gradient(135deg, #ffffff, #f3f6ff)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            },
          }}
        >
          <DialogContent sx={{ py: 4 }}>
            {/* Header */}
            <Typography
              variant="h5"
              fontWeight="700"
              textAlign="center"
              mb={3}
              sx={{
                background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Apply for Job
            </Typography>

            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              value={applyData.name || namee}
              onChange={(e) =>
                setApplyData({ ...applyData, name: e.target.value })
              }
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />

            {/* Job Position */}
            <TextField
              fullWidth
              label="Job Position"
              value={applyData.job_position}
              onChange={(e) =>
                setApplyData({ ...applyData, job_position: e.target.value })
              }
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />

            {/* Upload Resume */}
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                mb: 2,
                py: 1.4,
                borderRadius: 3,
                borderColor: "#6366f1",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#4f46e5",
                  background: "#eef2ff",
                },
              }}
            >
              Upload Resume
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setApplyData({ ...applyData, resume: e.target.files[0] })
                }
              />
            </Button>

            {applyData.resume && (
              <Typography variant="body2" sx={{ mb: 2, color: "#4f46e5" }}>
                📄 {applyData.resume.name}
              </Typography>
            )}

            {/* Buttons */}
            <Stack direction="row" spacing={2} mt={4}>
              {/* Apply Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                  },
                }}
                disabled={isApplying}
                onClick={handleApplyNow}
              >
                {isApplying ? "Applying..." : "Apply Now"}
              </Button>


              {/* Create CV */}
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  borderColor: "#6366f1",
                  color: "#4f46e5",
                  "&:hover": {
                    background: "#eef2ff",
                    borderColor: "#4f46e5",
                  },
                }}
                onClick={() => navigate("/create-cv")}
              >
                Create CV
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>





      </Container>
    </Box>
  );
};

export default JobListing;
