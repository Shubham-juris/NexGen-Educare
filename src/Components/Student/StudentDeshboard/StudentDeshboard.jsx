
import React from 'react';
import { Link } from 'react-router-dom';
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
import Logo from '../../../assets/admin/Logo/logo.png';

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
          justifyContent: 'space-between',
          transition: 'width 0.3s ease',
          height: '100vh',
          paddingTop: '16px',
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
            to="/courses"
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
            to="/midterm"
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
            to="/finalexam"
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
            to="/marks"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Grade sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Marks" />}
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
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Typography>Welcome to the Student Dashboard!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDeshboard;
