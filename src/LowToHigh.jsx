import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


export function LowToHighList(){
  return(
    <div className="delivery-time-list">
      <LowToHigh/>
    </div>
  )
}

export function LowToHigh() {
  const style = {
    width: "100%",
    fontWeight: 900,
  };

  return (
    <div className="product-card">
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
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ab979bffbd658e74de650a15ca0092a3"
            alt="pizza-image"
            width="260px"
          />
        </div>
        <div className="product-details">
          <h2>
            <strong>Oven Story Pizza</strong>
          </h2>
          <p>Pizzas,italian</p>
        </div>
        <div className="product-rating">
          <p>⭐4.0</p> |<p>25 MINS</p> |<p>400 FOR TWO</p>
        </div>
        <div className="product-offer">
          <p>
            <strong>60% off | Use TRYNEW</strong>
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
