import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    Avatar,
    Chip,
    Button,
    
    Stack,
    Grid,
    Tab,
    TextField,
    InputAdornment
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { LocationOn, Business, BookmarkBorder } from "@mui/icons-material";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Chatbot from './Chatbot';
import SearchIcon from '@mui/icons-material/Search';
import { axiosInstance } from "../../../api/axios/axios";
import { endpoints } from "../../../api/endpoints/endpoints";

// ----------- Job Card Component -----------
const JobCard = ({ job }) => (
    <Card
        sx={{
            minWidth: { md: "330px", lg: "320px", xs: "304px" },

            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            background: "linear-gradient(to bottom right, #f8fbff, #e9f0ff)",
        }}
    >
        {/* Header Chips */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1} mb={2}>
                <Chip
                    label="New"
                    size="small"
                    sx={{
                        backgroundColor: "#3246C4B0",
                        color: "#fff",
                        fontWeight: 400,
                        borderRadius: "7px",
                        fontSize: "12px",
                        lineHeight: "138%",
                        letterSpacing: "0%"
                    }}
                />
                <Chip
                    label="Urgently Hiring"
                    size="small"
                    sx={{
                        backgroundColor: "#3246C4B0",
                        color: "#fff",
                        fontWeight: 400,
                        borderRadius: "7px",
                        fontSize: "12px",
                        lineHeight: "138%",
                        letterSpacing: "0%"
                    }}
                />

            </Stack>
            <BookmarkBorder sx={{ fontSize: "35px", cursor: "pointer" }} />
        </Box>


        {/* Card Content */}
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            {/* Left Side */}
            <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "grey.800", width: 48, height: 48, mr: 2 }} />
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" fontWeight="400" sx={{ fontSize: "20px", color: "#000000", pb: "5px" }}>
                            {job.title}
                        </Typography>
                        <BeenhereIcon color="primary" sx={{ ml: "30px" }} />
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ pb: "3px" }}>
                        <Business sx={{ fontSize: 16, color: "#000000" }} />
                        <Typography variant="body2" color="#000000" sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "138%", letterSpacing: "0%" }}>
                            {job.company}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <LocationOn sx={{ fontSize: 16, color: "#000" }} />
                        <Typography variant="body2" color="#000" sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "138%", letterSpacing: "0%" }}>
                            {job.location}
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Right Side */}
            <Box display="flex" flexDirection="column" alignItems="flex-end">


            </Box>
        </Box>

        {/* Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
            <Button
                variant="contained"
                sx={{
                    maxWidth: "100px",
                    flex: 1,
                    backgroundColor: "#4b8bff",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#3877ff" },
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "138%",
                    letterSpacing: "0%"
                }}
            >
                AI Apply
            </Button>
            <Button
                variant="contained"
                sx={{
                    flex: 1,
                    maxWidth: "80px",
                    backgroundColor: "#4b8bff",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#3877ff" },
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "138%",
                    letterSpacing: "0%"
                }}
            >
                Apply
            </Button>
        </Stack>
    </Card>
);

// ----------- Main Component -----------
const TrendingJob = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Static job data (3 Graphic Designers + 3 Web Designers)
    const jobData = [
        {
            id: 1,
            title: "Data Analyst",
            company: "CVI",
            location: "London, United Kingdom",
        },
        {
            id: 2,
            title: "Business Analyst",
            company: "CVI",
            location: "London, United Kingdom",
        },
        {
            id: 3,
            title: "Cyber Security",
            company: "CVI",
            location: "London, United Kingdom",
        },
        {
            id: 4,
            title: "Solution Architect",
            company: "CVI",
            location: "London, United Kingdom",
        },
        {
            id: 5,
            title: "Graphic Designer",
            company: "CVI",
            location: "London, United Kingdom",
        },
        {
            id: 6,
            title: "Full Stack Developer",
            company: "CVI",
            location: "London, United Kingdom",
        },
    ];

     const [data, setData] = useState({});
        
          const GetBannerData = async () => {
            try {
              const res = await axiosInstance.get(endpoints.home.Banner);
              console.log(res?.data, "bannerdata");
              setData(res?.data);
            } catch (err) {
              console.error(
                "Error fetching banner data:",
                err.response?.data || err.message
              );
            }
          };
        
          useEffect(() => {
            GetBannerData();
          }, []);

    return (
        <Box
            sx={{
                minHeight: '600px',
                background: 'linear-gradient(to bottom, #ffffff 0%, #0862DC 100%)',
                padding: { xs: "30px 0px", md: "30px" },
                position: "relative"
            }}
        >
            <Box sx={{}}>
                <Chatbot />
            </Box>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: { md: "48px", xs: "24px" },
                        lineHeight: "138%",
                        fontWeight: "600",
                        paddingBottom: "20px",
                    }}
                >
                    {data?.section1_heading}
                </Typography>


                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: "#0862DC", minHeight: { md: "70px", xs: "60px" }, padding: "0px 13px", borderRadius: "32px", width: { md: "60%", xs: "100%" } }}>
                        <TextField
                            variant="outlined"
                            placeholder="AI enabled jobs"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                                sx: {
                                    height: { md: 45, xs: 35 },
                                    backgroundColor: "#fff",
                                    borderRadius: '30px',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },

                                },
                            }}
                            sx={{
                                bgcolor: 'transparent',
                                '& .MuiOutlinedInput-root': {
                                    paddingRight: 0,
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                ml: 2,
                                borderRadius: '30px',
                                height: { md: 45, xs: 35 },
                                backgroundColor: "#fff",
                                color: "#3246C4",
                                fontSize: { md: "13px", xs: "11px" },
                                textTransform: "capitalize",
                                width: "118px",
                                whiteSpace: 'nowrap',       // Prevent text wrap
                                overflow: 'hidden',         // Hide overflow if any
                                textOverflow: 'ellipsis',
                                lineHeight: "138%",

                                fontWeight: "600"

                            }}
                        >
                            Search Jobs
                        </Button>

                    </Box>
                </Box>
               
                    <Typography sx={{ mt: 2, fontWeight: 600, fontSize: { md: "20px", xs: "15px" }, lineHeight: "138%", letterSpacing: "0%", color: "#000", textAlign: "center", mb: "30px", padding: "15px 20px", width: "100%" }}>
                        Search 119,044 new jobs - 3,408 added in the last 24 hours
                    </Typography>
                




                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="job tabs"
                                indicatorColor="none"
                            >
                                <Tab
                                    label="Search for Global Jobs"
                                    value="1"
                                    sx={{
                                        fontSize: { md: "26px", xs: "14px" },
                                        fontWeight: "400",
                                        textTransform: "capitalize",
                                        color: "#000",
                                        borderRadius: "29px",
                                        px: { md: 3 },
                                        py: 1,
                                        '&.Mui-selected': {
                                            backgroundColor: "#FF8014",
                                            color: "#fff",
                                        },
                                    }}
                                />
                                <Tab
                                    label="Search for NHS Jobs"
                                    value="2"
                                    sx={{
                                        fontSize: { md: "26px", xs: "14px" },
                                        fontWeight: "400",
                                        textTransform: "capitalize",
                                        color: "#000",
                                        borderRadius: "29px",
                                        px: 3,
                                        py: 1,
                                        ml: { md: "30px", xs: "0px" },
                                        '&.Mui-selected': {
                                            backgroundColor: "#FF8014",
                                            color: "#fff",
                                        },
                                    }}
                                />
                            </TabList>
                        </Box>

                        {/* === TAB ONE === */}
                        <TabPanel value="1" sx={{ px: 0, py: 2 }}>
                            <Grid container spacing={3} justifyContent="center">
                                {jobData.map((job) => (
                                    <Grid
                                        key={job.id}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}

                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <JobCard job={job} />
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>

                        {/* === TAB TWO === */}
                        <TabPanel value="2" sx={{ px: 0, py: 2 }}>
                            <Typography variant="h6" align="center">
                                No NHS jobs available right now.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            borderBottom: "2px solid #fff", // 👈 white underline
                            width: "fit-content",           // keeps underline to content width
                            mx: "auto",                     // centers the box horizontally
                            "&:hover": {
                                borderBottomColor: "#FF8014", // optional: hover color change
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "24px",
                                color: "#fff",
                                padding: "10px 0",
                                fontWeight: "400",
                                lineHeight: "138%",
                                letterSpacing: "0%",
                            }}
                        >
                            See more Jobs
                        </Typography>
                        <ChevronRightIcon sx={{ color: "#fff" }} />
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default TrendingJob;
