import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Account from './Accounts';
import Loans from './Loans';
import ServicesNavbar from './ServicesNavbar';
import { Typography } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ServicesNavbar/>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'#a7dafa',marginTop:'-10px',marginBottom:'-10px'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={(<Typography variant="h6" fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">ACCOUNTS</Typography>)} value="1" />
            <Tab label={(<Typography variant="h6" fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">LOANS</Typography>)} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Account/></TabPanel>
        <TabPanel value="2"><Loans/></TabPanel>
      </TabContext>
    </Box>
    </>
  );
}