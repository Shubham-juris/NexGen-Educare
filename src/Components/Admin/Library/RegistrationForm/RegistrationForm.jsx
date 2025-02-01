import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from 'axios'; // Import axios for HTTP requests

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    courses: [],
    preferredTiming: "",
    reason: "",
    qualification: [],
    institution: "",
    graduationYear: "",
    experience: "",
    relevantExperience: "",
    paymentOption: "",
    paymentMethod: "",
    transactionId: "",
    declaration: false,
  });

  const generateStudentId = async () => {
    const year = new Date().getFullYear();
    const prefix = `NG${year}020`;
    try {
      // Fetch the latest student ID from the backend to get the counter
      const response = await axios.get('http://localhost:3000/get-latest-student-id');
      const latestStudentId = response.data.latestStudentId || '200000'; // Default if no previous ID found

      // Extract the last 6 digits (counter part)
      const counter = parseInt(latestStudentId.slice(-6)) + 1; // Increment the counter
      const formattedCounter = counter.toString().padStart(6, '0'); // Ensure it's 6 digits

      const studentId = `${prefix}${formattedCounter}`;
      return studentId;
    } catch (error) {
      console.error('Error fetching latest student ID:', error);
      return `${prefix}00001`; // Fallback ID if no previous record is found
    }
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && Array.isArray(formData[name])) {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value),
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    // Generate the student ID and password before submitting
    const studentId = await generateStudentId();
    const password = generatePassword(); // Generate a random password

    const dataToSubmit = { ...formData, student_id: studentId, password };

    console.log('Submitting form data:', dataToSubmit);
    try {
      const response = await axios.post('http://localhost:3000/save-registration', dataToSubmit);
      alert(`Registration Successful!\nStudent ID: ${studentId}\nPassword: ${password}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const isFormCompleted = () => {
    // Check if all required fields are filled in and declaration is true
    return (
      formData.firstName &&
      formData.lastName &&
      formData.fatherName &&
      formData.dob &&
      formData.gender &&
      formData.contactNumber &&
      formData.email &&
      formData.address &&
      formData.courses.length > 0 &&
      formData.preferredTiming &&
      formData.reason &&
      formData.qualification.length > 0 &&
      formData.institution &&
      (formData.experience === "no" || formData.relevantExperience) &&
      formData.paymentOption &&
      formData.paymentMethod &&
      formData.declaration
    );
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Registration Form</Typography>

      <Typography variant="h6">Personal Information</Typography>
      <TextField
        fullWidth
        label="First Name"
        margin="normal"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Father Name"
        margin="normal"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        type="date"
        label="Date of Birth"
        margin="normal"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <Typography variant="body1" sx={{ mt: 2 }}>Gender</Typography>
      <RadioGroup
        row
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <TextField
        fullWidth
        label="Contact Number"
        margin="normal"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Email Address"
        margin="normal"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Address"
        margin="normal"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <Typography variant="h6" sx={{ mt: 4 }}>Course Information</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>Courses</Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="courses"
            value="Cooking Course"
            checked={formData.courses.includes("Cooking Course")}
            onChange={handleChange}
          />
        }
        label="Cooking Course"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="courses"
            value="Nanny Course"
            checked={formData.courses.includes("Nanny Course")}
            onChange={handleChange}
          />
        }
        label="Nanny Course"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="courses"
            value="Legal Drafting"
            checked={formData.courses.includes("Legal Drafting")}
            onChange={handleChange}
          />
        }
        label="Legal Drafting"
      />
      <Typography variant="body1" sx={{ mt: 2 }}>Preferred Batch Timing</Typography>
      <RadioGroup
        row
        name="preferredTiming"
        value={formData.preferredTiming}
        onChange={handleChange}
      >
        <FormControlLabel value="morning" control={<Radio />} label="Morning" />
        <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
        <FormControlLabel value="evening" control={<Radio />} label="Evening" />
      </RadioGroup>
      <TextField
        fullWidth
        label="Reason for Choosing this Course"
        margin="normal"
        multiline
        rows={4}
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        inputProps={{ maxLength: 200 }}
      />

      <Typography variant="h6" sx={{ mt: 4 }}>Educational Background</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>Highest Qualification</Typography>
      {["High School", "Graduate", "Postgraduate"].map((option) => (
        <FormControlLabel
          control={
            <Checkbox
              name="qualification"
              value={option}
              checked={formData.qualification.includes(option)}
              onChange={handleChange}
            />
          }
          label={option}
          key={option}
        />
      ))}
      <TextField
        fullWidth
        label="Institution/School Name"
        margin="normal"
        name="institution"
        value={formData.institution}
        onChange={handleChange}
      />
      {formData.qualification.includes("Graduate") && (
        <TextField
          fullWidth
          label="Year of Graduation"
          margin="normal"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
        />
      )}
      <Typography variant="body1" sx={{ mt: 2 }}>Experience (If Applicable)</Typography>
      <RadioGroup
        row
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      {formData.experience === "yes" && (
        <TextField
          fullWidth
          label="If yes, please specify"
          margin="normal"
          name="relevantExperience"
          value={formData.relevantExperience}
          onChange={handleChange}
        />
      )}

      <Typography variant="h6" sx={{ mt: 4 }}>Payment Information</Typography>
      <RadioGroup
        row
        name="paymentOption"
        value={formData.paymentOption}
        onChange={handleChange}
      >
        <FormControlLabel value="full" control={<Radio />} label="Full Payment" />
        <FormControlLabel value="installments" control={<Radio />} label="Installments" />
      </RadioGroup>
      <RadioGroup
        row
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        {["Cash", "Credit/Debit Card", "Bank Transfer", "UPI"].map((method) => (
          <FormControlLabel key={method} value={method} control={<Radio />} label={method} />
        ))}
      </RadioGroup>
      <TextField
        fullWidth
        label="Transaction ID (if applicable)"
        margin="normal"
        name="transactionId"
        value={formData.transactionId}
        onChange={handleChange}
      />
      <Box sx={{ mt: 4 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
            />
          }
          label="I hereby declare that the information provided is correct."
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isFormCompleted()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;