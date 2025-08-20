'use client';

import { Box, Drawer, List, ListItem, Badge, Avatar, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Image from 'next/image';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState('library');

  useEffect(() => {
    const path = pathname.split('/')[1] || 'library';
    setActiveIcon(path);
  }, [pathname]);

  const mainMenuItems = [
    { 
      id: 'siri',
      icon: (
        <Box sx={{ position: 'relative', width: 28, height: 28 }}>
          <Image
            src="/images/siri.png"
            alt="Siri Icon"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      )
    },
    { id: 'home', icon: <HomeOutlinedIcon sx={{ fontSize: 28 }} /> },
    { id: 'bookmarks', icon: <BookmarkBorderOutlinedIcon sx={{ fontSize: 28 }} /> },
  ];

  const bottomMenuItems = [
    { id: 'notifications', icon: <NotificationsOutlinedIcon sx={{ fontSize: 28 }} /> },
    { id: 'library', icon: <LibraryBooksOutlinedIcon sx={{ fontSize: 28 }} /> },
    { id: 'profile', icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 28 }} /> },

  
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
        {mainMenuItems.map((item) => (
          <ListItem
            component="div"
            key={item.id}
            onClick={() => router.push(`/${item.id}`)}
            sx={{
              width: 'auto',
              color: 'white',
              bgcolor: activeIcon === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              },
              mb: 2,
              p: 1.5,
              borderRadius: '50%',
              transition: 'all 0.2s',
            }}
          >
            <Box sx={{ 
              color: 'white',
              opacity: activeIcon === item.id ? 1 : 0.7,
            }}>
              {item.icon}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Bottom Menu */}
      <List sx={{ mt: 'auto', mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {bottomMenuItems.map((item) => (
          <ListItem
            component="div"
            key={item.id}
            onClick={() => router.push(`/${item.id}`)}
            sx={{
              width: 'auto',
              color: 'white',
              bgcolor: activeIcon === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              },
              mb: 2,
              p: 1.5,
              borderRadius: '50%',
              transition: 'all 0.2s',
            }}
          >
            <Box sx={{ 
              color: 'white',
              opacity: activeIcon === item.id ? 1 : 0.7,
            }}>
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
        sx={{ 
          mr: 2, 
          display: { sm: 'none' }, 
          position: 'fixed', 
          top: 10, 
          left: 10,
          bgcolor: 'white',
          zIndex: 1200,
          boxShadow: 1,
          '&:hover': {
            bgcolor: 'white',
          }
        }}
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