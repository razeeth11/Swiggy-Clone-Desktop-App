import "./styles/filterbar.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ProductCard } from "./ProductsPage";

export function FilterBar() {
  return (
    <div className="filter-bar" id="down">
      <LabTabs />
    </div>
  );
}

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "30px",
            paddingRight: "20px",
            marginTop: "30px",
          }}
        >
          <div>
            <h1>Restaurants</h1>
          </div>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Relevance" value="1" />
            <Tab label="Delivery Time" value="2" />
            <Tab label="Rating" value="3" />
            <Tab label="Cost : Low to High " value="4" />
            <Tab label="Cost : High to Low " value="5" />
          </TabList>
        </Box>
        <TabPanel className="panel" value="1">
          <ProductCard />
        </TabPanel>
        <TabPanel className="panel" value="2">
          <DeliveryTime/>
        </TabPanel>
        <TabPanel className="panel" value="3">
        <Rating/>
        </TabPanel>
        <TabPanel className="panel" value="4">
          <LowToHigh/>
        </TabPanel>
        <TabPanel className="panel" value="5">
          <HighToLow/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

function DeliveryTime(){
  return(
    <div className="delivery-time">
      <h1>delivery</h1>
    </div>
  )
}

function Rating(){
  return(
    <div className="return">
      <h1>Rating</h1>
    </div>
  )
}

function LowToHigh(){
  return(
    <div className="low-to-high">
      <h1>Low To High</h1>
    </div>
  )
}

function HighToLow(){
  return(
    <div className="high-to-low">
      <h1>High To Low</h1>
    </div>
  )
}
