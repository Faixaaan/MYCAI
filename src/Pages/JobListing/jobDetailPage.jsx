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
  useMediaQuery
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
  
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function JobDetailPage() {
  const [isSaved, setIsSaved] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
 const [job, setJobData] = useState([]);

  const { id } = useParams();

  console.log(id, '__id__')

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
          Your application has been sent to {jobData.company}
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

  // api calling 


  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get('https://remotive.com/api/remote-jobs');
        const allJobs = res?.data?.jobs || [];
        const singleJob = allJobs.find((job) => job.id.toString() === id.toString());
        setJobData(singleJob);
        console.log(singleJob, '__SingleJob__');
      } catch (err) {
        console.log('Error fetching job:', err);
      }
    };

    fetchSingleJob();
  }, [id]);


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', pb: isMobile ? 10 : 0 }}>
      {/* Header */}


      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
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
        <Grid container spacing={3}>
          {/* Left Column - Job Details */}
          <Grid item xs={12} lg={8}>
            {/* Job Header Card */}
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
                      {job?.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {job?.company_name}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                      <Chip icon={<LocationOn />} label={job?.candidate_required_location
                      } size="small" />
                      <Chip icon={<Work />} label={job?.job_type} size="small" />
                      <Chip icon={<People />} label={jobData.level} size="small" />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary', flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule fontSize="small" />
                        <Typography variant="body2">{jobData.postedTime}</Typography>
                      </Box>
                      <Typography variant="body2">•</Typography>
                      <Typography variant="body2">{jobData.applicants}</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setShowApplyModal(true)}
                    sx={{ flex: 1, borderRadius: 28, py: 1.5, fontWeight: 'bold' }}
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant={isSaved ? "contained" : "outlined"}
                    size="large"
                    onClick={() => setIsSaved(!isSaved)}
                    sx={{ borderRadius: 28, px: 3 }}
                  >
                    {isSaved ? <Bookmark /> : <BookmarkBorder />}
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

            {/* Job Description Card */}
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  About the job
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{
            __html: job?.description
              
          }}>
                  
                </Typography>

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

          {/* Right Column - Sidebar */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ position: { lg: 'sticky' }, top: { lg: 90 } }}>
              {/* Company Info Card */}
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

              {/* Job Insights Card */}
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

      {/* Apply Modal */}
      <ApplyModal />

      {/* Mobile Bottom Bar */}
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
              onClick={() => setShowApplyModal(true)}
              sx={{ flex: 1, borderRadius: 28, fontWeight: 'bold' }}
            >
              Apply Now
            </Button>
            <IconButton
              onClick={() => setIsSaved(!isSaved)}
              sx={{
                bgcolor: isSaved ? 'primary.main' : 'grey.200',
                color: isSaved ? 'white' : 'text.primary',
                '&:hover': {
                  bgcolor: isSaved ? 'primary.dark' : 'grey.300'
                }
              }}
            >
              {isSaved ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
}