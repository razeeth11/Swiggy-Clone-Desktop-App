import "./styles/filterbar.css";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ProductCard } from "./ProductsPage";
import { ProductList } from "./ProductsPage";
import { DeliveryTimeList } from "./DeliveryTime";
import { RatingList } from "./Rating";
import { LowToHighList } from "./LowToHigh";
import { HighToLowList } from "./HighToLow";

export function FilterBar() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swiggy-clone-backend-app.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const totalRes = data.length

  return (
    <div className="filter-bar" id="down">
      <LabTabs res={totalRes}/>
    </div>
  );
}

export default function LabTabs({res}) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ss = {
    fontSize : "13px"
  }

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
            <h1>{res} Restaurants</h1>
          </div>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={ss} label="Relevance" value="1" />
            <Tab sx={ss} label="Delivery Time" value="2" />
            <Tab sx={ss} label="Rating" value="3" />
            <Tab sx={ss} label="Cost : Low to High " value="4" />
            <Tab sx={ss} label="Cost : High to Low " value="5" />
          </TabList>
        </Box>
        <TabPanel className="panel" value="1">
          <ProductList />
        </TabPanel>
        <TabPanel className="panel" value="2">
          <DeliveryTimeList />
        </TabPanel>
        <TabPanel className="panel" value="3">
          <RatingList />
        </TabPanel>
        <TabPanel className="panel" value="4">
          <LowToHighList />
        </TabPanel>
        <TabPanel className="panel" value="5">
          <HighToLowList />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
