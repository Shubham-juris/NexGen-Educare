import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TeacherData = () => {
  const rows = [
    { id: "#01", name: "xyz", gender: "Male", course: "Web Dev" },
    { id: "#02", name: "abc", gender: "Female", course: "App Dev" },
    { id: "#01", name: "Annita", gender: "Female", course: "Web Dev" },
    { id: "#02", name: "Panda", gender: "Female", course: "App Dev" },
  ];

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          All Teachers Data
        </Typography>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Search by ID" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Search by Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Search by Phone" variant="outlined" />
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Link
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TeacherData;
