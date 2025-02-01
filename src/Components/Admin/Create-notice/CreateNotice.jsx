import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateNotice = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title || !details || !postedBy || !date) {
      alert("Please fill all fields");
      return;
    }

    // Retrieve existing notices or initialize an empty array
    const existingNotices = JSON.parse(localStorage.getItem("notices")) || [];

    // Add new notice
    const newNotice = { title, details, postedBy, date };
    const updatedNotices = [...existingNotices, newNotice];

    // Save to localStorage
    localStorage.setItem("notices", JSON.stringify(updatedNotices));

    // Navigate to Notice page
    // navigate("Notice");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box component={Paper} elevation={2} sx={{ p: 3, backgroundColor: "#f9f9f9", mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create A Notice
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField fullWidth label="Title" variant="outlined" margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField fullWidth label="Details" variant="outlined" margin="normal" multiline rows={4} value={details} onChange={(e) => setDetails(e.target.value)} />
          <TextField fullWidth label="Posted By" variant="outlined" margin="normal" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />
          <TextField fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} margin="normal" value={date} onChange={(e) => setDate(e.target.value)} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="contained" color="success" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" color="warning" onClick={() => { setTitle(""); setDetails(""); setPostedBy(""); setDate(""); }}>
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateNotice;
