import { useEffect, useState } from "react";
import { API } from "./API";
import { cityLinkAnchor } from "./styles/loginStyles";


export function CityData() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch(`${API}/CityLinks`)
      .then((res) => res.json())
      .then((data) => setCity(data));
  }, []);

  return (
    <div className="divv">
      <div className="div">
        <div>
          <p>
            <strong>WE DELIVER TO</strong>
          </p>
          <hr />
        </div>
        <div className="cityData">
          {city.map((ev, index) => (
            <CityLinks cityName={ev.city} key={index} />
          ))}
        </div>
      </div>
      <div className="final">
        <div>
          <a href="https://www.swiggy.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt="Swiggy-logo.png"
              width="200px"
            />
          </a>
        </div>
        <div>
          <p>&#169; 2023 SWIGGY</p>
        </div>
        <div className="final-contact">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
            alt="facebook=logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
            alt="pinterest-logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
            alt="instsagram-logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
            alt="twitter-logo.png"
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}
function CityLinks({ cityName }) {
  const dt = `https://www.swiggy.com/city/${cityName}`;

  return (
    <div className="City-links">
      <a style={cityLinkAnchor} href={dt}>
        <li>{cityName}</li>
      </a>
    </div>
  );
}
