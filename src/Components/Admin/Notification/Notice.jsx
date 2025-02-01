import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredNotices, setFilteredNotices] = useState([]);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(storedNotices);
    setFilteredNotices(storedNotices);
  }, []);

  const handleSearch = () => {
    const filtered = notices.filter(
      (notice) =>
        (!searchDate || notice.date.includes(searchDate)) &&
        (!searchTitle ||
          notice.title.toLowerCase().includes(searchTitle.toLowerCase()))
    );
    setFilteredNotices(filtered);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Search Notice
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
          <TextField
            fullWidth
            label=""
            type="date"
            variant="outlined"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <TextField
            fullWidth
            label="Search by Title"
            variant="outlined"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice, index) => (
            <Paper key={index} elevation={1} sx={{ mt: 3, p: 2, mb: 1 }}>
              <Typography variant="caption" sx={{ color: "red" }}>
                {notice.date}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                {notice.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {notice.details}
              </Typography>
              <Typography variant="caption" sx={{ mt: 1, fontStyle: "italic" }}>
                - {notice.postedBy}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography sx={{ mt: 3 }}>No notices found.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Notice;
