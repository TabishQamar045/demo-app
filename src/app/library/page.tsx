'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import TabSection from '@/components/TabSection';

export default function LibraryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const videos = [
    {
      title: 'A 5 min walkthrough: How to handle conversations',
      description: 'Learn the basics of handling customer conversations effectively',
      platform: 'YouTube',
      thumbnail: '/images/utube.png',
    },
    {
      title: 'Conversation analytics introduction',
      description: 'Understanding conversation analytics and metrics',
      platform: 'MP5',
      thumbnail: '/images/mp5.png',
    },
    {
      title: 'Customer service guidelines',
      description: 'Standard operating procedures for customer service',
      platform: 'TXT',
      thumbnail: '/images/text.png',
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 80px)` },
        bgcolor: 'background.default',
      }}
    >
      <Header />

      <Box sx={{ mt: 3 }}>
        {/* Filter Section */}
        <Box sx={{ 
          width: '100%',
          mb: 3,
          bgcolor: '#80A9AD',
          borderRadius: 3,
          height: '48px',
        }}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            p: 0.5,
            ml: -0.5,
            gap: 1,
          }}>
            <Box
              onClick={() => setSelectedFilter('all')}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 2,
                cursor: 'pointer',
                color: selectedFilter === 'all' ? '#80A9AD' : 'white',
                bgcolor: selectedFilter === 'all' ? 'white' : 'transparent',
                fontWeight: selectedFilter === 'all' ? 'bold' : 'normal',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              Assigned
            </Box>
            <Box
              onClick={() => setSelectedFilter('assigned')}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 2,
                cursor: 'pointer',
                color: selectedFilter === 'assigned' ? '#80A9AD' : 'white',
                bgcolor: selectedFilter === 'assigned' ? 'white' : 'transparent',
                fontWeight: selectedFilter === 'assigned' ? 'bold' : 'normal',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              Assigned only
            </Box>
          </Box>
        </Box>

        {/* Tab Section with Content */}
        <TabSection>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
            gap: 3 
          }}>
            {videos.map((video, index) => (
              <Box key={index}>
                <VideoCard {...video} />
              </Box>
            ))}
          </Box>
        </TabSection>
      </Box>
    </Box>
  );
}
