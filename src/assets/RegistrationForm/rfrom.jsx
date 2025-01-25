import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";

const from = () => {
  const [formData, setFormData] = useState({ name: "", contactNumber: "" });
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages
    try {
      const response = await axios.post("http://localhost:3000/data", formData);
      setMessage(response.data.message);
      fetchData(); // Refresh data after submission
    } catch (error) {
      setMessage(error.response ? error.response.data.error : "An error occurred");
    }
  };

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data");
      setData(response.data);
    } catch (error) {
      setMessage("Failed to fetch data");
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        User Contact Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Contact Number"
          margin="normal"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {message && (
        <Typography variant="body1" color="secondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}

      <Typography variant="h5" sx={{ mt: 4 }}>
        Submitted Data
      </Typography>
      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Contact Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Rfrom;
