import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
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
          color: "#fff",
        }}
      >
        {/* Pricing */}
        <Link
          underline="hover"
          color={activePage === "pricing" ? "#ff0" : "#fff"}
          onClick={() => setActivePage("pricing")}
          sx={{
            cursor: "pointer",
            fontWeight: activePage === "pricing" ? 600 : 400,
          }}
        >
          Pricing
        </Link>

        {/* Templates */}
        <Link
          underline="hover"
          color={
            ["templates", "createCv", "previewTemplate"].includes(activePage)
              ? "#ff0"
              : "#fff"
          }
          onClick={() => setActivePage("templates")}
          sx={{
            cursor: "pointer",
            fontWeight: ["templates", "createCv", "previewTemplate"].includes(activePage)
              ? 600
              : 400,
          }}
        >
          Templates
        </Link>

        {/* Conditional breadcrumbs for deeper pages */}
        {activePage === "createCv" && (
          <Typography sx={{ color: "#ff0", fontWeight: 600 }}>Create CV</Typography>
        )}
        {activePage === "previewTemplate" && (
          <Typography sx={{ color: "#ff0", fontWeight: 600 }}>Preview Template</Typography>
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumbss;
