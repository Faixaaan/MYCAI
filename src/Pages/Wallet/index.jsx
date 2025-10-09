import React, { useState } from "react";
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
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonIcon from "@mui/icons-material/Person";

const Wallet = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [tabValue, setTabValue] = useState(0);

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
        <Card
          sx={{
            width: {md:"100%",xs:"88%"},
            bgcolor: "#111827",
            borderRadius: "24px",
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
                {showBalance ? "12,540 CVI" : "••••••••••"}
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
              >
                Send
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
              <Typography sx={{ fontSize: 14 }}>0x1234...5678</Typography>
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
              { icon: <HistoryIcon />, label: "History" },
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

          {/* Embedded Bottom Tabs */}
          <BottomNavigation
            showLabels
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            sx={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 0 6px rgba(255,255,255,0.15)",
              width: "100%",
              mt: 1,
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              sx={{
                color: "#fff",
                "&.Mui-selected": { color: "#4CC9F0" },
              }}
            />
            <BottomNavigationAction
              label="Wallet"
              icon={<AccountBalanceWalletIcon />}
              sx={{
                color: "#fff",
                "&.Mui-selected": { color: "#4CC9F0" },
              }}
            />
            <BottomNavigationAction
              label="Swap"
              icon={<SwapHorizIcon />}
              sx={{
                color: "#fff",
                "&.Mui-selected": { color: "#4CC9F0" },
              }}
            />
            <BottomNavigationAction
              label="Profile"
              icon={<PersonIcon />}
              sx={{
                color: "#fff",
                "&.Mui-selected": { color: "#4CC9F0" },
              }}
            />
          </BottomNavigation>
        </Card>
      </Container>
    </Box>
  );
};

export default Wallet;
