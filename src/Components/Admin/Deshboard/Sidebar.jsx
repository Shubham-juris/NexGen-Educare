import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Logo from '../../../assets/Admin/Sidebarlogo/Logo.webp';
import StudentAttendance from '../StudentAttandence/StudentAttandence';
import Library from '../Library/Library';
import AddCourse from '../Add-Courses/AddCourse';
import NoticePage from '../Notification/Notice';
import MessagePage from '../Add-message/AddMessage';
import StudentData from '../Student-data/StudentData';
import TeacherData from '../Teacher-data/TeacherData';
import TeacherAttandence from '../TeacherAttandence/TeacherAttandence';



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
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: isMobile ? '70px' : '240px',
          bgcolor: '#b2bec3',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'width 0.3s ease',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* Logo Section */}
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Avatar src={Logo} alt='Logo' sx={{ width: 40, height: 40, mx: 'auto' }} />
          {!isMobile && (
            <Typography variant='subtitle1' sx={{ mt: 1, fontWeight: 'bold' }}>
              Nexgen Academy
            </Typography>
          )}
        </Box>

        {/* Menu Section */}
        <List>
          <ListItem button component={Link} to="/dashboard" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <Dashboard sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem button component={Link} to="/StudentData" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <People sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Students" />}
          </ListItem>
          <ListItem button component={Link} to="/TeacherData" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <School sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Teachers" />}
          </ListItem>
          <ListItem button component={Link} to="/library" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <MenuBook sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Library" />}
          </ListItem>
          <ListItem button component={Link} to="/add-course" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <AddBox sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Add Courses" />}
          </ListItem>
          <ListItem button onClick={handleSubmenuToggle} sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <LibraryBooks sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Attendance" />}
            {!isMobile && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/studentAttendance" sx={{ pl: 4, '&:hover': { bgcolor: '#636e72' } }}>
                <ListItemText primary="Student Attendance" />
              </ListItem>
              <ListItem button component={Link} to="/TeacherAttandence" sx={{ pl: 4, '&:hover': { bgcolor: '#636e72' } }}>
                <ListItemText primary="Teacher Attendance" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/create-notice" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
            <ListItemIcon>
              <Message sx={{ color: 'inherit' }} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Add Notification" />}
          </ListItem>
        
          <ListItem button component={Link} to="/exam-upload" sx={{ '&:hover': { bgcolor: '#636e72' } }}>
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
          marginLeft: isMobile ? '70px' : '240px', // Adjust content layout
          paddingTop: '64px', // Adjust for the top bar height
          overflowY: 'auto',
        }}
      >
        {/* Top Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
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
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 2 }}>
          <Routes>
            <Route path="/studentAttendance" element={<StudentAttendance />} />
            <Route path='/TeacherAttandence' element={<TeacherAttandence/>}/>
            <Route path="/library" element={<Library />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/create-notice" element={<NoticePage />} />
            <Route path="/MessagePage" element={<MessagePage />} />
            <Route path='/StudentData' element={<StudentData/>}/>
            <Route path='/TeacherData' element={<TeacherData/>}/>
            <Route path='/AddCourse' element={<AddCourse/>}/>

            <Route path="/" element={<Typography>Welcome to the Admin Dashboard!</Typography>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};


export default Sidebar;