import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Modal,
  TextField,
  Fade,

  Tabs,
  Tab,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SettingsIcon from "@mui/icons-material/Settings";
import BoltIcon from "@mui/icons-material/Bolt";
import PercentIcon from "@mui/icons-material/Percent";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonIcon from "@mui/icons-material/Person";
import { axiosInstance } from "../../api/axios/axios";
import { endpoints } from "../../api/endpoints/endpoints";
import { toast } from "react-toastify";



// ✅ Tab Components




const Wallet = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [tabValuee, setTabValuee] = useState(0);
  const [open, setOpen] = useState(false);
  const [tokenOpen, setTokenOpen] = useState(false);
  const [pendingData, setPendingData] = useState([])
  const [acepptData, setAcepptData] = useState([])
  const [cviValue, setCviValue] = useState({})
  const [walletAmount, setWalletAmount] = useState(0);
  const [cviValuee, setCviValuee] = useState({})
  const [form, setForm] = useState({
    cvi_value: "",

  });
  const [tokenform, setTokenForm] = useState({
    cvi_token: "",

  });

  // 🧠 State for wallet and user info

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangee = (e) => {
    setTokenForm({ ...tokenform, [e.target.name]: e.target.value });
  };

  // unique transaction id 

  const generateTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 100000);
    return `TXN-${timestamp}-${random}`;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionId = generateTransactionId();

    const payload = {
      user_id: userId,
      amount: form.cvi_value,
      transtion_id: transactionId, // note spelling matches your API
      status: true
    };

    try {
      const res = await axiosInstance.post(endpoints.cvi_wallet.request_transaction, payload)


      console.log("✅ API Response:", res.data);
      toast.success(res?.data?.message);
      setOpen(false);
      setForm({ cvi_value: "", transaction_type: "deposit" });
    } catch (err) {
      console.error("❌ Error submitting:", err);
      alert("Failed to submit transaction!");
      setOpen(false);
    }
  };

  // token handle form submit 

  const tokenHandleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: userId,
      cvi_token: tokenform.cvi_token,

    };

    try {
      const res = await axiosInstance.post(endpoints.cvi_wallet?.cvi_token, payload)


      console.log("✅ API Response:", res.data);
      toast.success(res?.data?.message);
      setTokenOpen(false);
      setForm({ cvi_value: "" });
    } catch (err) {
      console.error("❌ Error submitting:", err);
      toast.error(err?.response?.data?.message);
      setTokenOpen(false);

    }
  };

  // get api calling 

  useEffect(() => {
    const getData = async () => {
      try {
        if (!userId) {
          console.warn("User ID not available yet — skipping API call");
          return;
        }

        const res = await axiosInstance.get(
          `${endpoints.cvi_wallet.transaction_list}/${userId}`
        );
        const pendingRes = await axiosInstance.get(`${endpoints.cvi_wallet.payment_pending_transaction}/${userId}`);
        const cviValueRes = await axiosInstance.get(`${endpoints.cvi_wallet.convert_token}`);
        const walletRes = await axiosInstance.get(`${endpoints.cvi_wallet.single_user}/${userId}`)
        setAcepptData(res?.data)
        setPendingData(pendingRes?.data);
        setCviValue(walletRes?.data?.data?.cvi_amount || 0)
        setCviValuee(cviValueRes?.data?.cvi_value)

        setWalletAmount(walletRes?.data?.data?.real_amount)


        console.log(cviValueRes?.data?.cvi_value, "singleTransactionData");
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [userId]); // ✅ Re-run only when userId changes


  console.log(cviValue, 'value')

  const renderTabContent = () => {
    switch (tabValue) {
      // 🏠 Home Tab — keep your existing design here
      case 0:
        return (
          <Box>
            <Card
              sx={{
                width: { md: "100%", xs: "88%" },
                bgcolor: "#111827",
                borderRadius: "24px 24px 0px 0px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: 2.5,
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #7B61FF 0%, #4CC9F0 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                    }}
                  >
                    CVI
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                    CVI TOKEN WALLET
                  </Typography>
                </Box>
                <IconButton sx={{ color: "#fff" }}>
                  <SettingsIcon />
                </IconButton>
              </Box>

              {/* Main Balance */}
              <Box
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  p: 2,
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 0 6px rgba(255,255,255,0.15)",
                }}
              >
                <Typography sx={{ color: "#9CA3AF", fontSize: 14, mb: 1 }}>
                  Main Balance
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ fontSize: 22, letterSpacing: 2 }}>
                    {showBalance ? `${walletAmount} CVI` : "••••••••••"}
                  </Typography>
                  <IconButton
                    onClick={() => setShowBalance(!showBalance)}
                    sx={{ color: "#9CA3AF" }}
                  >
                    {showBalance ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </Box>
                <Box display="flex" gap={1.5} mt={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<SendIcon />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "#fff",
                      borderRadius: "12px",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#4CC9F0",
                        background: "rgba(76,201,240,0.1)",
                      },
                    }}
                    onClick={() => setOpen(true)}
                  >
                    Deposit
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "#fff",
                      borderRadius: "12px",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#4CC9F0",
                        background: "rgba(76,201,240,0.1)",
                      },
                    }}
                  >
                    Receive
                  </Button>
                </Box>
              </Box>

              {/* Wallet ID */}
              <Box
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  p: 2,
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 0 6px rgba(255,255,255,0.15)",
                }}
              >
                <Typography sx={{ color: "#9CA3AF", fontSize: 14, mb: 1 }}>
                  Wallet ID
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    p: "6px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: 14 }}>{userId || "USER6F3686EA"}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                      <QrCode2Icon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Grid container spacing={1}>
                {[
                  { icon: <BoltIcon />, label: "Buy Tokens" },
                  { icon: <PercentIcon />, label: "Daily Rewards" },
                  { icon: <AutorenewIcon />, label: "Compound" },

                ].map((item, i) => (
                  <Grid item xs={6} key={i}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={item.icon}
                      sx={{
                        borderColor: "rgba(255,255,255,0.25)",
                        color: "#fff",
                        borderRadius: "12px",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#4CC9F0",
                          background: "rgba(76,201,240,0.1)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              {/* Bottom Tabs */}
              {/* 🔹 Bottom Navigation Tabs */}

            </Card>
          </Box>
        );

      // 📜 History Tab — example layout
      case 1:
        return (
          <Box>
            <Card
              sx={{
                width: { md: "100%", xs: "88%" },
                bgcolor: "#111827",
                borderRadius: "24px 24px 0px 0px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: 2.5,
                minHeight: "440px",
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      width: 36,
                      minHeight: 36,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #7B61FF 0%, #4CC9F0 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                    }}
                  >
                    CVI
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                    CVI TOKEN WALLET
                  </Typography>
                </Box>
                <IconButton sx={{ color: "#fff" }}>
                  <SettingsIcon />
                </IconButton>
              </Box>

              {/* ✅ Tabs Section */}
              <Tabs
                value={tabValuee}
                onChange={(e, newValue) => setTabValuee(newValue)}
                textColor="inherit"
                TabIndicatorProps={{
                  style: { backgroundColor: "#4CC9F0" },
                }}
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                    color: "#ccc",
                    fontWeight: 500,
                  },
                  "& .Mui-selected": {
                    color: "#4CC9F0",
                  },
                }}
              >
                <Tab label="Pending" />
                <Tab label="Accepted / Declined" />
              </Tabs>

              {/* ✅ Tab Content */}
              <Box mt={2}>
                {tabValuee === 0 ? (
                  pendingData && pendingData.length > 0 ? (
                    pendingData.map((item, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          py: 1,
                        }}
                      >
                        <Typography>{item.cvi_value} CVI</Typography>
                        <Typography>{item.status}</Typography>
                        <Typography>{item.transition_type}</Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "rgba(255,255,255,0.6)",
                        py: 2,
                        fontSize: 14,
                      }}
                    >
                      No pending tokens
                    </Typography>
                  )
                ) : acepptData && acepptData.length > 0 ? (
                  acepptData.map((item, i) => (
                    <Box

                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        py: 1,
                      }}
                    >
                      <Typography>{item.cvi_value}</Typography>
                      <Typography>{item.status}</Typography>
                      <Typography>{item.transition_type}</Typography>
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgba(255,255,255,0.6)",
                      py: 2,
                      fontSize: 14,
                    }}
                  >
                    No accepted/rejected tokens
                  </Typography>
                )}
              </Box>

            </Card>
          </Box>
        );

      // 🔁 Swap Tab — example UI
      case 2:
        return (
          <Box>
            <Card
              sx={{
                width: { md: "100%", xs: "88%" },
                bgcolor: "#111827",
                borderRadius: "24px 24px 0px 0px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: 2.5,
                minHeight: "440px",
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      width: 36,
                      minHeight: 36,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #7B61FF 0%, #4CC9F0 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                    }}
                  >
                    CVI
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                    CVI TOKEN WALLET
                  </Typography>
                </Box>
                <IconButton sx={{ color: "#fff" }}>
                  <SettingsIcon />
                </IconButton>
              </Box>

              {/* heading */}

              <Typography>
                Own the Future – 1 Token at £{cviValuee || 0}


              </Typography>


              {/* 🔹 Balance Boxes */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {/* Main Balance Box */}
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                    Main Balance
                  </Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: 700, color: "#fff", mt: 0.5 }}>
                    £{walletAmount}
                  </Typography>
                </Box>

                {/* CVI Token Box */}
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                    CVI Tokens
                  </Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: 700, color: "#fff", mt: 0.5 }}
                  >
                    {cviValue}
                  </Typography>

                </Box>


              </Box>

              {/* action button */}


              <Box sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<BoltIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.25)",
                    color: "#fff",
                    borderRadius: "12px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#4CC9F0",
                      background: "rgba(76,201,240,0.1)",
                    },
                  }}
                  onClick={() => setTokenOpen(true)}
                >
                  Buy Tokens
                </Button>
              </Box>





            </Card>
          </Box>

        );

      // 👤 Profile Tab — example layout
      case 3:
        return (
          <Box>
            <Card
              sx={{
                width: { md: "100%", xs: "88%" },
                bgcolor: "#111827",
                borderRadius: "24px 24px 0px 0px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                p: { xs: 2.5, sm: 3 },
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: 2.5,
                minHeight: "440px"
              }}
            >
              {/* Header */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      width: 36,
                      minHeight: 36,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #7B61FF 0%, #4CC9F0 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                    }}
                  >
                    CVI
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                    CVI TOKEN WALLET
                  </Typography>

                </Box>
                <IconButton sx={{ color: "#fff" }}>
                  <SettingsIcon />
                </IconButton>
              </Box>


              <Box>
                <h1>no profile history yet </h1>
              </Box>



              {/* Bottom Tabs */}
              {/* 🔹 Bottom Navigation Tabs */}

            </Card>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        bgcolor: "#0B1120",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Box sx={{ flex: 1 }}>{renderTabContent()}</Box>
        <BottomNavigation
          showLabels
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{
            width: { md: "112.3%", xs: "99.6%" },
            background: "rgba(255,255,255,0.05)",
            borderRadius: "0px 0px 16px 16px",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            sx={{ color: "#fff", "&.Mui-selected": { color: "#4CC9F0" } }}
          />
          <BottomNavigationAction
            label="History"
            icon={<HistoryIcon />}
            sx={{ color: "#fff", "&.Mui-selected": { color: "#4CC9F0" } }}
          />
          <BottomNavigationAction
            label="Swap"
            icon={<SwapHorizIcon />}
            sx={{ color: "#fff", "&.Mui-selected": { color: "#4CC9F0" } }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonIcon />}
            sx={{ color: "#fff", "&.Mui-selected": { color: "#4CC9F0" } }}
          />
        </BottomNavigation>
      </Container>

      {/* Modal for Send Form */}
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Fade in={open}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#111827",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              width: 360,
              p: 3,
              color: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Enter Your Deposit Amount
            </Typography>

            {/* 💰 Deposit Amount Input */}
            <TextField
              label="Deposit Amount (£)"
              name="cvi_value"
              value={form.cvi_value}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              type="number"
              InputLabelProps={{ style: { color: "#9CA3AF" } }}
              sx={{
                mb: 2,
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.25)" },
                  "&:hover fieldset": { borderColor: "#4CC9F0" },
                },
              }}
            />

            {/* 💳 Payment Gateway Selection */}
            <Typography sx={{ color: "#9CA3AF", mb: 1 }}>
              Choose Payment Gateway:
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                onClick={() => setForm({ ...form, gateway: "paypal" })}
                variant={form.gateway === "paypal" ? "contained" : "outlined"}
                sx={{
                  flex: 1,
                  borderColor:
                    form.gateway === "paypal"
                      ? "transparent"
                      : "rgba(255,255,255,0.25)",
                  bgcolor: form.gateway === "paypal" ? "#00457C" : "transparent",
                  color: "#fff",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor:
                      form.gateway === "paypal"
                        ? "#003366"
                        : "rgba(76,201,240,0.1)",
                  },
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5VZrVz6OWbHg6cgV7YbMjRWYHcVdOXHYdNT5vxY_aT9Y1ZfLXY8lXvvIYIsUgYFEJJk&usqp=CAU"
                  alt="PayPal"
                  style={{ height: 20, marginRight: 8 }}
                />
                PayPal
              </Button>

              <Button
                onClick={() => setForm({ ...form, gateway: "stripe" })}
                variant={form.gateway === "stripe" ? "contained" : "outlined"}
                sx={{
                  flex: 1,
                  borderColor:
                    form.gateway === "stripe"
                      ? "transparent"
                      : "rgba(255,255,255,0.25)",
                  bgcolor: form.gateway === "stripe" ? "#635BFF" : "transparent",
                  color: "#fff",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor:
                      form.gateway === "stripe"
                        ? "#5146FF"
                        : "rgba(76,201,240,0.1)",
                  },
                }}
              >
                <img
                  src="https://cdn.sanity.io/images/5a711ubd/production/f150926f692a2e6053f931e3e701f119f3190b38-512x512.svg?w=128&h=128"
                  alt="Stripe"
                  style={{ height: 18, marginRight: 8 }}
                />
                Stripe
              </Button>
            </Box>

            {/* 🟦 Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!form.cvi_value || !form.gateway}
              sx={{
                bgcolor: !form.cvi_value || !form.gateway ? "#3A3A3A" : "#00C6FF",
                color: !form.cvi_value || !form.gateway ? "#fff" : "#000",
                fontWeight: 600,
                borderRadius: "12px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor:
                    !form.cvi_value || !form.gateway ? "#3A3A3A" : "#00AEEF",
                  cursor:
                    !form.cvi_value || !form.gateway ? "not-allowed" : "pointer",
                },
                "&.Mui-disabled": {
                  color: "#fff", // ✅ Force white color when disabled
                  opacity: 1, // ✅ Prevent MUI from dimming it
                  backgroundColor: "#3A3A3A", // ✅ Keep dark gray visible
                },
              }}
            >
              Continue to Payment
            </Button>


          </Box>
        </Fade>
      </Modal>


      {/* token converted modal */}

      <Modal open={tokenOpen} onClose={() => setOpen(false)} closeAfterTransition>
        <Fade in={tokenOpen}>
          <Box
            component="form"
            onSubmit={tokenHandleSubmit}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#111827",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              width: 340,
              p: 3,
              color: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Send CVI Tokens
            </Typography>

            <TextField
              label="CVI Token"
              name="cvi_token"
              value={form.cvi_token}
              onChange={handleChangee}
              fullWidth
              variant="outlined"
              type="number"
              InputLabelProps={{ style: { color: "#9CA3AF" } }}
              sx={{
                mb: 2,
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.25)" },
                  "&:hover fieldset": { borderColor: "#4CC9F0" },
                },
              }}
            />



            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#4CC9F0",
                color: "#000",
                fontWeight: 600,
                borderRadius: "12px",
                textTransform: "none",
                "&:hover": { bgcolor: "#38bdf8" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Wallet;
