import { Box } from '@mui/material';
import { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Coaching Library',
  description: 'Coaching Library Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}