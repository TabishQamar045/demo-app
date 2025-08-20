import { Box, IconButton, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Header = () => {
  return (
    <Box sx={{ mt: { xs: 4, sm: 0 } }}>
      {/* Small title with icon */}
      <Box sx={{ 
        height: '80px',  
        display: 'flex', 
        alignItems: 'center',
        pl: { xs: 6.5, sm: 1.5 }  
      }}>
        <SchoolIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
          Coaching library
        </Typography>
      </Box>

      {/* Main header */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 },
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' },
        pl: { xs: 6.5, sm: 1.5 }
      }}>
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          sx={{ 
            ml: { xs: 0, sm: -0.5 },
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          Coaching Library
        </Typography>
        <IconButton
          sx={{
            bgcolor: 'white',
            color: 'text.primary',
            border: '2px solid',
            borderColor: '#f3f7f8',
            borderRadius: 2,
            height: '48px',
            px: { xs: 3, sm: 4 },
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.04)',
            },
            textTransform: 'none',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            alignSelf: { xs: 'stretch', sm: 'auto' },
          }}
        >
          Export
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;