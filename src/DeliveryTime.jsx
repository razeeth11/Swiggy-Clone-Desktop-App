import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./styles/productsCard.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DeliveryTimeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swiggy-clone-backend.vercel.app/deliveryTime")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="delivery-time-list">
      {data.map((ev, index) => (
        <DeliveryTime
          key={index}
          id={ev.id}
          img={ev.img}
          shopName={ev.shopName}
          cuisine={ev.cuisines}
          rating={ev.rating}
          delivery={ev.delivery}
          price={ev.price}
          offer={ev.offer}
        />
      ))}
    </div>
  );
}

export function DeliveryTime({
  id,
  img,
  shopName,
  cuisine,
  rating,
  delivery,
  price,
  offer,
}) {
  const navigate = useNavigate();

  const style = {
    width: "100%",
    fontWeight: 900,
  };

  const rat = {
    backgroundColor: rating > 4 ? "#48c479" : "#FA5858",
  };

  return (
    <div
      onClick={() => navigate(`/shopDetails/${shopName}`)}
      className="product-card"
    >
      <Card
        sx={{
          minWidth: 260,
          padding: "15px",
          borderRadius: 0,
          boxShadow: 0,
          border: "1px solid white",
        }}
      >
        <div className="product-img">
          <img src={img} alt="pizza-image" width="260px" />
        </div>
        <div className="product-details">
          <h1>
            <strong>{shopName}</strong>
          </h1>
          <p>{cuisine}</p>
        </div>
        <div className="product-rating">
          <p style={rat}>⭐{rating}</p>
          <p>.</p>
          <p>{delivery} MINS</p>
          <p>.</p>
          <p>{price} FOR TWO</p>
        </div>
        <div className="product-offer">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
            alt="offer-icon.png"
            width="20px"
          />
          <p>
            <strong>{offer}% off | Use TRYNEW</strong>
          </p>
        </div>
        <div className="product-view">
          <Button className="view-button" sx={style}>
            QUICKVIEW
          </Button>
        </div>
      </Card>
    </div>
  );
}
