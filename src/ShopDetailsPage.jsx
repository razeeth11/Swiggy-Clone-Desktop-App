import React, { useState, useEffect } from "react";
import "./styles/shopDetails.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ShopDetailsPageList() {
  return (
    <div className="shop-details-list">
      <ShopDetailsPage />
    </div>
  );
}

export function ShopDetailsPage() {
  const [ShopProducts, setShopProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swiggy-clone-backend.vercel.app/shopDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setShopProducts(data));
  }, []);

  return (
    <div className="shop-details-page">
      <div className="link">
        <div className="link-one">
          <div onClick={() => navigate("/")}>Home</div>
          <div>/</div>
          <div onClick={() => navigate("/")}>Tirunelveli</div>
          <div>/</div>
          <div onClick={() => navigate("/")}>Vannarpettai</div>
          <div>/</div>
          <div>Anjappar</div>
        </div>
        <div className="link-two">
          <SearchIcon />
        </div>
      </div>
      <ShopDetailsComponent />
      <hr />

      <div className="delivery-details">
        <div className="delivery-two">
          <div className="deliver-offers">
            <h4>60% OFF UPTO 120</h4>
            <p>USE TRYNEW | ABOVE 149</p>
          </div>
          <div className="deliver-offers">
            <h4>FLAT UPTO 100 OFF</h4>
            <p>USE ICICINEW | ABOVE 700</p>
          </div>
          <div className="deliver-offers">
            <h4>20% OFF UPTO 200</h4>
            <p>USE TRYNEW | ABOVE 149</p>
          </div>
          <div className="deliver-offers">
            <h4>15% OFF UPTO 120</h4>
            <p>USE INDUSIND | ABOVE 300</p>
          </div>
        </div>
      </div>
      <SimpleAccordion shopDetails={ShopProducts} />
    </div>
  );
}

function ShopDetailsComponent() {
  return (
    <div className="shop-1">
      <div className="shop">
        <div className="shop-one">
          <h1>Anjappar</h1>
          <p>Chettinad</p>
          <p>Vannarpettaai</p>
        </div>
        <div className="shop-two">
          <p>3.8</p>
          <p>1K+ ratings</p>
        </div>
      </div>
      <div className="delivery-one">
        <div className="delivery-time">
          <ScheduleIcon />
          <p>22 MINS</p>
        </div>
        <div className="delivery-price">
          <CurrencyRupeeIcon />
          <p>300 for TWO</p>
        </div>
      </div>
    </div>
  );
}

export function SimpleAccordion({ shopDetails }) {
  return (
    <div className="accordion">
      <Accordion
        className="acc"
        sx={{
          borderRadius: 0,
          boxShadow: 0,
          border: "none",
        }}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Recommended</h2>
        </AccordionSummary>
        <AccordionDetails>
          {shopDetails.map((product, index) => (
            <CompList
              key={index}
              dish={product.dishName}
              img={product.dishImg}
              items={product.items}
              price={product.price}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function CompList({ dish, img, items, price }) {
  return (
    <div>
      <Comp dish={dish} img={img} items={items} price={price} />
    </div>
  );
}

function Comp({ dish, img, items, price }) {
  return (
    <div className="accordion-details">
      <div className="acco-one">
        <h2>{dish}</h2>
        <div className="acco-price">
          <CurrencyRupeeIcon />
          <p>{price}</p>
        </div>
        <div className="items">
          <p>{items}</p>
        </div>
      </div>
      <div className="acco-two">
        <img src={img} alt="" width="100px" />
      </div>
    </div>
  );
}
