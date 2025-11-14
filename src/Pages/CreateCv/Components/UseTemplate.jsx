import React, { useState } from 'react';
import {
  Box, Typography, Button,
  Card,
  CardContent,
  TextField, Container,
  Avatar,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import profileImg from "../../../Images/resume.png";
import Resume from './Resume';
import ResumeTWo from './ResumeTwo';
import ResumeThree from './ResumeThree';
import ResumeFour from './ResumeFour';
import ResumeFive from './ResumeFive';


const UseTemplate = () => {
  const [image, setImage] = useState('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop');
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    address: '',
    email: '',
    websiteLink: '',
    phoneNo: '',
    bio: ''
  });

  // Education state
  const [educations, setEducations] = useState([
    {
      id: 1,
      fieldOfStudy: '',
      degree: '',
      school: '',
      fromYear: '',
      toYear: ''
    }
  ]);

  // Experience state
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: '',
      company: '',
      fromYear: '',
      toYear: '',
      description: ''
    }
  ]);

  // Skills state
  const [skills, setSkills] = useState([
    {
      id: 1,
      skill: '',
      proficiency: ''
    }
  ]);

  // Social Links state
  const [socialLinks, setSocialLinks] = useState([
    {
      id: 1,
      socialName: '',
      socialLink: '',
      socialIcon: null
    }
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage('');
  };

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Education handlers
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        fieldOfStudy: '',
        degree: '',
        school: '',
        fromYear: '',
        toYear: ''
      }
    ]);
  };

  const handleRemoveEducation = (id) => {
    if (educations.length > 1) {
      setEducations(educations.filter(edu => edu.id !== id));
    }
  };

  const handleEducationChange = (id, field) => (e) => {
    setEducations(educations.map(edu =>
      edu.id === id ? { ...edu, [field]: e.target.value } : edu
    ));
  };

  // Experience handlers
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        title: '',
        company: '',
        fromYear: '',
        toYear: '',
        description: ''
      }
    ]);
  };

  const handleRemoveExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const handleExperienceChange = (id, field) => (e) => {
    setExperiences(experiences.map(exp =>
      exp.id === id ? { ...exp, [field]: e.target.value } : exp
    ));
  };

  // Skills handlers
  const handleAddSkill = () => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        skill: '',
        proficiency: ''
      }
    ]);
  };

  const handleRemoveSkill = (id) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const handleSkillChange = (id, field) => (e) => {
    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, [field]: e.target.value } : skill
    ));
  };

  // Social Links handlers
  const handleAddSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      {
        id: Date.now(),
        socialName: '',
        socialLink: '',
        socialIcon: null
      }
    ]);
  };

  const handleRemoveSocialLink = (id) => {
    if (socialLinks.length > 1) {
      setSocialLinks(socialLinks.filter(social => social.id !== id));
    }
  };

  const handleSocialLinkChange = (id, field) => (e) => {
    if (field === 'socialIcon') {
      const file = e.target.files[0];
      setSocialLinks(socialLinks.map(social =>
        social.id === id ? { ...social, [field]: file } : social
      ));
    } else {
      setSocialLinks(socialLinks.map(social =>
        social.id === id ? { ...social, [field]: e.target.value } : social
      ));
    }
  };

  // Create CV Handler
  const handleCreateCV = () => {
    const cvData = {
      personalInfo: formData,
      profileImage: image,
      educations,
      experiences,
      skills,
      socialLinks
    };
    console.log('CV Data:', cvData);
    // Here you can send the data to your backend or process it further
    alert('CV Created Successfully! Check console for data.');
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#f8f9fb" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1.5fr 0.5fr",
            },
            gap: { xs: 0, sm: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE - CV PREVIEW */}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              boxShadow: { xs: "none", md: "0 4px 20px rgba(0,0,0,0.08)" },
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              p: { xs: 0, sm: 2, md: 3 },
              height: "100%",
            }}
          >
            <ResumeTWo />
          </Box>

          {/* RIGHT SIDE - FORM SECTION */}
          <Box sx={{
            width: '100%',
            p: { xs: 0, sm: 3 },
            bgcolor: '#f5f5f5',
          }}>

            {/* PERSONAL INFO */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontWeight: 600,
                color: '#0d47a1',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Personal Info
            </Typography>

            <Card sx={{ mb: 3, boxShadow: 3 }}>
              <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  mb: { xs: 3, md: 4 },
                  gap: { xs: 2, sm: 3 },
                  textAlign: { xs: 'center', sm: 'left' }
                }}>
                  <Avatar
                    src={image}
                    sx={{
                      width: { xs: 100, sm: 120 },
                      height: { xs: 100, sm: 120 },
                      border: '4px solid #e0e0e0'
                    }}
                  />
                  <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 500,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                      }}
                    >
                      Upload your picture
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      For best results, use image 300px by 300px in either .jpg or .png
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 2,
                      width: { xs: '100%', sm: 'auto' }
                    }}>
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{
                          textTransform: 'none',
                          width: { xs: '100%', sm: 'auto' }
                        }}
                      >
                        Upload
                        <input
                          type="file"
                          hidden
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={handleRemoveImage}
                        sx={{
                          textTransform: 'none',
                          width: { xs: '100%', sm: 'auto' }
                        }}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: '1fr 1fr',
                      md: '1fr 1fr',
                    },
                    gap: { xs: 2, sm: 2.5, md: 3 },
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Full Name:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter your name"
                      value={formData.fullName}
                      onChange={handleInputChange('fullName')}
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Job Title:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Ex: Web Developer"
                      value={formData.jobTitle}
                      onChange={handleInputChange('jobTitle')}
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Your Address:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter your address"
                      value={formData.address}
                      onChange={handleInputChange('address')}
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Your Email:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter your email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      variant="outlined"
                      type="email"
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Website Link:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter your website link"
                      value={formData.websiteLink}
                      onChange={handleInputChange('websiteLink')}
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Phone No:
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="enter your phone number"
                      value={formData.phoneNo}
                      onChange={handleInputChange('phoneNo')}
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Here's Your AI-Generated Bio
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="About Me :"
                      value={formData.bio}
                      onChange={handleInputChange('bio')}
                      variant="outlined"
                      multiline
                      rows={6}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* ADD EDUCATIONS */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontWeight: 600,
                color: '#0d47a1',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Add Educations
            </Typography>

            {educations.map((education) => (
              <Card key={education.id} sx={{ mb: 3, boxShadow: 3, position: 'relative' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  {educations.length > 1 && (
                    <IconButton
                      onClick={() => handleRemoveEducation(education.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'error.main'
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr',
                      },
                      gap: { xs: 2, sm: 2.5, md: 3 },
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Field of study:
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: Computer Science"
                        value={education.fieldOfStudy}
                        onChange={handleEducationChange(education.id, 'fieldOfStudy')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Degree:
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: Bachelor's"
                        value={education.degree}
                        onChange={handleEducationChange(education.id, 'degree')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        School:
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: al-albayt university"
                        value={education.school}
                        onChange={handleEducationChange(education.id, 'school')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        From year:
                      </Typography>
                      <TextField
                        fullWidth
                        value={education.fromYear}
                        onChange={handleEducationChange(education.id, 'fromYear')}
                        variant="outlined"
                        type="date"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        To year (optional=present):
                      </Typography>
                      <TextField
                        fullWidth
                        value={education.toYear}
                        onChange={handleEducationChange(education.id, 'toYear')}
                        variant="outlined"
                        size="small"
                        type='date'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddEducation}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#00bcd4',
                  '&:hover': {
                    backgroundColor: '#00acc1'
                  }
                }}
              >
                Add another education
              </Button>
            </Box>

            {/* ADD EXPERIENCES */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontWeight: 600,
                color: '#0d47a1',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Add Experiences
            </Typography>

            {experiences.map((experience) => (
              <Card key={experience.id} sx={{ mb: 3, boxShadow: 3, position: 'relative' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  {experiences.length > 1 && (
                    <IconButton
                      onClick={() => handleRemoveExperience(experience.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'error.main'
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr',
                      },
                      gap: { xs: 2, sm: 2.5, md: 3 },
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Title:
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: Frontend Developer"
                        value={experience.title}
                        onChange={handleExperienceChange(experience.id, 'title')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Company:
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: Google"
                        value={experience.company}
                        onChange={handleExperienceChange(experience.id, 'company')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        From year:
                      </Typography>
                      <TextField
                        fullWidth
                        value={experience.fromYear}
                        onChange={handleExperienceChange(experience.id, 'fromYear')}
                        variant="outlined"
                        type="date"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        To year (present):
                      </Typography>
                      <TextField
                        fullWidth
                        value={experience.toYear}
                        onChange={handleExperienceChange(experience.id, 'toYear')}
                        variant="outlined"
                        size="small"
                        type='date'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Description (optional):
                      </Typography>
                      <TextField
                        fullWidth
                        value={experience.description}
                        onChange={handleExperienceChange(experience.id, 'description')}
                        variant="outlined"
                        size="small"
                        multiline
                        rows={4}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddExperience}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#00bcd4',
                  '&:hover': {
                    backgroundColor: '#00acc1'
                  }
                }}
              >
                Add another Experience
              </Button>
            </Box>

            {/* ADD SKILLS */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontWeight: 600,
                color: '#0d47a1',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Add Skills
            </Typography>

            {skills.map((skill) => (
              <Card key={skill.id} sx={{ mb: 3, boxShadow: 3, position: 'relative' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  {skills.length > 1 && (
                    <IconButton
                      onClick={() => handleRemoveSkill(skill.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'error.main'
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr',
                      },
                      gap: { xs: 2, sm: 2.5, md: 3 },
                    }}
                  >
                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Skill
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: JavaScript"
                        value={skill.skill}
                        onChange={handleSkillChange(skill.id, 'skill')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Proficiency
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: Expert"
                        value={skill.proficiency}
                        onChange={handleSkillChange(skill.id, 'proficiency')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddSkill}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#00bcd4',
                  '&:hover': {
                    backgroundColor: '#00acc1'
                  }
                }}
              >
                Add another Skill
              </Button>
            </Box>

            {/* ADD SOCIAL LINKS */}
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 },
                fontWeight: 600,
                color: '#0d47a1',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
              }}
            >
              Add social Links
            </Typography>

            {socialLinks.map((social) => (
              <Card key={social.id} sx={{ mb: 3, boxShadow: 3, position: 'relative' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  {socialLinks.length > 1 && (
                    <IconButton
                      onClick={() => handleRemoveSocialLink(social.id)}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'error.main'
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr',
                      },
                      gap: { xs: 2, sm: 2.5, md: 3 },
                    }}
                  >
                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Social Name
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Ex: LinkedIn"
                        value={social.socialName}
                        onChange={handleSocialLinkChange(social.id, 'socialName')}
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Social Link
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={social.socialLink}
                        onChange={handleSocialLinkChange(social.id, 'socialLink')}
                        variant="outlined"
                        size="small"
                        type='url'
                      />
                    </Box>

                    <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                        Social icon image (16px*16px)
                      </Typography>
                      <TextField
                        fullWidth
                        onChange={handleSocialLinkChange(social.id, 'socialIcon')}
                        variant="outlined"
                        size="small"
                        type='file'
                        inputProps={{ accept: 'image/*' }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddSocialLink}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#00bcd4',
                  '&:hover': {
                    backgroundColor: '#00acc1'
                  }
                }}
              >
                Add another social Link
              </Button>
            </Box>

            {/* CREATE CV BUTTON */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 3 }}>
              <Button
                variant="contained"
                onClick={handleCreateCV}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#1976d2',
                  fontSize: '1.1rem',
                  padding: '12px 48px',
                  '&:hover': {
                    backgroundColor: '#1565c0'
                  }
                }}
              >
                Create CV
              </Button>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UseTemplate;