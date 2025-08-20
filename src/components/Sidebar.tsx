'use client';

import { Box, Drawer, List, ListItem, Badge, Avatar, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Image from 'next/image';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainMenuItems = [
    { 
      icon: (
        <Box sx={{ position: 'relative', width: 28, height: 28 }}>
          <Image
            src="/images/siri.webp"
            alt="Siri Icon"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      )
    },
    { icon: <HomeOutlinedIcon sx={{ fontSize: 28 }} /> },
    { icon: <LibraryBooksOutlinedIcon sx={{ fontSize: 28 }} /> },
  ];

  const bottomMenuItems = [
    { icon: <NotificationsOutlinedIcon sx={{ fontSize: 28 }} /> },
    { icon: <SettingsOutlinedIcon sx={{ fontSize: 28 }} /> },
    { icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 28 }} /> },
  ];

  const sidebarContent = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      pt: 2 
    }}>
      {/* Main Menu */}
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {mainMenuItems.map((item, index) => (
          <ListItem
            component="div"
            key={index}
            sx={{
              width: 'auto',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              },
              mb: 2,
              p: 1.5,
              borderRadius: '50%',
            }}
          >
            <Box sx={{ color: 'white' }}>
              {item.icon}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Bottom Menu */}
      <List sx={{ mt: 'auto', mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {bottomMenuItems.map((item, index) => (
          <ListItem
            component="div"
            key={index}
            sx={{
              width: 'auto',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              },
              mb: 2,
              p: 1.5,
              borderRadius: '50%',
            }}
          >
            <Box sx={{ color: 'white' }}>
              {item.icon}
            </Box>
          </ListItem>
        ))}

        {/* User Profile */}
        <ListItem
          component="div"
          sx={{
            width: 'auto',
            mt: 2,
            p: 1,
            borderRadius: '50%',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
            },
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#44b700',
                color: '#44b700',
                width: 10,
                height: 10,
                borderRadius: '50%',
                boxShadow: '0 0 0 2px #006D77',
              },
            }}
          >
            <Avatar
              alt="User Profile"
              src="https://via.placeholder.com/32"
              sx={{ width: 32, height: 32 }}
            />
          </Badge>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' }, position: 'absolute', top: 10, left: 10 }}
      >
        <MenuOutlinedIcon />
      </IconButton>

      <Box component="nav" sx={{ width: { sm: 80 }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 80 },
          }}
        >
          {sidebarContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 80, bgcolor: '#006D77', color: 'white' },
          }}
          open
        >
          {sidebarContent}
        </Drawer>
      </Box>
    </>
  );
}