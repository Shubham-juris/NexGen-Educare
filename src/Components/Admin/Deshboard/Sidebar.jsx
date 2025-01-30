import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  People,
  School,
  MenuBook,
  Notifications,
  Message,
  AddBox,
  UploadFile,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../../assets/Admin/Sidebarlogo/Logo.webp";
import Library from "../Library/Library";
import StudentData from "../Student-data/StudentData";
import TeacherData from "../Teacher-data/TeacherData";

const Sidebar = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmenuToggle = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: isMobile ? "70px" : "240px",
          bgcolor: "#b2bec3",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* Logo Section */}
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Link to="/">
            <Avatar
              src={Logo}
              alt="Logo"
              sx={{ width: 40, height: 40, mx: "auto" }}
            />
          </Link>
          {!isMobile && (
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
              Nexgen Academy
            </Typography>
          )}
        </Box>

        {/* Menu Section */}
        <List>
          <ListItem
            button
            component={Link}
            to="/dashboard"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <Dashboard sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/StudentData"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <People sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Students" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/TeacherData"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <School sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Teachers" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/library"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <MenuBook sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Library" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/sublibrary"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <MenuBook sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Sub Library" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/exam-upload"
            sx={{ "&:hover": { bgcolor: "#636e72" } }}
          >
            <ListItemIcon>
              <UploadFile sx={{ color: "inherit" }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Exam Upload" />}
          </ListItem>
        </List>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f1f3f4",
          marginLeft: isMobile ? "70px" : "240px", // Adjust content layout
          overflowY: "auto",
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            bgcolor: "#f1f3f4", // Optional: background color to make it distinct
            position: "sticky", // Makes the box sticky
            top: 0, // Sticks to the top of the container
            zIndex: 10, // Keeps it above other elements
            borderBottom: "1px solid #ddd", // Optional: border for separation
          }}
        >
          <Typography variant="h6">Admin Dashboard</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <InputBase
              placeholder="Search..."
              sx={{
                bgcolor: "#FFF",
                px: 2,
                py: 1,
                borderRadius: 1,
                width: "200px",
              }}
            />
            <IconButton component={Link} to="/notice">
              <Notifications />
            </IconButton>
            <IconButton component={Link} to="/AddCourse">
              <Message />
            </IconButton>
            <IconButton onClick={handleProfileMenuOpen}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={handleProfileMenuClose}
          h
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 2 }}>
          <Routes>
            <Route path="/library" element={<Library />} />
            <Route path="/StudentData" element={<StudentData />} />
            <Route path="/TeacherData" element={<TeacherData />} />
            <Route
              path="/"
              element={<Typography>Welcome to the Admin Dashboard!</Typography>}
            />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

