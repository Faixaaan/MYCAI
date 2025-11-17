import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    Chip,
    Button,
    Stack,
    Grid,
    Tab,
    TextField,
    InputAdornment,
    Modal,
    Snackbar,
    Alert
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
import axios from "axios";

// ----------- Job Card Component -----------
const JobCard = ({ job, onApply, onSave }) => (
    <Card
        sx={{
            maxWidth: { md: "350px", lg: "320px", xs: "304px" },
            minWidth: { md: "330px", lg: "320px", xs: "304px" },
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            background: "linear-gradient(to bottom right, #f8fbff, #e9f0ff)",
        }}
    >

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

            {/* SAVE ICON */}
            <BookmarkBorder
                sx={{ fontSize: "35px", cursor: "pointer" }}
                onClick={onSave}
            />
        </Box>

        {/* Card Content */}
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box display="flex" alignItems="center">
                <img src='https://icons.veryicon.com/png/o/miscellaneous/fill/part-time-job.png' alt="" style={{ width: "50px", height: "50px" }} />
                <Box sx={{ pl: "10px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h6" fontWeight="400" sx={{ fontSize: "20px", color: "#000000", pb: "5px" }}>
                            {job.title.substring(0, 20)}
                        </Typography>
                        <BeenhereIcon color="primary" sx={{ ml: "30px" }} />
                    </Box>

                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ pb: "3px" }}>
                        <Business sx={{ fontSize: 16, color: "#000000" }} />
                        <Typography variant="body2" color="#000000" sx={{ fontSize: "12px", fontWeight: "400" }}>
                            {job?.company_name}
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <LocationOn sx={{ fontSize: 16, color: "#000" }} />
                        <Typography variant="body2" color="#000" sx={{ fontSize: "12px", fontWeight: "400" }}>
                            {job?.candidate_required_location}
                        </Typography>
                    </Stack>
                </Box>
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
                }}
            >
                AI Apply
            </Button>

            {/* APPLY BUTTON → triggers modal */}
            <Button
                variant="contained"
                onClick={onApply}
                sx={{
                    flex: 1,
                    maxWidth: "80px",
                    backgroundColor: "#4b8bff",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#3877ff" },
                    fontSize: "12px",
                    fontWeight: "400"
                }}
            >
                Apply
            </Button>
        </Stack>
    </Card>
);


// ----------- Main Component -----------

const TrendingJob = () => {
    const [value, setValue] = useState('1');

    // SAVE & APPLY STATES
    const [openApplyModal, setOpenApplyModal] = useState(false);
    const [openSave, setOpenSave] = useState(false);

    const handleApply = () => setOpenApplyModal(true);
    const handleSave = () => setOpenSave(true);

    const handleChange = (e, newValue) => setValue(newValue);

    const [data, setData] = useState({});
    const [job, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);

    const GetBannerData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.home.Banner);
            setData(res?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const DemoData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://remotive.com/api/remote-jobs`);
                setJobData(res?.data?.jobs?.slice(0, 6));
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        DemoData();
    }, []);

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
            <Chatbot />

            <Container maxWidth="lg">

                <Typography sx={{ textAlign: "center", fontSize: { md: "48px", xs: "24px" }, fontWeight: "600", pb: "20px" }}>
                    {data?.section1_heading}
                </Typography>

                {/* SEARCH BAR */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: "#0862DC", minHeight: { md: "70px", xs: "60px" }, p: "0px 13px", borderRadius: "32px", width: { md: "60%", xs: "100%" } }}>
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
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                ml: 2,
                                borderRadius: '30px',
                                height: { md: 45, xs: 35 },
                                backgroundColor: "#fff",
                                color: "#3246C4",
                                fontSize: { md: "13px", xs: "11px" },
                                textTransform: "capitalize",
                                width: "118px",
                                fontWeight: "600"
                            }}
                        >
                            Search Jobs
                        </Button>
                    </Box>
                </Box>

                <Typography sx={{ mt: 2, fontWeight: 600, fontSize: { md: "20px", xs: "15px" }, textAlign: "center", mb: "30px" }}>
                    Search 119,044 new jobs - 3,408 added in the last 24 hours
                </Typography>

                {/* TABS */}
                <TabContext value={value}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                        <TabList onChange={handleChange} indicatorColor="none">
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
                                    '&.Mui-selected': { backgroundColor: "#FF8014", color: "#fff" }
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
                                    '&.Mui-selected': { backgroundColor: "#FF8014", color: "#fff" }
                                }}
                            />
                        </TabList>
                    </Box>

                    {/* TAB 1 */}
                    <TabPanel value="1" sx={{ px: 0, py: 2 }}>
                        <Grid container spacing={3} justifyContent="center">
                            {job.map((job) => (
                                <Grid key={job.id} item xs={12} sm={6} md={4} display="flex" justifyContent="space-between">
                                    <JobCard job={job} onApply={handleApply} onSave={handleSave} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>

                    {/* TAB 2 */}
                    <TabPanel value="2" sx={{ px: 0, py: 2 }}>
                        <Typography variant="h6" align="center">
                            No NHS jobs available right now.
                        </Typography>
                    </TabPanel>
                </TabContext>

                <Box sx={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    cursor: "pointer", borderBottom: "2px solid #fff", width: "fit-content", mx: "auto"
                }}>
                    <Typography sx={{
                        textAlign: "center",
                        fontSize: "24px",
                        color: "#fff",
                        p: "10px 0",
                        fontWeight: "400"
                    }}>
                        See more Jobs
                    </Typography>
                    <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>

            </Container>

            {/* APPLY MODAL */}
            <Modal open={openApplyModal} onClose={() => setOpenApplyModal(false)}>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 300,
                    bgcolor: "white",
                    p: 3,
                    borderRadius: 2,
                    textAlign: "center"
                }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        🎉 You applied successfully!
                    </Typography>
                    <Button variant="contained" onClick={() => setOpenApplyModal(false)}>
                        Close
                    </Button>
                </Box>
            </Modal>

            {/* SAVE SNACKBAR */}
            <Snackbar
                open={openSave}
                autoHideDuration={2000}
                onClose={() => setOpenSave(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Saved Successfully!
                </Alert>
            </Snackbar>

        </Box>
    );
};

export default TrendingJob;
