import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const TabSection = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    'Basic Info',
    'Agent and company name mention',
    'Ask for referrals',
    'Build trust and provide value',
    'Ask for necessary information',
    'Acknowledgment of customers needs',
    'Call holding',
    'Notifications',
    'Call time',
    'Closing conversation'
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: 400 }}>
      {/* Left side tabs */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: '250px',
          '& .MuiTab-root': {
            alignItems: 'flex-start',
            textAlign: 'left',
            textTransform: 'none',
            minHeight: 48,
            py: 1,
            px: 2,
            '&.Mui-selected': {
              color: 'primary.main',
              fontWeight: 'bold',
            },
          },
          '& .MuiTabs-indicator': {
            left: 0,
            width: 4,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            id={`vertical-tab-${index}`}
            aria-controls={`vertical-tabpanel-${index}`}
            sx={{
              justifyContent: 'flex-start',
              width: '100%',
            }}
          />
        ))}
      </Tabs>

      {/* Right side content */}
      <Box sx={{ flexGrow: 1 }}>
        <TabPanel value={value} index={0}>
          {children}
        </TabPanel>
        {tabs.slice(1).map((_, index) => (
          <TabPanel key={index + 1} value={value} index={index + 1}>
            Content for {tabs[index + 1]} coming soon...
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default TabSection;