import "./App.css";
import "./login.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';

export function App() {
  return <div className="App">
    <Login/>
  </div>;
}

function Login() {

  const [value,setValue] = useState("")
  const [state,setState] = useState(false)

  const style = {
    fontSize : "14px",
  }

  return (
    <div className="log-in-page">
      <div className="welcome-page">
        <div className="content">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt="Swiggy-logo.png" width="200px"/>
            <div className="log-sign">
              <h3 className="log" >Login</h3>
              <h3>Sign up</h3>
            </div>
          </div>
           
           <div className="quote">
           <h1>Late night at office ?</h1>
           <p>Order food from favourite restaurants near you.</p>
           </div>

           <div className="pincode">
             <div className="one">
             <input onChange={(ev)=> setValue(ev.target.value) } type="text" placeholder="Enter your delivery location"/>
             </div>
             <div className="two">
             <button onClick={()=> setState(value == "") }>FIND FOOD</button>
             </div>
           </div>
            {state  ? <Alert sx={style}  severity="error"><strong>Enter your delivery location</strong></Alert> : null}

           <div className="city">
            <p>POPULAR CITIES IN INDIA</p>
            <p><strong>Ahmedabad Bangalore Chennai Delhi,Gurgaon Hyderabad Kolkata Mumbai Pune& more.</strong></p>
           </div>
        </div>

        <div className="image">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            alt="swiggy-dish-cover-image.jpeg" width="550px"
          />
        </div>
      </div>
      <Feature/>
      <AppStore/>
    </div>
  );
}


function Feature(){
  return(
    <div className="feature">
      <div className="feature-one">
        <img src="images\4x_-_No_min_order_x0bxuf.webp" alt="no-min-order.png" width="120px"/>
        <h2>No Minimum Order</h2>
        <p>Order in for yourself or for the group, with no restrictions on order value</p>
      </div>
      <div className="feature-two">
        <img src="images\4x_Live_order_zzotwy.webp" alt="live-order.png" width="120px"/>
        <h2>Live Order Tracking</h2>
        <p>Know where your order is at all times, from the restaurant to your doorstep</p>
      </div>
      <div className="feature-three">
        <img src="images\4x_-_Super_fast_delivery_awv7sn.webp" alt="super-fast-delivery.png" width="120px"/>
        <h2>Lightning-Fast Delivery</h2>
        <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
      </div>
    </div>
  )
}


function AppStore(){
  return(
    <div className="AppStore">
       <div className="AppStore-one">
        <h1>Restaurants in your pocket</h1>
        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
         <img src="images\play.webp" alt="playstore-link.jpeg"  width="180px" />
         <img src="images\iOS_ajgrty.webp" alt="Appstore-link.jpeg" width="180px" />
       </div>
       <div className="AppStore-two">
         <img src="images\firxt.jpeg" alt="swiggy-online-app.jpeg" width="300px"/>
         <img src="images\second.jpeg" alt="swiggy-online-app.jpeg" width="300px"/>
       </div>
    </div>
  )
}

// function CityLinks(){
//   return(
//     <div className="City-links">
//       <p><strong>WE DELIVER TO</strong></p>
//       <li></li> 
//     </div>
//   )
// }


