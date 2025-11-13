import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";

const Resume = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "16px",
        boxShadow: { xs: "none", md: "0 4px 20px rgba(0,0,0,0.08)" },
        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#6A1B9A", textTransform: "uppercase" }}
        >
          Jacqueline Thompson
        </Typography>
        <Typography sx={{ mt: 1, color: "#555" }}>
          123 Anywhere St., Any City • 123-456-7890 • hello@reallygreatsite.com
        </Typography>
        <Typography sx={{ color: "#555" }}>www.reallygreatsite.com</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Summary */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#6A1B9A",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Summary
        </Typography>

        <Typography sx={{ color: "#333", lineHeight: 1.6 }}>
          Results-oriented Engineering Executive with a proven track record of
          optimizing project outcomes. Skilled in strategic project management
          and team leadership. Seeking a challenging executive role to leverage
          technical expertise and drive engineering excellence.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Work Experience */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#6A1B9A",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Work Experience
        </Typography>

        {/* Job 1 */}
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>
              Engineering Executive, Borcelle Technologies
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#555" }}>
              Jan 2023 - Present
            </Typography>
          </Box>
          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
            <li>
              Implemented cost-effective solutions, resulting in a 20% reduction
              in project expenses.
            </li>
            <li>
              Streamlined project workflows, enhancing overall efficiency by
              25%.
            </li>
            <li>
              Led a team in successfully delivering a complex engineering
              project on time and within budget.
            </li>
          </ul>
        </Box>

        {/* Job 2 */}
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>
              Project Engineer, Salford & Co
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#555" }}>
              Mar 2021 - Dec 2022
            </Typography>
          </Box>
          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
            <li>
              Managed project timelines, reducing delivery times by 30%.
            </li>
            <li>
              Spearheaded the adoption of cutting-edge engineering software,
              improving accuracy by 15%.
            </li>
            <li>
              Collaborated with cross-functional teams, enhancing success rates
              by 10%.
            </li>
          </ul>
        </Box>

        {/* Job 3 */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>
              Graduate Engineer, Arowwai Industries
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#555" }}>
              Feb 2020 - Jan 2021
            </Typography>
          </Box>
          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
            <li>
              Coordinated project tasks, ensuring adherence to engineering
              standards and regulations.
            </li>
            <li>
              Conducted comprehensive analyses, identifying and rectifying
              design discrepancies.
            </li>
          </ul>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Education */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#6A1B9A",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Education
        </Typography>

        {/* Education 1 */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>
            Master of Science in Mechanical Engineering
          </Typography>
          <Typography sx={{ fontStyle: "italic", color: "#555" }}>
            University of Engineering and Technology
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "#666", fontSize: "0.9rem" }}>
            Sep 2019 - Oct 2020
          </Typography>
          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
            <li>Specialization in Advanced Manufacturing.</li>
            <li>
              Thesis on "Innovations in Sustainable Engineering Practices".
            </li>
          </ul>
        </Box>

        {/* Education 2 */}
        <Box>
          <Typography sx={{ fontWeight: 600 }}>
            Bachelor of Science in Civil Engineering
          </Typography>
          <Typography sx={{ fontStyle: "italic", color: "#555" }}>
            City College of Engineering
          </Typography>
          <Typography sx={{ fontWeight: 500, color: "#666", fontSize: "0.9rem" }}>
            Aug 2015 - Aug 2019
          </Typography>
          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
            <li>
              Relevant coursework in Structural Design and Project Management.
            </li>
          </ul>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Additional Info */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#6A1B9A",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          Additional Information
        </Typography>

        <Typography sx={{ lineHeight: 1.7 }}>
          <strong>Technical Skills:</strong> Project Management, Structural
          Analysis, Robotics and Automation, CAD
          <br />
          <strong>Languages:</strong> English, Malay, German
          <br />
          <strong>Certifications:</strong> Professional Engineer (PE) License,
          Project Management Professional (PMP)
          <br />
          <strong>Awards/Activities:</strong> Received the "Engineering
          Excellence" Award for outstanding contributions to project innovation,
          Borcelle Technologies
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
