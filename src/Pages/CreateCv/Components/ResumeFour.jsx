import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

const ResumeContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '210mm',
  minHeight: '297mm',
  margin: '0 auto',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '2px',
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  color: '#000000',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .contact-item': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '12px',
  },
  '& .contact-icon': {
    marginRight: '8px',
    fontSize: '14px',
    color: '#666666',
  }
}));

const EducationItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .institution': {
    fontWeight: '600',
    fontSize: '12px',
  },
  '& .duration': {
    fontSize: '12px',
    color: '#666666',
  },
  '& .degree': {
    fontSize: '12px',
    color: '#666666',
  }
}));

const WorkExperience = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .position': {
    fontWeight: '600',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  '& .company': {
    fontWeight: '600',
    fontSize: '12px',
  },
  '& .duration': {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: theme.spacing(1),
  },
  '& .responsibilities': {
    paddingLeft: theme.spacing(2),
  },
  '& .responsibility': {
    fontSize: '12px',
    marginBottom: '4px',
    color: '#333333',
  }
}));

const BulletList = styled('ul')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  margin: 0,
  '& li': {
    fontSize: '12px',
    marginBottom: '4px',
    color: '#333333',
  }
}));

const ProfileText = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  lineHeight: 1.6,
  color: '#333333',
}));

const ResumeFour = () => {
  return (
    <ResumeContainer elevation={0}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '28px',
            fontWeight: '400', 
            letterSpacing: '3px',
            mb: 1
          }}
        >
          S E B A S T I A N  B E N N E T T
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: '16px',
            fontWeight: '400', 
            letterSpacing: '2px',
            color: '#666666'
          }}
        >
          Real Estate Agent
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Left Column */}
        <Box sx={{ width: '35%', pr: 3, borderRight: '1px solid #e0e0e0' }}>
          {/* CONTACT */}
          <Box sx={{ mb: 3 }}>
            <SectionHeader>CONTACT</SectionHeader>
            <ContactInfo>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <Typography sx={{ fontSize: '12px' }}>123-456-7890</Typography>
              </div>
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <Typography sx={{ fontSize: '12px' }}>hello@reallygreatsite.com</Typography>
              </div>
              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <Typography sx={{ fontSize: '12px' }}>123 Anywhere St., Any City</Typography>
              </div>
              <div className="contact-item">
                <LanguageIcon className="contact-icon" />
                <Typography sx={{ fontSize: '12px' }}>reallygreatsite.com</Typography>
              </div>
            </ContactInfo>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* EDUCATION */}
          <Box sx={{ mb: 3 }}>
            <SectionHeader>EDUCATION</SectionHeader>
            <EducationItem>
              <Typography className="institution" sx={{ fontSize: '12px' }}>University</Typography>
              <Typography className="duration" sx={{ fontSize: '12px' }}>2010 - 2014</Typography>
              <Typography className="degree" sx={{ fontSize: '12px' }}>B.A. in Business Administration</Typography>
            </EducationItem>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* AWARDS & CERTIFICATIONS */}
          <Box sx={{ mb: 3 }}>
            <SectionHeader>AWARDS & CERTIFICATIONS</SectionHeader>
            <BulletList>
              <li>Licensed Real Estate Agent</li>
              <li>Certified Real Estate Negotiator</li>
              <li>Top Sales Agent Award 2016</li>
            </BulletList>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* SKILLS */}
          <Box sx={{ mb: 3 }}>
            <SectionHeader>SKILLS</SectionHeader>
            <BulletList>
              <li>Knowledge of the local real estate market</li>
              <li>Communication skills</li>
              <li>Negotiation skills</li>
              <li>Problem-solving skills</li>
              <li>Organization and time management skills</li>
            </BulletList>
          </Box>
        </Box>

        {/* Right Column */}
        <Box sx={{ width: '65%' }}>
          {/* PROFILE */}
          <Box sx={{ mb: 3 }}>
            <SectionHeader>PROFILE</SectionHeader>
            <ProfileText>
              I am an experienced Real Estate Agent with a passion for helping clients find their dream homes. 
              I have extensive experience in the industry, including more than 5 years working as a real estate agent. 
              I am knowledgeable about the latest market trends and understand the nuances of the real estate market. 
              I pride myself on my ability to negotiate the best deals for my clients and to navigate complex real estate agreements. 
              I am highly organized, detail-oriented, and have strong communication skills.
            </ProfileText>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* WORK EXPERIENCE */}
          <Box>
            <SectionHeader>WORK EXPERIENCE</SectionHeader>
            
            {/* Current Position */}
            <WorkExperience sx={{ mb: 3 }}>
              <Typography className="position" sx={{ fontSize: '12px' }}>Real Estate Agent</Typography>
              <Typography className="company" sx={{ fontSize: '12px' }}>Really Great Company</Typography>
              <Typography className="duration" sx={{ fontSize: '12px' }}>June 2015 - Present</Typography>
              <Box className="responsibilities">
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Negotiate contracts and complex real estate transactions
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Provide excellent customer service to clients
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Update and maintain client files
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Research and monitor the local real estate market
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Develop marketing campaigns for properties
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Utilize social media platforms to market properties
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Participate in open houses and home tours
                </Typography>
              </Box>
            </WorkExperience>

            {/* Previous Position */}
            <WorkExperience>
              <Typography className="position" sx={{ fontSize: '12px' }}>Real Estate Agent</Typography>
              <Typography className="company" sx={{ fontSize: '12px' }}>Really Great Company</Typography>
              <Typography className="duration" sx={{ fontSize: '12px' }}>June 2014 - 2015</Typography>
              <Box className="responsibilities">
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Prepared contracts and documents for transactions
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Conducted market research on local real estate trends
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Compiled property information and photos
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Managed client database and contact information
                </Typography>
                <Typography className="responsibility" sx={{ fontSize: '12px' }}>
                  • Scheduled property tours and open houses
                </Typography>
              </Box>
            </WorkExperience>
          </Box>
        </Box>
      </Box>
    </ResumeContainer>
  );
};

export default ResumeFour;