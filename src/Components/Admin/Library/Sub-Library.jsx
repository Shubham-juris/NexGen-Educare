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
} from "@mui/material";

const Library = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    file: null,
    image: null,
    parentCourseId: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  // Fetch all courses from the backend
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

  // Open and close dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit the form data to the backend
  const handleSubmit = async () => {
    if (!newCourse.name || !newCourse.code) {
      setError("Course name and code are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newCourse.name);
    formData.append("code", newCourse.code);
    if (newCourse.file) formData.append("file", newCourse.file);
    if (newCourse.image) formData.append("image", newCourse.image);

    try {
      // If adding a sub-course
      if (newCourse.parentCourseId) {
        const subCourse = {
          name: newCourse.name,
          code: newCourse.code,
          file: newCourse.file,
          image: newCourse.image,
        };

        setCourses((prev) =>
          prev.map((course) =>
            course.id === newCourse.parentCourseId
              ? {
                  ...course,
                  subCourses: [...course.subCourses, subCourse],
                }
              : course
          )
        );
      } else {
        // If adding a new course
        const response = await fetch("http://localhost:3000/api/courses", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const newCourseFromServer = await response.json();
          setCourses((prev) => [...prev, newCourseFromServer]);
        } else {
          setError("Failed to add course. Please try again.");
        }
      }

      handleClose();
      setError("");
    } catch (error) {
      setError("An error occurred while adding the course.");
    }
  };

  // Handle delete
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

  // Handle add sub-course
  const handleSubCourse = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    if (course) {
      setNewCourse({
        name: "",
        code: "",
        file: null,
        image: null,
        parentCourseId: courseId, // Store the parent course ID for sub-course
      });
      handleOpen();
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
              <TableCell>ID</TableCell>
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
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>{course.id}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.code}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ mr: 1 }}
                          onClick={() => handleDelete(course.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSubCourse(course.id)}
                        >
                          Add Sub-Course
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>

                  {/* Sub-Courses */}
                  {course.subCourses?.map((subCourse, subIndex) => (
                    <TableRow key={`sub-course-${subIndex}`}>
                      <TableCell>{subIndex + 1}</TableCell>
                      <TableCell>{subCourse.name}</TableCell>
                      <TableCell>{subCourse.code}</TableCell>
                      <TableCell>
                        {subCourse.file && (
                          <a href={URL.createObjectURL(subCourse.file)}>
                            File
                          </a>
                        )}
                        {subCourse.image && (
                          <img
                            src={URL.createObjectURL(subCourse.image)}
                            alt={subCourse.name}
                            width="50"
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{newCourse.parentCourseId ? "Add Sub-Course" : "Add New Course"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Course Name"
            name="name"
            fullWidth
            value={newCourse.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Course Code"
            name="code"
            fullWidth
            value={newCourse.code}
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
            inputProps={{ accept: "image/*" }}
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
