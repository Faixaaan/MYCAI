import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import CircleIcon from '@mui/icons-material/Circle';

const ResumeContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  maxWidth: '210mm',
  minHeight: '297mm',
  margin: '0 auto',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  borderBottom: '2px solid #e0e0e0',
}));

const NameText = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: '600',
  letterSpacing: '1px',
  marginBottom: theme.spacing(1),
  color: '#000000',
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '400',
  color: '#666666',
  letterSpacing: '1px',
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  marginBottom: theme.spacing(3),
  color: '#000000',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  display: 'flex',
  alignItems: 'center',
  '& .circle-icon': {
    fontSize: '8px',
    marginRight: theme.spacing(1.5),
    color: '#000000',
  }
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  '& .contact-item': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '13px',
    color: '#333333',
  },
  '& .contact-icon': {
    marginRight: '12px',
    fontSize: '16px',
    color: '#666666',
  }
}));

const EducationItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .duration': {
    fontSize: '13px',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '4px',
  },
  '& .university': {
    fontSize: '13px',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '4px',
  },
  '& .degree': {
    fontSize: '13px',
    color: '#666666',
    lineHeight: 1.5,
  }
}));

const WorkExperience = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  '& .company': {
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',
    marginBottom: '4px',
  },
  '& .position': {
    fontSize: '13px',
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: theme.spacing(2),
  },
  '& .responsibility': {
    fontSize: '13px',
    color: '#333333',
    marginBottom: '10px',
    lineHeight: 1.6,
    paddingLeft: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: '#000000',
      fontWeight: 'bold',
    }
  }
}));

const SkillsSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  '& .skill-item': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '13px',
    color: '#333333',
  },
  '& .bullet-icon': {
    fontSize: '6px',
    marginRight: '12px',
    color: '#000000',
  }
}));

const LanguagesSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .language-item': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '13px',
    color: '#333333',
  },
  '& .bullet-icon': {
    fontSize: '6px',
    marginRight: '12px',
    color: '#000000',
  }
}));

const VerticalDivider = styled(Box)(({ theme }) => ({
  width: '1px',
  backgroundColor: '#e0e0e0',
  margin: theme.spacing(0, 4),
}));

const ResumeFive = () => {
  return (
    <ResumeContainer elevation={0}>
      {/* Header */}
      <HeaderSection>
        <NameText>
          OLIVIA WILSON
        </NameText>
        <JobTitle>
          MARKETING MANAGER
        </JobTitle>
      </HeaderSection>

      <Box sx={{ display: 'flex' }}>
        {/* Left Column */}
        <Box sx={{ width: '35%',pr:1 }}>
          {/* CONTACT */}
          <Box sx={{ mb: 5 }}>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              CONTACT
            </SectionHeader>
            <ContactInfo>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <Typography>+123-456-7890</Typography>
              </div>
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <Typography>hello@reallygreatsite.com</Typography>
              </div>
              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <Typography>123 Anywhere St., Any City</Typography>
              </div>
              <div className="contact-item">
                <LanguageIcon className="contact-icon" />
                <Typography>www.reallygreatsite.com</Typography>
              </div>
            </ContactInfo>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* EDUCATION */}
          <Box sx={{ mb: 5 }}>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              EDUCATION
            </SectionHeader>
            <EducationItem>
              <Typography className="duration">2029 - 2030</Typography>
              <Typography className="university">BORCELLE UNIVERSITY</Typography>
              <Typography className="degree">Master of Business Management</Typography>
            </EducationItem>
            <EducationItem>
              <Typography className="duration">2025 - 2029</Typography>
              <Typography className="university">BORCELLE UNIVERSITY</Typography>
              <Typography className="degree">Bachelor of Business Management</Typography>
              <Typography className="degree">GPA: 3.8 / 4.0</Typography>
            </EducationItem>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* SKILLS */}
          <Box sx={{ mb: 5 }}>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              S K I L L S
            </SectionHeader>
            <SkillsSection>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Project Management</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Public Relations</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Teamwork</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Time Management</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Leadership</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Effective Communication</Typography>
              </div>
              <div className="skill-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Critical Thinking</Typography>
              </div>
            </SkillsSection>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* LANGUAGES */}
          <Box sx={{ mb: 4 }}>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              LANGUAGES
            </SectionHeader>
            <LanguagesSection>
              <div className="language-item">
                <CircleIcon className="bullet-icon" />
                <Typography>English: Fluent</Typography>
              </div>
              <div className="language-item">
                <CircleIcon className="bullet-icon" />
                <Typography>French: Fluent</Typography>
              </div>
              <div className="language-item">
                <CircleIcon className="bullet-icon" />
                <Typography>German: Basics</Typography>
              </div>
              <div className="language-item">
                <CircleIcon className="bullet-icon" />
                <Typography>Spanish: Intermediate</Typography>
              </div>
            </LanguagesSection>
          </Box>
        </Box>

        {/* Vertical Divider */}
        <VerticalDivider />

        {/* Right Column */}
        <Box sx={{ width: '65%' }}>
          {/* PROFILE SUMMARY */}
          <Box sx={{ mb: 5 }}>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              PROFILE SUMMARY
            </SectionHeader>
            <Typography sx={{ 
              fontSize: '13px', 
              lineHeight: 1.6, 
              color: '#333333',
              textAlign: 'left'
            }}>
              Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies. I am seeking a challenging role where I can contribute my skills in strategic planning, team leadership, and creative problem-solving to achieve business objectives.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* WORK EXPERIENCE */}
          <Box>
            <SectionHeader>
              <CircleIcon className="circle-icon" />
              WORK EXPERIENCE
            </SectionHeader>
            
            {/* First Job */}
            <WorkExperience>
              <Typography className="company">Borcelle Studio</Typography>
              <Typography className="position">Marketing Manager & Specialist</Typography>
              <Typography className="responsibility">
                Lead the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility and a 15% growth in sales within the first year.
              </Typography>
              <Typography className="responsibility">
                Successfully launched and managed multiple cross-channel campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates.
              </Typography>
            </WorkExperience>

            {/* Second Job */}
            <WorkExperience>
              <Typography className="company">Fauget Studio</Typography>
              <Typography className="position">Marketing Manager & Specialist</Typography>
              <Typography className="responsibility">
                Conducted market research to identify emerging trends and consumer preferences, providing valuable insights for product development and positioning.
              </Typography>
              <Typography className="responsibility">
                Oversaw the creation of engaging content for various platforms, collaborating with internal teams and external agencies to ensure brand consistency and relevance.
              </Typography>
            </WorkExperience>

            {/* Third Job */}
            <WorkExperience>
              <Typography className="company">Studio Shodwe</Typography>
              <Typography className="position">Marketing Manager & Specialist</Typography>
              <Typography className="responsibility">
                Developed and executed targeted marketing campaigns, resulting in a 25% increase in lead generation.
              </Typography>
              <Typography className="responsibility">
                Implemented SEO strategies that improved website traffic by 30%, enhancing online visibility and positioning the company.
              </Typography>
              <Typography className="responsibility">
                Collaborated with sales teams to create effective sales collateral, presentations, and promotional materials.
              </Typography>
            </WorkExperience>
          </Box>
        </Box>
      </Box>
    </ResumeContainer>
  );
};

export default ResumeFive;