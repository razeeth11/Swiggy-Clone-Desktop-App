import React from "react";
import "./styles/shopDetails.css"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import ScheduleIcon from '@mui/icons-material/Schedule';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function ShopDetailsPage() {

  const navigate = useNavigate();
  
  return (
  <div className="shop-details-page">
    <div className="link">
      <div className="link-one">
        <div onClick={()=> navigate("/")}>Home</div>
        <div>\</div>
        <div onClick={()=> navigate("/")}>Tirunelveli</div>
        <div>\</div>
        <div onClick={()=> navigate("/")}>Vannarpettai</div>
        <div>\</div>
        <div>Anjappar</div>
      </div>
      <div className="link-two">
         <SearchIcon/>
      </div>
    </div>

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
 
    <hr />

    <div className="delivery-details">

         <div className="delivery-one">
             <div className="delivery-time">
                <ScheduleIcon/>
                <p>22 MINS</p>
             </div>
             <div className="delivery-price">
                <CurrencyRupeeIcon/>
                <p>300 for TWO</p>
             </div>
         </div>
  
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

    <SimpleAccordion/>
  
  </div>
  );
}


function CompList(){
    return(
      <div>
        <Comp/>
      </div>
    )
}

function Comp(){
  return(
    <div className="accordion-details" >
       <div className="acco-one">
          <h2>chicken biryani</h2>
          <p>840</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt?</p>
       </div>
       <div className="acco-two">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/nrip1v6ti2egseekznzr" alt="" width="120px" />
       </div>
    </div>
  )
}



export function SimpleAccordion() {

  const styles= {
    fontSize : "20px",
    fontWeight : 900
   }

  return (
    <div className="accordion">
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography sx={styles}>Recommended</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
             <CompList/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
