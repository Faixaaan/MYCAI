import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Modal,
    Fade,
    Backdrop,
} from "@mui/material";

const Cookies = () => {
    const [open, setOpen] = useState(false);

    // Open popup automatically when page loads
    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 500); // opens after 1 sec
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setOpen(false);
        console.log("✅ Accepted!");
    };

    const handleReject = () => {
        setOpen(false);
        console.log("❌ Rejected!");
    };

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "80%", sm: 380, md: 420 },
                        bgcolor: "#ffffff", // 👈 solid white removes ghost border
                        backdropFilter: "blur(8px)",
                        borderRadius: "10px", // smaller & subtle
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", // soft modern shadow
                        p: { xs: 2, sm: 3 },
                        textAlign: "center",
                        color: "#1B1B1B",
                        zIndex: 2000,
                        border: "none", // 👈 ensure no border at all
                        outline: "none", // 👈 removes any focus outline
                    }}
                >
                    {/* Cookie Icon */}
                    <Box
                        sx={{
                            width: 55,
                            height: 55,
                            mx: "auto",
                            mb: 1.5,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0 3px 10px rgba(27, 124, 229, 0.15)",
                        }}
                    >
                        <Typography sx={{ fontSize: "28px" }}>🍪</Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 1,
                            fontWeight: 700,
                            fontSize: { xs: "16px", sm: "18px" },
                            color: "#1B1B1B",
                        }}
                    >
                        Allow cookies for a better experience?
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            mb: 2.5,
                            fontSize: { xs: "13px", sm: "14px" },
                            color: "rgba(0,0,0,0.7)",
                            lineHeight: 1.5,
                        }}
                    >
                        We use cookies to enhance your experience, analyze site traffic, and deliver
                        personalized content. You can accept all cookies or reject non-essential ones.
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 1.5,
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleAccept}
                            sx={{
                                background: "linear-gradient(135deg, #1B7CE5 0%, #4BA3FF 100%)",
                                color: "#fff",
                                textTransform: "capitalize",
                                borderRadius: "8px",
                                px: 2.5,
                                py: 0.8,
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: "110px",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #1770CF 0%, #358EFF 100%)",
                                    transform: "scale(1.04)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Accept
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={handleReject}
                            sx={{
                                color: "#1B7CE5",
                                borderColor: "#1B7CE5",
                                textTransform: "capitalize",
                                borderRadius: "8px",
                                px: 2.5,
                                py: 0.8,
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: "110px",
                                "&:hover": {
                                    backgroundColor: "rgba(27, 124, 229, 0.05)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Reject
                        </Button>
                    </Box>
                </Box>




            </Fade>
        </Modal>
    );
};

export default Cookies;
