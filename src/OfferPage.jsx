import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles/offersPage.css";
import Button from "@mui/material/Button";
import { ProductCard } from "./ProductsPage";
import { useState } from "react";

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

  const payment = [
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/e9a0c789802340154685cb92bb645086",
      code: "PAYTMFEST",
      cashback: "Get assured cashback between ₹25 to ₹100 using Paytm wallet",
      discount:
        "Assured cashback between ₹25 to ₹100 on Paytm wallet transactions above ₹399",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/f93b449b1330633c28b1fada16523d39",
      code: "AXIS30",
      cashback: "Get 30% discount using Axis Bank Rewards Credit Cards",
      discount: "Maximum discount up to ₹150 on orders above ₹200",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/c5e7120f1c8045602a00a29bfcaaae9d",
      code: "BOBDC125",
      cashback: "Get 20% discount using Bank of Baroda Debit Cards",
      discount: "Maximum discount up to ₹125 on orders above ₹299",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/e3d4c7c77e7c51dceaf1198f16e195bb",
      code: "FEDERALCC",
      cashback: "Get 20% discount using Federal Bank Credit Cards",
      discount: "Maximum discount up to ₹120 on orders above ₹249",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/1f84e0d6371b0902e1a8b6f291fbd8d6",
      code: "AUCC100",
      cashback: "Get flat ₹100 discount using AU Credit Cards",
      discount: "Maximum discount of ₹100 on orders above ₹299",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/1f84e0d6371b0902e1a8b6f291fbd8d6",
      code: "AUDC100",
      cashback: "Get flat ₹100 discount using AU Debit Cards",
      discount: "Maximum discount up to ₹100 on orders above ₹299",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/f93b449b1330633c28b1fada16523d39",
      code: "AXIS200",
      cashback: "Get 40% discount using Axis Bank Select Credit Cards",
      discount: "Maximum discount up to ₹200 on orders above ₹400",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/f93b449b1330633c28b1fada16523d39",
      code: "AXIS40",
      cashback: "Get 40% discount using Axis Bank My Zone Credit Cards",
      discount: "Maximum discount up to ₹120 on orders above ₹200",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/e9a0c789802340154685cb92bb645086",
      code: "PAYTMFEST",
      cashback: "Get assured cashback between ₹25 to ₹100 using Paytm wallet",
      discount:
        "Assured cashback between ₹25 to ₹100 on Paytm wallet transactions above ₹399",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/f93b449b1330633c28b1fada16523d39",
      code: "AXIS30",
      cashback: "Get 30% discount using Axis Bank Rewards Credit Cards",
      discount: "Maximum discount up to ₹150 on orders above ₹200",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/c5e7120f1c8045602a00a29bfcaaae9d",
      code: "BOBDC125",
      cashback: "Get 20% discount using Bank of Baroda Debit Cards",
      discount: "Maximum discount up to ₹125 on orders above ₹299",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/e3d4c7c77e7c51dceaf1198f16e195bb",
      code: "FEDERALCC",
      cashback: "Get 20% discount using Federal Bank Credit Cards",
      discount: "Maximum discount up to ₹120 on orders above ₹249",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/1f84e0d6371b0902e1a8b6f291fbd8d6",
      code: "AUCC100",
      cashback: "Get flat ₹100 discount using AU Credit Cards",
      discount: "Maximum discount of ₹100 on orders above ₹299",
    },
    {
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/rng/md/ads/production/1f84e0d6371b0902e1a8b6f291fbd8d6",
      code: "AUDC100",
      cashback: "Get flat ₹100 discount using AU Debit Cards",
      discount: "Maximum discount up to ₹100 on orders above ₹299",
    },
  ];

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
          <ProductCard />
        </TabPanel>
        <TabPanel className="paym" value="2">
          {payment.map((data, index) => (
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
