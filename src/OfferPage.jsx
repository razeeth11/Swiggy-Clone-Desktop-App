import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./styles/offersPage.css"
import { ProductCard } from './ProductsPage';

export function OfferPage() {
  return (
    <div>
  <div className="offer-page">
    <div className="offers-one">
    <h1>Offers For You</h1>
    <p>Explore top deals and offers exclusively for you!</p>
    </div>
    <div className="offers-two">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" alt="offers-icon.png"  width="250px"/>
    </div>
  </div>
    <LabTabs/>
    </div>
  );
}


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Restaurant offers" value="1" />
            <Tab label="Payment offers/Coupons" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Restaurant offers</TabPanel>
        <TabPanel value="2">Payment offers/Coupons</TabPanel>
      </TabContext>
    </Box>
  );
}