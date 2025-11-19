import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Avatar,
  Chip,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
  TextField,
  Stack
} from '@mui/material';
import {
  Bookmark,
  BookmarkBorder,
  Share,
  MoreVert,
  Work,
  LocationOn,
  People,
  AttachMoney,
  Schedule,
  Business,
  CheckCircle,
  Close
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../api/axios/axios';
import { endpoints } from '../../api/endpoints/endpoints';
import { toast } from 'react-toastify';

export default function JobDetailPage() {
  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showApplyFormModal, setShowApplyFormModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [userId, setUserId] = useState("");
  const [applyData, setApplyData] = useState({
    name: "",
    resume: null,
    job_title: ""
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [job, setJobData] = useState({});
  const { id } = useParams();

  const jobData = {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Mid-Senior level",
    salary: "$120,000 - $160,000/year",
    postedTime: "2 days ago",
    applicants: "47 applicants",
    description: `We are seeking a talented Senior Frontend Developer to join our growing team. You'll work on cutting-edge web applications using modern technologies and frameworks.

In this role, you'll collaborate with designers, backend developers, and product managers to create exceptional user experiences. You'll have the opportunity to mentor junior developers and contribute to architectural decisions.`,
    responsibilities: [
      "Develop and maintain high-quality frontend applications",
      "Collaborate with cross-functional teams to define and ship new features",
      "Write clean, maintainable, and efficient code",
      "Mentor junior developers and conduct code reviews",
      "Optimize applications for maximum speed and scalability"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern CSS",
      "Strong understanding of responsive design and accessibility",
      "Experience with state management (Redux, Context API)",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) matching"
    ]
  };

  // Get user data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setUserId(parsed.user_id || "");
        setApplyData(prev => ({ ...prev, name: parsed.name || "" }));
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  // Save Job Function
  const handleSaveJob = async () => {
    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    if (!job?.job_id) {
      toast.error("Job ID not found");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        user_id: userId,
        job_id: job.job_id
      };

      const res = await axiosInstance.post(endpoints.jobs.save_job, payload);

      if (res?.data?.status === true) {
        toast.success("Job saved successfully!");
        setIsSaved(true);
      } else {
        toast.error(res?.data?.message || "Failed to save job");
      }
    } catch (error) {
      console.error("Save job error:", error);
      toast.error("Failed to save job");
    } finally {
      setIsSaving(false);
    }
  };

  // Apply Job Function
  const handleApplyJob = async () => {
    if (!applyData.name || !applyData.resume) {
      toast.error("Please fill all fields and upload resume");
      return;
    }

    setIsApplying(true);
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("job_id", job?.job_id);
      formData.append("cv", applyData.resume);
      formData.append("job_title", job?.job_title || "");

      const res = await axiosInstance.post(endpoints.jobs.aplly, formData);

      if (res?.data?.status === true) {
        toast.success(res.data?.message || "Application submitted successfully!");
        setIsApplied(true);
        setShowApplyFormModal(false);
        setShowApplyModal(true);
        
        setApplyData(prev => ({
          ...prev,
          resume: null
        }));
      } else {
        toast.error(res?.data?.message || "Failed to apply");
      }
    } catch (error) {
      console.error("Apply Error:", error);
      toast.error("Failed to apply");
    } finally {
      setIsApplying(false);
    }
  };

  // Apply Form Modal
  const ApplyFormModal = () => (
    <Dialog
      open={showApplyFormModal}
      onClose={() => setShowApplyFormModal(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="700">
            Apply for Job
          </Typography>
          <IconButton onClick={() => setShowApplyFormModal(false)}>
            <Close />
          </IconButton>
        </Box>

        

        <TextField
          fullWidth
          label="Job Title"
          value={job?.job_title || ""}
          InputProps={{ readOnly: true }}
          sx={{ mb: 2 }}
        />

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mb: 2, py: 1.4 }}
        >
          Upload Resume
          <input
            type="file"
            hidden
            accept=".pdf,.doc,.docx"
            onChange={(e) => setApplyData({ ...applyData, resume: e.target.files[0] })}
          />
        </Button>

        {applyData.resume && (
          <Typography variant="body2" sx={{ mb: 2, color: "primary.main" }}>
            📄 {applyData.resume.name}
          </Typography>
        )}

        <Stack direction="row" spacing={2} mt={4}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setShowApplyFormModal(false)}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            variant="contained"
            disabled={isApplying}
            onClick={handleApplyJob}
          >
            {isApplying ? "Applying..." : "Apply Now"}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );

  const ApplyModal = () => (
    <Dialog
      open={showApplyModal}
      onClose={() => setShowApplyModal(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent sx={{ textAlign: 'center', py: 4 }}>
        <CheckCircle sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Application Submitted!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your application has been sent to {job?.company_name}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button
          variant="contained"
          onClick={() => setShowApplyModal(false)}
          fullWidth
          sx={{ mx: 3, borderRadius: 28, py: 1.5 }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axiosInstance.get(`${endpoints.jobs.single_admin_job}/${id}`);
        setJobData(res?.data);
        console.log(res?.data, "all_job_data_detail");
      } catch (err) {
        console.error(err);
      }
    };

    fetchSingleJob();
  }, [id]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', pb: isMobile ? 10 : 0 }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" color="primary" sx={{ flexGrow: 1 }}>
            JobBoard
          </Typography>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Avatar
                    variant="rounded"
                    sx={{ width: { xs: 64, sm: 80 }, height: { xs: 64, sm: 80 } }}
                  >
                    <Business sx={{ fontSize: 40 }} />
                  </Avatar>

                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                      {job?.job_title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {job?.company_name}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                      <Chip icon={<LocationOn />} label={job?.candidate_required_location} size="small" />
                      <Chip icon={<Work />} label={job?.job_type} size="small" />
                      <Chip icon={<People />} label={jobData.level} size="small" />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary', flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule fontSize="small" />
                        <Typography variant="body2">{jobData.publish_date}</Typography>
                      </Box>
                      <Typography variant="body2">•</Typography>
                      <Typography variant="body2">{jobData.applicants}</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Action Buttons - UPDATED */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setShowApplyFormModal(true)}
                    disabled={isApplied}
                    sx={{ 
                      flex: 1, 
                      borderRadius: 28, 
                      py: 1.5, 
                      fontWeight: 'bold',
                      bgcolor: isApplied ? '#22c55e' : 'primary.main',
                      '&:hover': {
                        bgcolor: isApplied ? '#16a34a' : 'primary.dark'
                      }
                    }}
                  >
                    {isApplied ? "Applied" : "AI Apply"}
                  </Button>
                  <Button
                    variant={isSaved ? "contained" : "outlined"}
                    size="large"
                    onClick={handleSaveJob}
                    disabled={isSaved || isSaving}
                    sx={{ borderRadius: 28, px: 3 }}
                  >
                    {isSaving ? "Saving..." : (isSaved ? <Bookmark /> : <BookmarkBorder />)}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ borderRadius: 28, px: 3 }}
                  >
                    <Share />
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  About the job
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{
                  __html: job?.job_desc
                }} />

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Responsibilities
                </Typography>
                <List>
                  {jobData.responsibilities.map((item, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{ color: 'text.secondary' }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Requirements
                </Typography>
                <List>
                  {jobData.requirements.map((item, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{ color: 'text.secondary' }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Benefits
                </Typography>
                <List>
                  {jobData.benefits.map((item, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{ color: 'text.secondary' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ position: { lg: 'sticky' }, top: { lg: 90 } }}>
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <Business color="action" />
                    <Box>
                      <Typography variant="h6" fontWeight="600" gutterBottom>
                        About {jobData.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Technology Company
                      </Typography>
                    </Box>
                  </Box>

                  <List dense>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <People fontSize="small" color="action" />
                      </ListItemIcon>
                      <ListItemText
                        primary="1,000-5,000 employees"
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <LocationOn fontSize="small" color="action" />
                      </ListItemIcon>
                      <ListItemText
                        primary="San Francisco, CA"
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <AttachMoney fontSize="small" color="action" />
                      </ListItemIcon>
                      <ListItemText
                        primary={jobData.salary}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </List>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, borderRadius: 28, py: 1 }}
                  >
                    View Company Page
                  </Button>
                </CardContent>
              </Card>

              {!isMobile && (
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Job Insights
                    </Typography>
                    <List dense>
                      <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText
                          primary="Seniority level"
                          secondary={jobData.level}
                          primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                        />
                      </ListItem>
                      <Divider />
                      <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText
                          primary="Employment type"
                          secondary={jobData.type}
                          primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                        />
                      </ListItem>
                      <Divider />
                      <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText
                          primary="Job function"
                          secondary="Engineering and IT"
                          primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Bottom Bar - UPDATED */}
      {isMobile && (
        <Paper
          elevation={8}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            borderTop: 1,
            borderColor: 'divider',
            zIndex: 1000
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setShowApplyFormModal(true)}
              disabled={isApplied}
              sx={{ 
                flex: 1, 
                borderRadius: 28, 
                fontWeight: 'bold',
                bgcolor: isApplied ? '#22c55e' : 'primary.main',
                '&:hover': {
                  bgcolor: isApplied ? '#16a34a' : 'primary.dark'
                }
              }}
            >
              {isApplied ? "Applied" : "Apply Now"}
            </Button>
            <IconButton
              onClick={handleSaveJob}
              disabled={isSaved || isSaving}
              sx={{
                bgcolor: isSaved ? 'primary.main' : 'grey.200',
                color: isSaved ? 'white' : 'text.primary',
                '&:hover': {
                  bgcolor: isSaved ? 'primary.dark' : 'grey.300'
                }
              }}
            >
              {isSaving ? "..." : (isSaved ? <Bookmark /> : <BookmarkBorder />)}
            </IconButton>
          </Box>
        </Paper>
      )}

      {/* Modals */}
      <ApplyFormModal />
      <ApplyModal />
    </Box>
  );
}