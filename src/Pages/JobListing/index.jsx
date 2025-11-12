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
  CircularProgress
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
        <img src='https://icons.veryicon.com/png/o/miscellaneous/fill/part-time-job.png' alt="" style={{ width: "68px", height: "68px" }} />
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
            {job?.title}

          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
            {job?.company_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {job?.candidate_required_location}

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

const JobDetail = ({ job, onClick, onTitleClick, handleModalOpen }) => (
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
          // avoid errors if job is undefined while data is loading
          if (job?.id) onTitleClick(job.id);
        }}
        onKeyDown={(e) => {
          // support keyboard activation (Enter / Space)
          if ((e.key === 'Enter' || e.key === ' ') && job?.job_id) {
            e.preventDefault();
            onTitleClick(job.job_id);
          }
        }}
      >
        {job?.title
        }
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
            bgcolor: "#0a66c2",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { bgcolor: "#004182" },
          }}
          onClick={() => handleModalOpen("apply")}
        >
          Easy Apply
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
          dangerouslySetInnerHTML={{ __html: job?.description }} />




      </Box>
    </Box>
  </Box>
);

const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [job, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "apply" or "save"

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.jobs.allJobs);

        console.log(res?.data?.adminJob, "all_job_data");
      } catch (err) {
        console.error(err);
      }
    };

    const DemoData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://remotive.com/api/remote-jobs`);
        setJobData(res?.data?.jobs);
        console.log(res?.data?.jobs, 'demoData')
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false); // Stop loader
      }
    }

    DemoData()
    fetchJobData();
  }, []);

  const handleTitleClick = (job_id) => {
    navigate(`/job-detail/${job_id}`);
  };

  const handleModalOpen = (type) => {
    setModalType(type);
    setOpenModal(true);
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
                      <JobDetail job={job[selectedJob]} onTitleClick={handleTitleClick} handleModalOpen={handleModalOpen} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )
        }

        {/* modal */}

        <Dialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogContent sx={{ textAlign: "center", py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: "success.main", mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {modalType === "apply" ? "Application Submitted!" : "Job Saved!"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {modalType === "apply"
                ? "Your application has been sent successfully."
                : "This job has been saved to your profile."}
            </Typography>
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
            <Button
              variant="contained"
              onClick={() => setOpenModal(false)}
              fullWidth
              sx={{ mx: 3, borderRadius: 28, py: 1.5 }}
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>



      </Container>
    </Box>
  );
};

export default JobListing;
