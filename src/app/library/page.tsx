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
      thumbnail: '/images/youtube.png',
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
        p: { xs: 2, sm: 3 },
        width: { sm: `calc(100% - 80px)` },
        bgcolor: 'white',
      }}
    >
      <Header />

      <Box sx={{ mt: 3 }}>
        {/* Filter Section */}
        <Box
          sx={{
            width: '100%',
            mb: 3,
            bgcolor: '#f3f7f8',
            borderRadius: 3,
            height: { xs: 'auto', sm: '56px' },
            p: 0.5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              height: '100%',
              p: 0.5,
              gap: 1,
              mx: 0.5,
            }}
          >
            <Box
              onClick={() => setSelectedFilter('all')}
              sx={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                px: selectedFilter === 'all' ? 4 : 3,
                mx: selectedFilter === 'all' ? 0.5 : 0,
                borderRadius: 2,
                cursor: 'pointer',
                color: 'black',
                bgcolor: selectedFilter === 'all' ? 'white' : 'transparent',
                fontWeight: selectedFilter === 'all' ? 600 : 400,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              All
            </Box>
            <Box
              onClick={() => setSelectedFilter('assigned')}
              sx={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                px: selectedFilter === 'assigned' ? 4 : 3,
                mx: selectedFilter === 'assigned' ? 0.5 : 0,
                borderRadius: 2,
                cursor: 'pointer',
                color: 'black',
                bgcolor: selectedFilter === 'assigned' ? 'white' : 'transparent',
                fontWeight: selectedFilter === 'assigned' ? 600 : 400,
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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 4,
              pr: 3, // Align with export button
              '& .MuiCard-root': {
                maxWidth: '320px', // Make cards slightly narrower
                height: '320px', // Make cards taller
                margin: '0 auto', // Center cards in their grid cells
              },
            }}
          >
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
