import React from "react";
import { Box, Breadcrumbs, Link } from "@mui/material";
import breadcrumbsImage from "../../../Images/BreadCrumbs.jpg";

const Breadcrumbss = ({ activePage, setActivePage }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${breadcrumbsImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
        width: "100%",
        height: { xs: "160px", sm: "200px", md: "250px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<span style={{ color: "#fff" }}>/</span>}
        sx={{
          p: { xs: 1, sm: 1.5 },
          borderRadius: "8px",
          fontSize: { xs: "14px", sm: "16px" },
        }}
      >
        <Link
          underline="hover"
          color={activePage === "pricing" ? "#ff0" : "#fff"}
          onClick={() => setActivePage("pricing")}
          sx={{ cursor: "pointer", fontWeight: activePage === "pricing" ? 600 : 400 }}
        >
          Pricing
        </Link>

        <Link
          underline="hover"
          color={activePage === "templates" ? "#ff0" : "#fff"}
          onClick={() => setActivePage("templates")}
          sx={{ cursor: "pointer", fontWeight: activePage === "templates" ? 600 : 400 }}
        >
          Templates
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumbss;
