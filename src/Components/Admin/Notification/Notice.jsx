import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

const NoticePage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      
      {/* Search Notice Section */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Search Notice
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
          <TextField fullWidth label="Search by Date" variant="outlined" />
          <TextField fullWidth label="Search by Title" variant="outlined" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>

        {/* Example Notice */}
        <Paper elevation={1} sx={{ mt: 3, p: 2,mb:5 }}>
          <Typography variant="caption"  sx={{ color: 'red' }}>
            16 Aug, 2025
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Great School Great School manages some text of the printing...
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default NoticePage;
