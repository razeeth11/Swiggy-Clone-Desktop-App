import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import AppBar from '@mui/material/AppBar';
import "./styles/topNavBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Toolbar from '@mui/material/Toolbar';

export function TopNavBar() {

  const style = {
    padding : 0
  }

  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar className="toolbar" sx={style}>
    <div className="top-nav-bar"> 
      <div className="top-one">
        <img onClick={()=> navigate("/")}
          src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
          alt="swiggy-logo.png"
          width="80px"
        />
        <p>
          <span className="other">Other</span> Tamil Nadu 627005, India
        </p>
      </div>
      <div className="top-two">
        <div className="search">
          <Button onClick={()=> navigate("/search")}>
            <SearchIcon />
            Search
          </Button>
        </div>
        <div className="offers">
          <Badge badgeContent="NEW" color="primary">
            <Button onClick={()=> navigate("/offerPage")}>
              <LocalOfferIcon />
              Offers
            </Button>
          </Badge>
        </div>
        <div className="help">
          <Button onClick={()=> navigate("/helpPage")}>
            <HelpIcon />
            Help
          </Button>
        </div>
        <div className="person">
          <Button>
            <PersonIcon />
            Sign In
          </Button>
        </div>
        <div className="cart">
          <Button onClick={()=> navigate("/cart")}>
            <ShoppingBagIcon />
            Cart
          </Button>
        </div>
      </div>
    </div>
    </Toolbar>
    </AppBar>
  );
}


export function Cart(){

  const navigate = useNavigate();

  return(
    <div className="Cart">
       <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty-cart-image.png" width="350px"/>
       <h2>Your Cart is Empty</h2>
       <p>You can go to home page to view more restaurants</p>
       <Button onClick={()=> navigate("/")} sx={{borderRadius : 0 , backgroundColor : "orange"}} variant="contained">SEE RESTAURANTS NEAR YOU</Button>
    </div>
  )
}


