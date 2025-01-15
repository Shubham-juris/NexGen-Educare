import React from 'react'
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
  } from "@mui/material";
const CreateNotice = () => {
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
   </Container>
  )
}

export default CreateNotice
