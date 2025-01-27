import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions 
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const RegisterData = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const personalInfo = {
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-15",
    gender: "Male",
    contactNumber: "+1 (123) 456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
  };

  const courseInfo = {
    courses: ["Python Programming", "Advanced Java", "Data Science Fundamentals"],
    preferredTiming: "Evening Classes",
    reason: "Professional Skill Enhancement",
    qualification: ["Bachelor of Technology", "Master of Technology"],
    institution: "Tech University",
    graduationYear: "2020",
    experience: true,
    relevantExperience: "5 Years as Software Engineer",
  };

  const paymentInfo = {
    paymentOption: "Full Payment",
    paymentMethod: "Credit Card",
    transactionId: "TXN-2024-12345",
    declaration: true,
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
      }}
    >
      <Box 
        sx={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '000000',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {/* Institute Header */}
        <Paper 
          sx={{
            padding: '20px',
            textAlign: 'center',
            color: '000000',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h4" gutterBottom>
            NEXGEN EDUCARE INSTITUTE
          </Typography>
          <Typography variant="subtitle1">
            Advanced Learning Solutions
          </Typography>
        </Paper>

        {/* Registration Details Sections */}
        {[
          { title: "Personal Information", data: personalInfo },
          { title: "Course Information", data: courseInfo },
          { title: "Payment Information", data: paymentInfo }
        ].map((section, index) => (
          <Paper 
            key={index} 
            sx={{ 
              padding: '20px', 
              margin: '10px 0',
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' 
            }}
          >
            <Typography variant="h5" gutterBottom>
              {section.title}
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(section.data).map(([key, value]) => (
                <Grid item xs={6} key={key}>
                  <Typography variant="body1">
                    <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>{' '}
                    {Array.isArray(value) ? value.join(', ') : String(value)}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        ))}

        {/* Action Buttons */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '20px',
            gap: 2 
          }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handlePrint}
          >
            Print Registration
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={handlePreview}
          >
            Preview
          </Button>
        </Box>

        {/* Preview Dialog */}
        <Dialog 
          open={isPreviewOpen} 
          onClose={handleClosePreview}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Registration Preview</DialogTitle>
          <DialogContent>
            <Typography>Preview content would be shown here</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePreview}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default RegisterData;