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
            {state  ? <Alert severity="error"><strong>Enter your delivery location</strong></Alert> : null}

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
    </div>
  );
}
