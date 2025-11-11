import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../api/axios/axios";
import { endpoints } from "../../../api/endpoints/endpoints";

const Faq = () => {
  const questions = [
    "How does the AI help generate resumes?",
    "Can I customize my resume layout?",
    "Is BetterCV free to use?",
    "How do I download my resume as a PDF?",
    "Can I edit my resume after downloading?",
    "What templates are available?",
  ];

  const [data, setData] = useState({});
  const [faqData,setFaqData] = useState([])
  
    const GetBannerData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.course.banner);
        const faqRes = await axiosInstance.get(endpoints.course.faqs);
        setFaqData(faqRes?.data?.faq);
        console.log(faqRes?.data?.faq, "bannerdata");
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
    <Box sx={{ bgcolor: "#D9D9D9", width: "100%", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 600,
            lineHeight: "138%",
            color: "#000",
          }}
        >
         {data?.section4_heading}
        </Typography>

        {/* Accordions */}
        <Box sx={{ mt: 6 }}>
          {faqData.map((question, index) => (
            <Accordion
              key={index}
              defaultExpanded={index === 0}
              sx={{
                mb: 2,
                boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                bgcolor: "#fff",
                overflow: "hidden",
                borderRadius: "12px",
                padding:"5px",

                // 🟢 Fix: ensure radius is visible even for first & last accordions
                "&:first-of-type": {
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                },
                "&:last-of-type": {
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                },
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  {question?.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {question?.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:6}}>
            <Button variant="contained" sx={{bgcolor:"transparent",borderRadius:"9px",padding:{md:"8px 21px",xs:"6px 21px"},textTransform:"capitalize",color:"#000",border:"1px solid #000"}}>
               See More FAQ..
            </Button>
            <Button variant="contained" sx={{ml:5,bgcolor:"#FF8014",borderRadius:"9px",padding:"8px 28px",textTransform:"capitalize"}}>
               Contact Us
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
