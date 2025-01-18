
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
} from '@mui/material';
import {
  MenuBook,
  Assignment,
  Grade,
  Event,
  AccountBalanceWallet,
  AccountCircle,
  Notifications,
  Message,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Logo from '../../../assets/Student/Logo.webp';
import Courses from '../../Courses/Courses';
import MockTestCards from '../MockTest/MockTest';
import MidTerm from '../MidTermExam/MidTerm';
import FinalExam from '../FinalExam/FinalExam';
import Result from '../Marks/Result';
import CoursesCards from '../Courses/Courses';

const StudentDeshboard = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* StudentDeshboard */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isMobile ? '70px' : '240px',
          bgcolor: '#b2bec3',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s ease',
          height: '100vh',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src={Logo}
            alt='Logo'
            sx={{ width: 40, height: 40, mx: 'auto' }}
          />
          {!isMobile && (
            <Typography
              variant='subtitle1'
              sx={{
                mt: 1,
                fontWeight: 'bold',
              }}
            >
              Nexgen Academy
            </Typography>
          )}
        </Box>

        {/* Menu Section */}
        <List>
          <ListItem
            button
            component={Link}
            to="/Courses"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <MenuBook sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Courses" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/mocktest"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Assignment sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Mock Test" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/MidTerm"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Event sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Midterm Exam" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/FinalExam"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Event sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Final Exam" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/Result"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Grade sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Result" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/attendance"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Event sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Attendance" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/fee"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <AccountBalanceWallet sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Fee" />}
          </ListItem>
        </List>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#f1f3f4',
          marginLeft: isMobile ? '70px' : '240px',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        {/* Top Bar */}
        <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 7,
    p: 2,
    position: 'sticky',  // Make the box sticky
    top: 0,              // Stick to the top of the page
    zIndex: 1000,        // Ensure it stays above other content
    backgroundColor: 'white',  // Add a background to avoid overlapping with content below
  }}
>
  <Typography variant='h6'>Student Dashboard</Typography>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <InputBase
      placeholder='Search...'
      sx={{
        bgcolor: '#FFF',
        px: 2,
        py: 1,
        borderRadius: 1,
        width: '200px',
      }}
    />
    <IconButton component={Link} to="/notifications">
      <Notifications />
    </IconButton>
    <IconButton component={Link} to="/messages">
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
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 2 }}>
          <Routes>
            <Route path="/" element={<Typography>Welcome to the Admin Dashboard!</Typography>} />
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/mocktest' element={<MockTestCards/>}/>
            <Route path='/MidTerm' element={<MidTerm/>}/>
            <Route path='/FinalExam' element={<FinalExam/>}/>
            <Route path='/Result' element={<Result/>}/>
            <Route path='/CoursesCards' element={<CoursesCards/>}/>

          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDeshboard;