export function Search() {

  const top100Films = [
    {label: 'Vegetable Biryani', price: 150}, 
    {label: 'Paneer Butter Masala', price: 100}, 
    {label: 'Aloo Gobi', price: 90}, 
    {label: 'Fried Rice', price: 80}, 
    {label: 'Pav Bhaji', price: 60}, 
    {label: 'Mushroom Masala', price: 60}, 
    {label: 'Veg Pulao', price: 70}, 
    {label: 'Chole Bhature', price: 140}, 
    {label: 'Matar Paneer', price: 90}, 
    {label: 'Masala Dosa', price: 80}, 
    {label: 'Veg Korma', price: 90}, 
    {label: 'Dal Makhani', price: 100}, 
    {label: 'Aloo Tikki', price: 70}, 
    {label: 'Jeera Aloo', price: 70}, 
    {label: 'Butter Chicken', price: 140}, 
    {label: 'Manchurian', price: 90}, 
    {label: 'Idli Sambhar', price: 60}, 
    {label: 'Paneer Tikka Masala', price: 100}, 
    {label: 'Shahi Paneer', price: 100}, 
    {label: 'Fried Noodles', price: 80}, 
    {label: 'Cheese Pizza', price: 100}, 
    {label: 'Mushroom Pizza', price: 110}, 
    {label: 'Veg Burger', price: 70}, 
    {label: 'Veg Spring Roll', price: 70}, 
    {label: 'Veg Hakka Noodles', price: 80}, 
    {label: 'Palak Paneer', price: 90}, 
    {label: 'Schezwan Fried Rice', price: 85}, 
    {label: ' gulab jamun', price: 50}, 
    {label: 'Veg Manchurian Gravy', price: 90}, 
    {label: 'Stuffed Paratha', price: 60}, 
    {label: 'Veg Briyani', price: 100}, 
    {label: 'Lemon Rice', price: 70}, 
    {label: 'Tomato Rice', price: 70}, 
    {label: 'Rajma Chawal', price: 90}, 
    {label: 'Sambar Rice', price: 80}, 
    {label: 'Veg Dish', price: 90}, 
    {label: 'masala dosa', price: 70}, 
    {label: 'garlic fried rice', price: 85}, 
    {label: 'chilly paneer', price: 100}, 
    {label: 'Veg noodles', price: 80}, 
    {label: 'Veg fried rice', price: 80}, 
    {label: 'coconut porridge', price: 50}, 
    {label: 'dosa', price: 60}, 
    {label: 'Grilled sandwich', price: 50}, 
    {label: 'egg Bhurji', price: 65}, 
    {label: 'Schezwan noodles', price: 80}, 
    {label: 'vegetable soup', price: 45}, 
    {label: 'Curd Rice', price: 60}, 
    {label: 'Stuffed Naan', price: 80}, 
    {label: 'Rava Idli', price: 60}, 
    {label: 'Pastha Biryani', price: 110}, 
    {label: 'Upma', price: 70}, 
    {label: 'Kulfi', price: 80}, 
    {label: 'Gulab Jamun', price: 60}, 
    {label: 'Tomato Rice', price: 70}, 
    {label: 'Paneer Tikkas', price: 80}, 
    {label: 'Veg Samosas', price: 55}, 
    {label: 'Rava Upma', price: 70}, 
    {label: 'Mixed vegetable curry', price: 80}, 
    {label: 'Veg Pakora', price: 60}, 
    {label: 'Veg Cutlet', price: 70}, 
    {label: 'Veg Juice', price: 40}, 
    {label: 'Veg and Rice', price: 90}, 
    {label: 'Cheese Sandwich', price: 70}, 
    {label: 'Vanilla Ice Cream', rupees: 40}, 
    {label: 'Chocolate Ice Cream', rupees: 50}, 
    {label: 'Pista Ice Cream', rupees: 60},
    {label: 'ButterScotch Ice Cream', rupees: 35},
    {label: 'Coconut Ice Cream', rupees: 40},
    {label: 'TuttiFrutti Ice Cream', rupees: 45},
    {label: 'GulabJamu Ice Cream', rupees: 35},
    {label: 'Strawberry Ice Cream', rupees: 55},
    {label: 'Mango Ice Cream', rupees: 50},
    {label: 'Caramel Ice Cream', rupees: 60},
    {label: 'Tandoori Roti', price: 70}, 
    {label: 'Missal Pav', price: 65}, 
    {label: 'Veg Burgers', price: 80}, 
    {label: 'Black Forest cake', rupees: 545},
    {label: 'Chocolate Truffle cake', rupees: 690},
    {label: 'Strawberry cake', rupees: 645},
    {label: 'Butterscotch cake', rupees: 745},
    {label: 'Icecream cake', rupees: 845},
    {label: 'Vanilla cake', rupees: 590},
    {label: 'Cheese Cake', rupees: 545},
    {label: 'Pineapple cake', rupees: 590},
    {label: 'Oreo cake', rupees: 645},
    {label: 'Fruit Cake', rupees: 745},
    {label: 'Corn Fritters', price: 60}, 
    {label: 'Carrot Parantha', price: 80}, 
    {label: 'Paneer Tikka', price: 90}, 
    {label: 'Veg Mould', price: 80}, 
    {label: 'Fruit Salad', price: 50}, 
    {label: 'Fried Paneer', price: 90}, 
    {label: 'Dhokla', price: 50}, 
    {label: 'Veg Cheese Grill', price: 140}, 
    {label: 'Gobi Parantha', price: 70}, 
    {label: 'Cheese Garlic Bread', price: 80}, 
    {label: 'Veg Cheese Roll', price: 80}, 
    {label: 'Methi Pulao', price: 70}, 
    {label: 'Veg Biryani', price: 100}, 
    {label: 'Veg Makkai', price: 90}, 
    {label: 'Chaat', price: 60}, 
    {label: 'Veg Seekh Kebab', price: 80} 
  ]

  const [value,setValue] = useState("")

  return (
     <div className="Search">
        <div className="search-one">
        <Autocomplete
      id="combo-box-demo"
      value={value}
      options={top100Films}
      sx={{ width: '100%' }}
      renderInput={(params) => 
      <TextField autoFocus={true} {...params} label="Search for restaurants and food" />}/>
        </div>

        <div className="search-two">
            <img onClick={()=> setValue("biryani")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg" alt="biryani-img.icon" width="65px"/>
            <img onClick={()=> setValue("pizza")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1" alt="pizza-img.icon" width="65px"/>
            <img onClick={()=> setValue("burger")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv" alt="burger-img.icon" width="65px"/>
            <img onClick={()=> setValue("cake")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/fxnbbozow1xabcvtv1rf" alt="cake-img.icon" width="65px"/>
            <img onClick={()=> setValue("ice cream")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97" alt="ice-cream-img.icon" width="65px"/>
            <img onClick={()=> setValue("north indian")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd" alt="north-indian-img.icon" width="65px"/>
            <img onClick={()=> setValue("south indian")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx" alt="south-indian-img.icon" width="65px"/>
            <img onClick={()=> setValue("rolls")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u" alt="rolls-image.icon" width="65px"/>
            <img onClick={()=> setValue("indian snacks")} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc" alt="indian-snacks-img.icon" width="65px"/>
        </div>
     </div>
  );
}


 