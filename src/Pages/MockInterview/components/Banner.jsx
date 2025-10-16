import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import BannerImg from '../../../Images/Mock-interview-Banner.png';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '110vh',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            fontSize: '60px',
            fontWeight: '600',
            maxWidth: '610px',
            lineHeight: '138%',
            color: '#000',
            pt: '130px',
          }}
        >
          Ready to Ace Your
          <br />
          Next Interview?
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '500',
            maxWidth: '610px',
            lineHeight: '138%',
            color: '#000',
            pt: '10px',
          }}
        >
          AI mock interviews with personalized practice and
          real-time analytics — everything on{' '}
          <span style={{ color: '#FF8014' }}>MYCVI.AI</span>
        </Typography>

        {/* Dropdown and Button Bar */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: '#fff',
            borderRadius: '10px',
            p: 1.2,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            width: 'fit-content',
          }}
        >
          {/* Jobs Dropdown */}
          <FormControl
            sx={{
              minWidth: 120,
              backgroundColor: '#fff',
              borderRadius: '6px',
            }}
            size="small"
          >
            <Select defaultValue="Jobs">
              <MenuItem value="Jobs">Jobs</MenuItem>
              <MenuItem value="Internships">Internships</MenuItem>
              <MenuItem value="Fresher">Fresher</MenuItem>
            </Select>
          </FormControl>

          {/* Search Position Dropdown */}
          <FormControl
            sx={{
              minWidth: 160,
              backgroundColor: '#fff',
              borderRadius: '6px',
            }}
            size="small"
          >
            <Select defaultValue="Search Position">
              <MenuItem value="Search Position">Search Position</MenuItem>
              <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
              <MenuItem value="Backend Developer">Backend Developer</MenuItem>
              <MenuItem value="Full Stack">Full Stack</MenuItem>
            </Select>
          </FormControl>

          {/* Select Round Dropdown */}
          <FormControl
            sx={{
              minWidth: 140,
              backgroundColor: '#fff',
              borderRadius: '6px',
            }}
            size="small"
          >
            <Select defaultValue="Select Round">
              <MenuItem value="Select Round">Select Round</MenuItem>
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Managerial">Managerial</MenuItem>
            </Select>
          </FormControl>

          {/* Start Practice Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF8014',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '6px',
              textTransform: 'none',
              px: 3,
              '&:hover': {
                backgroundColor: '#e67212',
              },
            }}
          >
            START PRACTICE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
