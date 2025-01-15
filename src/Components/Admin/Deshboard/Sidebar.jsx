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
  Collapse,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard,
  People,
  School,
  MenuBook,
  LibraryBooks,
  Notifications,
  Message,
  ExpandLess,
  ExpandMore,
  AddBox,
  UploadFile,
  AccountCircle,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Logo from '../../../assets/Admin/Logo/logo.png';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {/* Sidebar */}
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
            to="/dashboard"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Dashboard sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Dashboard" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <People sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Students" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <School sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Teacher" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/Library"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <MenuBook sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Library" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/Addcourse"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <AddBox sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Add Courses" />}
          </ListItem>

          <ListItem
            button
            onClick={handleSubmenuToggle}
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <LibraryBooks sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Attendance" />}
            {!isMobile && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to="/StudentAttendanceTable"
                sx={{ pl: 4, '&:hover': { bgcolor: '#636e72' } }}
              >
                <ListItemText primary="Students" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/TeacherAttandence"
                sx={{ pl: 4, '&:hover': { bgcolor: '#636e72' } }}
              >
                <ListItemText primary="Teacher" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button
            component={Link}
            to="/Notice"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <Message sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Messages" />}
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/exam-upload"
            sx={{ '&:hover': { bgcolor: '#636e72' } }}
          >
            <ListItemIcon>
              <UploadFile sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Exam Upload" />}
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
          overflowY: 'auto', // This makes the content scrollable
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
          <Typography variant='h6'>Admin Dashboard</Typography>
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
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
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
          <Typography>Welcome to the Admin Dashboard!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
