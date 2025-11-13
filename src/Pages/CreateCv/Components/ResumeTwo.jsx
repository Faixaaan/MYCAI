import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Resume2 = () => {
  return (
    <Box
      sx={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fff",
        color: "#000",
        p: 4,
        maxWidth: "900px",
        mx: "auto",
        border: "1px solid #ddd",
        boxShadow: 2,
      }}
    >
      {/* HEADER */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="700">
          Lorna Alvarado
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Marketing Manager
        </Typography>

        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            mt: 2,
            py: 1.5,
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2">📞 +123-456-7890</Typography>
          <Typography variant="body2">✉️ hello@reallygreatsite.com</Typography>
          <Typography variant="body2">📍 123 Anywhere St., Any City</Typography>
        </Box>
      </Box>

      {/* BODY GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 2fr",
          },
          gap: 4,
        }}
      >
        {/* LEFT COLUMN */}
        <Box>
          {/* EDUCATION */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            EDUCATION
          </Typography>
          <Typography fontWeight="600">BA Sales and Commerce</Typography>
          <Typography>Borcelle University</Typography>
          <Typography variant="body2" color="text.secondary">
            (2016 - 2020)
          </Typography>

          <Box mt={2}>
            <Typography fontWeight="600">Bachelor of Design</Typography>
            <Typography>Wardiere University</Typography>
            <Typography variant="body2" color="text.secondary">
              (2011 - 2015)
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography fontWeight="600">BA Sales and Commerce</Typography>
            <Typography>Borcelle University</Typography>
            <Typography variant="body2" color="text.secondary">
              (2020 - 2023)
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* SKILLS */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            SKILLS
          </Typography>
          <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
            <li>Management Skills</li>
            <li>Digital Marketing</li>
            <li>Negotiation</li>
            <li>Critical Thinking</li>
            <li>Communication Skills</li>
          </ul>

          <Divider sx={{ my: 3 }} />

          {/* LANGUAGE */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            LANGUAGE
          </Typography>
          <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
        </Box>

        {/* RIGHT COLUMN */}
        <Box>
          {/* PROFILE */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            PROFILE
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
            amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam
            eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a,
            sollicitudin in arcu.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* WORK EXPERIENCE */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            WORK EXPERIENCE
          </Typography>

          <Box mb={2}>
            <Typography fontWeight="600">Ginyard International Co.</Typography>
            <Typography variant="subtitle2">
              Product Design Manager &nbsp; | &nbsp; 2020 – 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut
              quam eget, luctus sollicitudin neque.
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography fontWeight="600">Liceria & Co.</Typography>
            <Typography variant="subtitle2">
              Product Design Manager &nbsp; | &nbsp; 2019 – 2020
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut
              quam eget, luctus sollicitudin neque.
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography fontWeight="600">Ginyard International Co.</Typography>
            <Typography variant="subtitle2">
              Product Design Manager &nbsp; | &nbsp; 2017 – 2019
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut
              quam eget, luctus sollicitudin neque.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* REFERENCES */}
          <Typography variant="h6" fontWeight="600" gutterBottom>
            REFERENCES
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box>
              <Typography fontWeight="600">Bailey Dupont</Typography>
              <Typography variant="body2">Wardiere Inc. / CEO</Typography>
              <Typography variant="body2">
                <strong>Phone:</strong> 123-456-7890
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong> hello@reallygreatsite.com
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="600">Harumi Kobayashi</Typography>
              <Typography variant="body2">Wardiere Inc. / CEO</Typography>
              <Typography variant="body2">
                <strong>Phone:</strong> 123-456-7890
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong> hello@reallygreatsite.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume2;
