import {
    Box, Container, Grid, Typography, Chip,
    Button, Card,
    Stack, Tab,
    CardMedia,
    CardContent,
    CardActionArea,

} from '@mui/material'
import React from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import image1 from '../../../Images/Rectangle 43.png'
import image2 from '../../../Images/Rectangle 45.png'
import image3 from '../../../Images/Rectangle 47.png'
import UI from '../../../Images/UI.png'
import '../Components/style.css'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import seoImage from '../../../Images/seo.png'
import hubSpot from '../../../Images/hubstpot.png'
import cross from '../../../Images/cross-platform.png'
import socilaMedia from '../../../Images/socialmedia.png'
import ThreeD from '../../../Images/3D.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// const JobCard = ({ job }) => (

// );

const EarningCard = ({ job }) => (
    <Card
        sx={{
            width: { md: "440px", lg: "300px", sm: "265px" },
            borderRadius: "33px",
            boxShadow: 3,
            p: 2,
            background: "#1B7CE538",
        }}
    >
        <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <CardMedia
                component="img"
                height="170"
                image={job?.img}
                alt="green iguana"
                sx={{ borderRadius: "33px" }}
            />
            <CardContent sx={{ padding: "16px 5px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Chip
                    label={job?.company}
                    size="small"
                    sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        fontWeight: 400,
                        borderRadius: "10px",
                        fontSize: "16px",
                        lineHeight: "138%",
                        letterSpacing: "0%",
                        padding: "30px 5px"
                    }}
                />
                <Typography sx={{
                    pl: "20px", fontSize: "16px",
                    lineHeight: "138%",
                    letterSpacing: "0%",
                    fontWeight: "400",
                    color: "#000"
                }}>
                    {job?.title}
                </Typography>

                <Box sx={{ ml: "30px" }}>
                    <Diversity1Icon />
                </Box>

            </CardContent>
        </CardActionArea>

        <CardContent sx={{ padding: "1px 5px", }}>
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

        </CardContent>



    </Card>
);


