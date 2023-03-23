import "./styles/filterbar.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ProductCard } from "./ProductsPage";

export function FilterBar({setState}) {
  return (
    <div className="filter-bar" >
        <LabTabs setState={setState}/>
    </div>
  );
}

export default function LabTabs({setState}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' , display : 'flex' , justifyContent : "space-between" , alignItems : "center" , paddingLeft : "20px" , paddingRight : "20px" , marginTop : "30px"}}>
            <div>
            <h1>Restaurants</h1>
            </div>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab onClick={()=> setState(true)} label="Relevance" value="1" />
            <Tab onClick={()=> setState(true)} label="Delivery Time" value="2" />
            <Tab onClick={()=> setState(true)} label="Rating" value="3" />
            <Tab onClick={()=> setState(true)} label="Cost : Low to High " value="4" />
            <Tab onClick={()=> setState(true)} label="Cost : High to Low " value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProductCard/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}