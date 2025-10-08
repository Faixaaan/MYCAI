import { 
    Box, 
    Paper, 
    Typography, 
    TextField, 
    Button, 
    IconButton,
    Avatar,
    Fade
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import chatBot from "../../../Images/ChatBot.png";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SendIcon from '@mui/icons-material/Send';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! Welcome we're here to help.", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const toggleChat = () => setOpen(!open);
    const minimizeChat = () => setOpen(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (input.trim() === "") return;
        
        const userMessage = { text: input, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        setTimeout(() => {
            const botResponses = [
                "Hello! How can I help you today?",
                "I'm here to assist you. What would you like to know?",
                "Thanks for your message! How can I help?",
                "I'm an AI assistant. Feel free to ask me anything!"
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            setMessages(prev => [...prev, { text: randomResponse, sender: "bot" }]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chatbox */}
            <Fade in={open} timeout={300}>
                <Box 
                    sx={{ 
                        position: "fixed", 
                        bottom: { xs: "110px", sm: "100px", md: "120px" }, 
                        right: { xs: "100px", sm: "24px", md: "32px" }, 
                        zIndex: 9999 
                    }}
                >
                    <Paper
                        elevation={16}
                        sx={{
                            width: { xs: 270, sm: 340, md: 380 }, // responsive widths
                            height: { xs: 420, sm: 480, md: 520 }, // responsive heights
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "20px",
                            overflow: "hidden",
                            backgroundColor: "#fff",
                            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        {/* Header */}
                        <Box
                            sx={{
                                background: "linear-gradient(135deg, #FF8014, #6A35A1)",
                                color: "#fff",
                                p: { xs: 2, sm: 3 },
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography 
                                    sx={{ 
                                        fontSize: { xs: "18px", sm: "20px" },
                                        fontWeight: "600", 
                                        display: "flex", 
                                        alignItems: "center",
                                        gap: 0.5
                                    }}
                                >
                                    Chat CVI
                                    <KeyboardDoubleArrowRightIcon fontSize="small" />
                                </Typography>
                                <Typography 
                                    onClick={minimizeChat}
                                    sx={{ 
                                        fontSize: { xs: "16px", sm: "18px" }, 
                                        display:"flex", 
                                        alignItems:"center",
                                        color:"#fff",
                                        cursor:"pointer"
                                    }}
                                >
                                    <ChevronLeftIcon /> Minimize
                                </Typography>
                            </Box>

                            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500", pt: "10px" }}>
                                Hi there!
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "16px", sm: "20px" }, opacity: 0.9, mt: 0.5, fontWeight:"300" }}>
                                Welcome we’re here to help.
                            </Typography>
                        </Box>

                        {/* Messages */}
                        <Box 
                            sx={{ 
                                flex: 1, 
                                p: { xs: 1.5, sm: 2 }, 
                                overflowY: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                                backgroundColor: "#f8f9fa"
                            }}
                        >
                            {messages.map((msg, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                                        alignItems: "flex-start",
                                        gap: 1
                                    }}
                                >
                                    {msg.sender === "bot" && (
                                        <Box
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "primary.main",
                                                minWidth: 32
                                            }}
                                        >
                                            <img
                                                src={chatBot}
                                                alt="Bot"
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    objectFit: "contain",
                                                    filter: "brightness(0) invert(1)"
                                                }}
                                            />
                                        </Box>
                                    )}
                                    <Paper
                                        sx={{
                                            maxWidth: "70%",
                                            p: { xs: 1.2, sm: 2 },
                                            background: msg.sender === "user" 
                                                ? "linear-gradient(135deg, #2196F3, #1976D2)" 
                                                : "white",
                                            color: msg.sender === "user" ? "#fff" : "text.primary",
                                            borderRadius: msg.sender === "user" 
                                                ? "18px 18px 4px 18px" 
                                                : "18px 18px 18px 4px",
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, lineHeight: "1.4" }}>
                                            {msg.text}
                                        </Typography>
                                    </Paper>
                                    {msg.sender === "user" && (
                                        <Avatar
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                bgcolor: "secondary.main",
                                                fontSize: "0.8rem"
                                            }}
                                        >
                                            You
                                        </Avatar>
                                    )}
                                </Box>
                            ))}
                            <div ref={messagesEndRef} />
                        </Box>

                        {/* Input Area */}
                        <Box 
                            sx={{ 
                                p: { xs: 1.5, sm: 2 },
                                borderTop: "1px solid",
                                borderColor: "divider",
                                backgroundColor: "white"
                            }}
                        >
                            <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    multiline
                                    maxRows={3}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px",
                                            backgroundColor: "#f8f9fa",
                                            "&:hover fieldset": {
                                                borderColor: "primary.main",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "primary.main",
                                            },
                                        }
                                    }}
                                />
                                <IconButton
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        width: 40,
                                        height: 40,
                                        "&:hover": {
                                            backgroundColor: "primary.dark",
                                        },
                                        "&:disabled": {
                                            backgroundColor: "grey.300",
                                        }
                                    }}
                                >
                                    <SendIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Fade>

            {/* Chatbot Icon */}
            <Fade in={true} timeout={300}>
                <Box
                    onClick={toggleChat}
                    sx={{
                        position: "fixed",
                        bottom: { xs: "125px", sm: "24px", md: "32px" },
                        right: { xs: "40px", sm: "24px", md: "32px" },
                        cursor: "pointer",
                        zIndex: 9999,
                        width: { xs: 50, sm: 70, md: 80 },
                        height: { xs: 50, sm: 70, md: 80 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #FF8014, #6A35A1)",
                        borderRadius: "50%",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.1)",
                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
                        },
                        "&:active": {
                            transform: "scale(0.95)",
                        }
                    }}
                >
                    <img
                        src={chatBot}
                        alt="Chatbot"
                        style={{
                            width: "50%",
                            height: "50%",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Fade>
        </>
    );
};

export default Chatbot;