const Interview = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Static job data (3 Graphic Designers + 3 Web Designers)
    const jobData = [
        {
            img: image1,
            id: 1,
            title: "Artificial Intelligence",
            company: "Certification",
            location: "London, United Kingdom",
        },
        {
            img: image2,
            id: 2,
            title: "Robotics Intelligence",
            company: "Certification",
            location: "London, United Kingdom",
        },
        {
            img: image3,
            id: 3,
            title: "Cyber Security",
            company: "Certification",
            location: "London, United Kingdom",
        },

    ];

    const earningsData = [
        {
            img: UI,
            id: 1,
            title: "Graphic Designer",
            company: "Upwork",
            location: "London, United Kingdom",
        },
        {
            img: ThreeD,
            id: 2,
            title: "3D Animation Jobs",
            company: "Fiverr",
            location: "London, United Kingdom",
        },
        {
            img: socilaMedia,
            id: 3,
            title: "Social Media Marketing",
            company: "Upwork",
            location: "London, United Kingdom",
        },
        {
            img: cross,
            id: 4,
            title: "Cross Platform App Development",
            company: "Freelancer",
            location: "London, United Kingdom",
        },
        {
            img: hubSpot,
            id: 5,
            title: "Hubspot Lead Automation",
            company: "Fiverr",
            location: "London, United Kingdom",
        },
        {
            img: seoImage,
            id: 6,
            title: "Laravel SEO Toolkit Integration",
            company: "Upwork",
            location: "London, United Kingdom",
        },

    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{
                    minHeight: '600px',
                    background: '#D9D9D994',
                    padding: { md: "30px", xs: "30px 0px" },
                    pb: "50px"
                }}
            >
                <Container maxWidth="xl">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: { md: "48px", xs: "32px" },
                            lineHeight: "138%",
                            fontWeight: "600",
                            paddingBottom: "40px",
                        }}
                    >
                        Mock Interview by CVI
                    </Typography>

                    <Box sx={{ minHeight: "450px", bgcolor: "#D9D9D9", borderRadius: "42px", padding: "25px" }}>
                        <Grid container spacing={2}>
                            <Grid size={{ sm: 12, md: 2.5 }}>
                                <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: { md: "flex-end", sm: "center" }, flexDirection: "column" }}>
                                    <Typography
                                        sx={{

                                            fontSize: "30px",
                                            lineHeight: "138%",
                                            fontWeight: "400",
                                            paddingBottom: "20px",
                                            color: "#000000"
                                        }}
                                    >
                                        Get started with
                                        MCAI
                                    </Typography>
                                    <Typography
                                        sx={{

                                            fontSize: "16px",
                                            lineHeight: "138%",
                                            fontWeight: "400",
                                            paddingBottom: "40px",
                                            color: "#000000"
                                        }}
                                    >
                                        Identify, develop, and execute
                                        impactful MCAI business
                                        strategies.
                                    </Typography>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <Button variant='contained' sx={{
                                            padding: { xs: "10px 0px", lg: "10px 0px", sm: "10px 20px" }, borderRadius: "10px", backgroundColor: "#0862DC", fontSize: "16px",
                                            lineHeight: "138%",
                                            fontWeight: "400",
                                            paddingBottom: "20px",
                                            color: "#FFFFFF",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: { xs: "100%", sm: "auto", lg: "100%" },
                                            fontFamily: "Roboto"
                                        }}>
                                            View all MCAI <DoubleArrowIcon sx={{ ml: "10px" }} />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ sm: 12, md: 9.5 }} sx={{ pt: { xs: "20px", md: "0px" } }}>
                                <Box sx={{}}>
                                    <TabContext value={value}>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', pb: "2", ml: 2.5 }}>
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="job tabs"
                                                indicatorColor="none"
                                            >
                                                <Tab
                                                    label="New"
                                                    value="1"
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: "400",
                                                        textTransform: "capitalize",
                                                        color: "#000",
                                                        borderRadius: "21px",
                                                        backgroundColor: "#fff",
                                                        px: 2,
                                                        py: 0,
                                                        '&.Mui-selected': {
                                                            backgroundColor: "#1B7CE5",
                                                            color: "#fff",
                                                        },
                                                    }}
                                                />
                                                <Tab
                                                    label="Beginner"
                                                    value="2"
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: "400",
                                                        textTransform: "capitalize",
                                                        color: "#000",
                                                        borderRadius: "21px",
                                                        px: 4,
                                                        py: 1,
                                                        backgroundColor: "#fff",
                                                        ml: "30px",
                                                        '&.Mui-selected': {
                                                            backgroundColor: "#1B7CE5",
                                                            color: "#fff",
                                                        },
                                                    }}
                                                />
                                                <Tab
                                                    label="Popular"
                                                    value="3"
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: "400",
                                                        textTransform: "capitalize",
                                                        color: "#000",
                                                        borderRadius: "21px",
                                                        px: 3,
                                                        py: 1,
                                                        backgroundColor: "#fff",
                                                        ml: "30px",
                                                        '&.Mui-selected': {
                                                            backgroundColor: "#1B7CE5",
                                                            color: "#fff",
                                                        },
                                                    }}
                                                />
                                            </TabList>
                                        </Box>

                                        {/* === TAB ONE === */}
                                        <TabPanel value="1" sx={{ px: 0, py: 2 }}>
                                            <Grid container spacing={1} justifyContent="space-between">
                                                {jobData.map((job) => (
                                                    <Grid
                                                        key={job.id}
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        md={3}
                                                        display="flex"
                                                        justifyContent="space-between"
                                                    >
                                                        <Card
                                                            sx={{
                                                                width: { md: "440px", lg: "270px" },
                                                                borderRadius: "33px",
                                                                boxShadow: 3,
                                                                p: 2,
                                                                background: "linear-gradient(to bottom right, #f8fbff, #e9f0ff)",
                                                            }}
                                                        >
                                                            <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="140"
                                                                    image={job?.img}
                                                                    alt="green iguana"
                                                                    sx={{ borderRadius: "33px" }}
                                                                />
                                                                <CardContent sx={{ padding: "16px 5px", display: "flex", alignItems: "center" }}>
                                                                    <Chip
                                                                        label="AI"
                                                                        size="small"
                                                                        sx={{
                                                                            backgroundColor: "#000",
                                                                            color: "#fff",
                                                                            fontWeight: 400,
                                                                            borderRadius: "10px",
                                                                            fontSize: "16px",
                                                                            lineHeight: "138%",
                                                                            letterSpacing: "0%",
                                                                            padding: "20px 10px"
                                                                        }}
                                                                    />
                                                                    <Typography sx={{
                                                                        pl: "20px", fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000"
                                                                    }}>
                                                                        {job?.title}
                                                                    </Typography>

                                                                </CardContent>
                                                            </CardActionArea>
                                                            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                                                                <CardContent sx={{ padding: "1px 5px", }}>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000",
                                                                        pb: "10px"
                                                                    }}>
                                                                        Building AI Agent
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#0000007D"
                                                                    }}>
                                                                        {job?.company}
                                                                    </Typography>


                                                                </CardContent>
                                                                <CardContent sx={{ padding: "1px 5px", }}>


                                                                    <div>
                                                                        <Button
                                                                            id="basic-button"
                                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                                            aria-haspopup="true"
                                                                            aria-expanded={open ? 'true' : undefined}
                                                                            onClick={handleClick}
                                                                            sx={{textTransform:"capitalize"}}
                                                                            variant='contained'
                                                                            size='small'
                                                                        >
                                                                            Subscription
                                                                        </Button>
                                                                        <Menu
                                                                            id="basic-menu"
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            slotProps={{
                                                                                list: {
                                                                                    'aria-labelledby': 'basic-button',
                                                                                },
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>Regular</MenuItem>
                                                                            <MenuItem onClick={handleClose}>Premium</MenuItem>
                                                                          
                                                                        </Menu>
                                                                    </div>

                                                                </CardContent>
                                                            </Box>



                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </TabPanel>

                                        {/* === TAB TWO === */}
                                        <TabPanel value="2" sx={{ px: 0, py: 2 }}>
                                            <Grid container spacing={1} justifyContent="space-between">
                                                {jobData.map((job) => (
                                                    <Grid
                                                        key={job.id}
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        md={3}
                                                        display="flex"
                                                        justifyContent="space-between"
                                                    >
                                                        <Card
                                                            sx={{
                                                                width: { md: "440px", lg: "270px" },
                                                                borderRadius: "33px",
                                                                boxShadow: 3,
                                                                p: 2,
                                                                background: "linear-gradient(to bottom right, #f8fbff, #e9f0ff)",
                                                            }}
                                                        >
                                                            <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="140"
                                                                    image={job?.img}
                                                                    alt="green iguana"
                                                                    sx={{ borderRadius: "33px" }}
                                                                />
                                                                <CardContent sx={{ padding: "16px 5px", display: "flex", alignItems: "center" }}>
                                                                    <Chip
                                                                        label="AI"
                                                                        size="small"
                                                                        sx={{
                                                                            backgroundColor: "#000",
                                                                            color: "#fff",
                                                                            fontWeight: 400,
                                                                            borderRadius: "10px",
                                                                            fontSize: "16px",
                                                                            lineHeight: "138%",
                                                                            letterSpacing: "0%",
                                                                            padding: "20px 10px"
                                                                        }}
                                                                    />
                                                                    <Typography sx={{
                                                                        pl: "20px", fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000"
                                                                    }}>
                                                                        {job?.title}
                                                                    </Typography>

                                                                </CardContent>
                                                            </CardActionArea>
                                                            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                                                                <CardContent sx={{ padding: "1px 5px", }}>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000",
                                                                        pb: "10px"
                                                                    }}>
                                                                        Building AI Agent
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#0000007D"
                                                                    }}>
                                                                        {job?.company}
                                                                    </Typography>


                                                                </CardContent>
                                                                <CardContent sx={{ padding: "1px 5px", }}>


                                                                    <div>
                                                                        <Button
                                                                            id="basic-button"
                                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                                            aria-haspopup="true"
                                                                            aria-expanded={open ? 'true' : undefined}
                                                                            onClick={handleClick}
                                                                            sx={{textTransform:"capitalize"}}
                                                                            variant='contained'
                                                                            size='small'
                                                                        >
                                                                            Subscription
                                                                        </Button>
                                                                        <Menu
                                                                            id="basic-menu"
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            slotProps={{
                                                                                list: {
                                                                                    'aria-labelledby': 'basic-button',
                                                                                },
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>Regular</MenuItem>
                                                                            <MenuItem onClick={handleClose}>Premium</MenuItem>
                                                                          
                                                                        </Menu>
                                                                    </div>

                                                                </CardContent>
                                                            </Box>



                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </TabPanel>
                                        {/* === TAB Three === */}
                                        <TabPanel value="3" sx={{ px: 0, py: 2 }}>
                                            <Grid container spacing={2} justifyContent="space-between">
                                                {jobData.map((job) => (
                                                    <Grid
                                                        key={job.id}
                                                        item
                                                        xs={12}
                                                        sm={6}
                                                        md={3}
                                                        display="flex"
                                                        justifyContent="space-between"
                                                    >
                                                        <Card
                                                            sx={{
                                                                width: { md: "440px", lg: "270px" },
                                                                borderRadius: "33px",
                                                                boxShadow: 3,
                                                                p: 2,
                                                                background: "linear-gradient(to bottom right, #f8fbff, #e9f0ff)",
                                                            }}
                                                        >
                                                            <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="140"
                                                                    image={job?.img}
                                                                    alt="green iguana"
                                                                    sx={{ borderRadius: "33px" }}
                                                                />
                                                                <CardContent sx={{ padding: "16px 5px", display: "flex", alignItems: "center" }}>
                                                                    <Chip
                                                                        label="AI"
                                                                        size="small"
                                                                        sx={{
                                                                            backgroundColor: "#000",
                                                                            color: "#fff",
                                                                            fontWeight: 400,
                                                                            borderRadius: "10px",
                                                                            fontSize: "16px",
                                                                            lineHeight: "138%",
                                                                            letterSpacing: "0%",
                                                                            padding: "20px 10px"
                                                                        }}
                                                                    />
                                                                    <Typography sx={{
                                                                        pl: "20px", fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000"
                                                                    }}>
                                                                        {job?.title}
                                                                    </Typography>

                                                                </CardContent>
                                                            </CardActionArea>
                                                            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                                                                <CardContent sx={{ padding: "1px 5px", }}>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#000",
                                                                        pb: "10px"
                                                                    }}>
                                                                        Building AI Agent
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        fontSize: "16px",
                                                                        lineHeight: "138%",
                                                                        letterSpacing: "0%",
                                                                        fontWeight: "400",
                                                                        color: "#0000007D"
                                                                    }}>
                                                                        {job?.company}
                                                                    </Typography>


                                                                </CardContent>
                                                                <CardContent sx={{ padding: "1px 5px", }}>


                                                                    <div>
                                                                        <Button
                                                                            id="basic-button"
                                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                                            aria-haspopup="true"
                                                                            aria-expanded={open ? 'true' : undefined}
                                                                            onClick={handleClick}
                                                                            sx={{textTransform:"capitalize"}}
                                                                            variant='contained'
                                                                            size='small'
                                                                        >
                                                                            Subscription
                                                                        </Button>
                                                                        <Menu
                                                                            id="basic-menu"
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                             disableScrollLock 
                                                                              container={document.getElementById('card-root')} 
                                                                            onClose={handleClose}
                                                                            slotProps={{
                                                                                list: {
                                                                                    'aria-labelledby': 'basic-button',
                                                                                },
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>Regular</MenuItem>
                                                                            <MenuItem onClick={handleClose}>Premium</MenuItem>
                                                                          
                                                                        </Menu>
                                                                    </div>

                                                                </CardContent>
                                                            </Box>



                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "48px",
                                lineHeight: "138%",
                                fontWeight: "600",
                                padding: "40px 0px",
                            }}
                        >
                            My Earnings
                        </Typography>

                        <Grid container spacing={3} justifyContent="space-around" sx={{ padding: { sm: "0px 50px", xs: "0px 20px" } }}>
                            {earningsData.map((job) => (
                                <Grid
                                    key={job.id}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <EarningCard job={job} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            borderBottom: "2px solid #000",
                            width: "fit-content",           // keeps underline to content width
                            mx: "auto",
                            pt: "30px"

                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: "24px",
                                color: "#000",
                                padding: "0px 0",
                                fontWeight: "400",
                                lineHeight: "138%",
                                letterSpacing: "0%",

                            }}
                        >
                            See more jobs
                        </Typography>
                        <ChevronRightIcon sx={{ color: "#000" }} />
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default Interview
