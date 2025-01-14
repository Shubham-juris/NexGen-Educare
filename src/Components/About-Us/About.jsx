import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid2';

import img1 from "../../assets/About-Us/about.png";
import img2 from "../../assets/About-Us/coaching.png";

const About = () => {
  const offerings = [
    {
      title: "Academic Excellence Programs",
      details: [
        "Comprehensive curriculum support for school students from Grade 1 to Grade 12.",
        "Tailored coaching for CBSE, ICSE, State Boards, and International Boards.",
        "Regular progress tracking and performance evaluations to ensure continuous improvement."
      ]
    },
    {
      title: "Competitive Exam Training",
      details: [
        "Expert guidance for entrance exams such as JEE, NEET, SAT, GRE, GMAT, and more.",
        "Structured study plans, mock tests, and practice sessions for exam readiness.",
        "In-depth analysis of past papers and focus on high-yield topics."
      ]
    },
    {
      title: "Skill Development & Professional Courses",
      details: [
        "Public speaking and communication skills workshops.",
        "Leadership development, teamwork, and problem-solving exercises.",
        "Practical training in coding, robotics, and digital literacy for future-ready skills."
      ]
    },
    {
      title: "Career Counseling & Guidance",
      details: [
        "Personalized career coaching to identify strengths and interests.",
        "Assistance in choosing academic pathways and professional courses.",
        "Sessions on resume building, interview skills, and personality development."
      ]
    },
    {
      title: "Online Learning Solutions",
      details: [
        "Interactive online classes for all courses with access to expert educators.",
        "Recorded sessions, e-books, and digital resources for flexible learning.",
        "24/7 student support for doubt resolution and assignment help."
      ]
    },
    {
      title: "Extracurricular Activities",
      details: [
        "Art, music, and drama classes to foster creativity.",
        "Sports training to promote physical fitness and teamwork.",
        "Participation in national and international academic and cultural competitions."
      ]
    }
  ];

  return (
    <Container>
      {/* About Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          margin: { xs: 2, sm: 4 }
        }}
      >
        <Box sx={{ padding: { xs: 2, sm: 4 }, textAlign: "center" }}>
          <Typography variant="h6">
            At our academy, we empower learners with innovative education, fostering growth, creativity, and success through personalized learning experiences.
          </Typography>
        </Box>
        <Box
          component="img"
          src={img1}
          alt="About Us"
          sx={{
            width: { xs: "100%", sm: 500 },
            height: { xs: "auto", sm: 450 },
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 8px 12px rgba(0,0,0,0.2)"
            }
          }}
        />
      </Box>

      {/* Introduction */}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4">About Us</Typography>
        <Typography>
          Nexgen Educare Academy is a leading educational institution committed to delivering exceptional learning experiences that empower students to achieve academic excellence and personal growth. Founded on the principles of innovation, integrity, and inclusivity, Nexgen Educare Academy serves as a beacon of quality education, shaping future leaders and problem-solvers.
        </Typography>
      </Box>

      {/* What We Offer Section */}
      <Box
        sx={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: 3, sm: 6 },
          textAlign: "center"
        }}
      >
        <Typography variant="h4" sx={{ marginY: 3, fontWeight: 'bold' }}>
          What We Offer
        </Typography>
        <Container sx={{ backgroundColor: "rgba(255, 255, 255, 0.85)", padding: 4, width: '70%' }}>
          <Grid container spacing={1}>
            {offerings.map((offer, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ marginBottom: 4, textAlign: "left"  }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {offer.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px" }}>
                    {offer.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default About;
