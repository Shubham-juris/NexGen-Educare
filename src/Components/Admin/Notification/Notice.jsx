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
      {/* Create Notice Section */}
      <Box
        component={Paper}
        elevation={2}
        sx={{ p: 3, backgroundColor: "#f9f9f9", mb: 4 }}
      >
        <Typography variant="h5" gutterBottom>
          Create A Notice
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Details"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            label="Posted By"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="contained" color="success">
              Save
            </Button>
            <Button variant="contained" color="warning">
              Reset
            </Button>
          </Box>
        </Box>
      </Box>

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
        <Paper elevation={1} sx={{ mt: 3, p: 2 }}>
          <Typography variant="caption" color="text.secondary">
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
