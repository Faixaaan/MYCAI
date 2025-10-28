import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import bannerImg from '../../../Images/banner.png';
import PhonebannerImg from '../../../Images/phoneBanner.png';
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import { axiosInstance } from "../../../api/axios/axios";
import { endpoints } from "../../../api/endpoints/endpoints";

const Banner = () => {


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
                position: 'relative',
                width: '100%',
                minHeight: { md: '810px', xs: "500px" },
                backgroundImage: {
                    xs: `url(${data?.banner_img_mobile})`,
                    md: `url(${data?.banner_img_desktop})`,
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* This Box is the container for the textfield + button + text content */}
            <Box
                sx={{
                    position: 'absolute', // allows free positioning over the banner
                    top: { md: '77%', xs: "92%" },  // adjust this to move vertically
                    left: { md: '70%', xs: "50%" }, // adjust this to move horizontally
                    transform: 'translate(-50%, -50%)', // center the box at the position

                    padding: 3,
                    borderRadius: 3,
                    maxHeight: "70px",

                    width: { md: '70%', xs: "90%" },
                    maxWidth: 700,
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >


                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: { md: "70px", xs: "50px" },
                        padding: "0px 13px",
                        borderRadius: "32px",
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Chat CVI..."
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/* ➕ Icon with light background */}
                                    <Box
                                        sx={{
                                            backgroundColor: "#F4F4F4",
                                            borderRadius: "50%",
                                            width: 34,
                                            height: 34,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mr: 1,
                                        }}
                                    >
                                        <AddIcon sx={{ color: "#000", fontSize: 20,cursor:"pointer" }} />
                                    </Box>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    {/* 🎙️ Mic Icon */}
                                    <IconButton
                                        sx={{
                                            color: "#000",
                                            mr: 1,
                                        }}
                                    >
                                        <MicIcon />
                                    </IconButton>

                                    {/* 🟣 Gradient Send Button */}
                                    <IconButton
                                        sx={{
                                            background:
                                                "linear-gradient(90deg, #A334FA 0%, #FF7A00 100%)",
                                            color: "#fff",
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            "&:hover": {
                                                opacity: 0.9,
                                            },
                                            mr:2
                                        }}
                                    >
                                        <SendIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            sx: {
                                height: { md: 55, xs: 45 },
                                backgroundColor: "#fff",
                                borderRadius: "30px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                padding:{md:"5px 20px",xs:"3px 20px"}
                            },
                        }}
                        sx={{
                            bgcolor: "transparent",
                            "& .MuiOutlinedInput-root": {
                                paddingRight: 0,
                            },
                        }}
                    />
                </Box>


            </Box>
        </Box>
    );
};

export default Banner;
