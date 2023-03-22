import "./productsCard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export function ProductsPage() {
  return(
    <div className="products-page">
        <ProductCard/>
    </div>
  )
}

export function ProductCard(){

   const style = {
    width : "100%",
    fontWeight : 900,
   }

  return(
    <div className="product-card">
      <Card sx={{ minWidth: 260 , padding : "15px" }}>
       <div className="product-img">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ab979bffbd658e74de650a15ca0092a3" alt="pizza-image" width="260px"/>
       </div>
       <CardContent>
       <div className="product-details">
          <h2>Oven Story Pizza</h2>
          <p>Pizzas,italian</p>
       </div>
       <div className="product-rating">
          <p>⭐4.0</p> |
          <p>25 MINS</p> | 
          <p>400 FOR TWO</p>
       </div>
       <hr />
       <div className="product-offer">
        <p>60% off | Use TRYNEW</p>
       </div>
       <hr />
       <div className="product-view">
        <Button className="view-button" sx={style}>QUICKVIEW</Button>
       </div>
       </CardContent>
    </Card>
    </div>
  )
}

