import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  platform: string;
  thumbnail: string;
}

const VideoCard = ({ title, description, thumbnail }: VideoCardProps) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '16px',
        '&:hover': {
          boxShadow: 6,
        },
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="subtitle1" 
          component="div" 
          sx={{ 
            fontWeight: 'bold',
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;