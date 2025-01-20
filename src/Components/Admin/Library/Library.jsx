import React, { useState, useEffect } from "react";
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
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  IconButton,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const Library = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    file: null,
    image: null, // New state for image
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses");
        if (!response.ok) throw new Error("Failed to fetch courses.");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    if (!newCourse.name || !newCourse.code) {
      setError("Course name and code are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newCourse.name);
    formData.append("code", newCourse.code);
    if (newCourse.file) formData.append("file", newCourse.file);
    if (newCourse.image) formData.append("image", newCourse.image); // Append image to FormData

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newCourseFromServer = await response.json();
        setCourses((prev) => [...prev, newCourseFromServer]);
        handleClose();
        setError("");
      } else {
        setError("Failed to add course. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while adding the course.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCourses((prev) => prev.filter((course) => course.id !== id));
      } else {
        console.error("Failed to delete course.");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Library
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <TextField
          label="Search by Course Name"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ ml: 2 }}
          onClick={handleOpen}
        >
          Add Course
        </Button>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr.No</TableCell>
              <TableCell>Image</TableCell> {/* New column for image */}
              <TableCell>Course Name</TableCell>
              <TableCell>Course Code</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .filter((course) =>
                course.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.id}</TableCell>
                  <TableCell>
                    {course.image && (
                      <img
                        src={`http://localhost:3000${course.image}`} // Assuming image path is correct
                        alt="Course"
                        style={{ width: 50, height: 50, objectFit: "cover" }}
                      />
                    )}
                  </TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.code}</TableCell>
                  
                  <TableCell>
                    <IconButton color="primary" aria-label="view course">
                      <Visibility />
                    </IconButton>
                    <IconButton color="secondary" aria-label="edit course">
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete course"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Course Name"
            name="name"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Course Code"
            name="code"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            type="file"
            name="file"
            fullWidth
            onChange={handleInputChange}
            inputProps={{ accept: "application/pdf" }}
          />
          <TextField
            margin="dense"
            type="file"
            name="image"
            fullWidth
            onChange={handleInputChange}
            inputProps={{ accept: "image/*" }} // Allow image files only
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Library;
