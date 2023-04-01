import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles/offersPage.css";
import Button from "@mui/material/Button";
import { ProductList } from "./ProductsPage";
import { useState, useEffect } from "react";
import { API } from "./API";

export function OfferPage() {
  return (
    <div>
      <div className="offer-page">
        <div className="offers-one">
          <h1>Offers For You</h1>
          <p>Explore top deals and offers exclusively for you!</p>
        </div>
        <div className="offers-two">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
            alt="offers-icon.png"
            width="250px"
          />
        </div>
      </div>
      <LabTabs />
    </div>
  );
}

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const [paymentOffers, setPaymentOffers] = useState([]);

  useEffect(() => {
    fetch(`${API}/paymentOffers`)
    .then((res) => res.json())
    .then((data)=> setPaymentOffers(data));
    window.scrollTo(0, 0);
  }, []);
  `${API}`;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Restaurant offers"
              value="1"
              sx={{ fontSize: "13px", margin: "5px" }}
            />
            <Tab
              label="Payment offers/Coupons"
              value="2"
              sx={{ fontSize: "13px", margin: "5px" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProductList />
        </TabPanel>
        <TabPanel className="paym" value="2">
          {paymentOffers.map((data, index) => (
            <PaymentOffers bank={data} key={index} />
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

function PaymentOffers({ bank }) {
  const [state, setState] = useState(false);

  const style = {
    variant: state ? "disabled" : "outlined",
  };

  return (
    <div className="payment-offers">
      <div className="payment-one">
        <img src={bank.img} alt="bank-Icon.png" width="30px" />
        <span>
          <strong>{bank.code}</strong>
        </span>
      </div>
      <div className="payment-two">
        <h3>{bank.cashback}</h3>
        <p>{bank.discount}</p>
      </div>
      <div className="payment-three">
        <Button>
          <strong>+ MORE</strong>
        </Button>
      </div>
      <div className="payment-four">
        <Button
          onClick={() => setState(true)}
          sx={{ borderRadius: 0 }}
          variant={style.variant}
        >
          <strong>{state ? "COPIED" : "COPY CODE"}</strong>
        </Button>
      </div>
    </div>
  );
}
