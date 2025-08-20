import { Box, IconButton, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Header = () => {
  return (
    <Box>
      {/* Small title with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, ml: -0.5 }}>
        <SchoolIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
        <Typography variant="caption" color="text.secondary">
          Coaching library
        </Typography>
      </Box>

      {/* Main header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold" sx={{ ml: -0.5 }}>
          Coaching Library
        </Typography>
        <IconButton
          sx={{
            bgcolor: 'white',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'text.primary',
            borderRadius: 2,
            height: '48px',
            px: 4,
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.04)',
            },
            textTransform: 'none',
            fontSize: '0.875rem',
          }}
        >
          Export
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;