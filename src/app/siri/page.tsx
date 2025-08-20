'use client';

import { Box, Typography } from '@mui/material';

export default function SiriPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 80px)` },
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4">Siri Assistant Page</Typography>
    </Box>
  );
}
