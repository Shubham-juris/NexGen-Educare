import React from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const Library = () => {
  const courses = [
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },
    { id: "#oo32", name: "Dev.", writer: "xyz" },

  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Title */}
     

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
        }}
      >
        <Button variant="outlined">Search by ID</Button>
        <Button variant="outlined">Search by Name</Button>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {/* Courses Table */}
      <Typography variant="h6" gutterBottom>
        All Courses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Writer Name</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.writer}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">
                    Click
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Library;
