import { appStore, appStoreOne } from "./styles/loginStyles";

export function AppStore() {
  return (
    <div style={appStore}>
      <div style={appStoreOne}>
        <h1 style={{fontSize: '32px'}}>Restaurants in your pocket</h1>
        <p style={{fontSize: '18px',margin : '10px 0', color :'grey'}}>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </p>
        <img src="images\play.webp" alt="playstore-link.jpeg" width="120px" />
        <img
          src="images\iOS_ajgrty.webp"
          alt="Appstore-link.jpeg"
          width="120px"
        />
      </div>
      <div style={{display: 'flex'}}>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
          <img
            src="images\firxt.jpeg"
            alt="swiggy-online-app.jpeg"
            width="300px"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
          <img
            src="images\second.jpeg"
            alt="swiggy-online-app.jpeg"
            width="300px"
          />
        </a>
      </div>
    </div>
  );
}
