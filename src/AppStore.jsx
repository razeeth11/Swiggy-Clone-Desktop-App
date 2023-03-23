export function AppStore() {
  return (
    <div className="AppStore">
      <div className="AppStore-one">
        <h1>Restaurants in your pocket</h1>
        <p>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </p>
        <img src="images\play.webp" alt="playstore-link.jpeg" width="180px" />
        <img
          src="images\iOS_ajgrty.webp"
          alt="Appstore-link.jpeg"
          width="180px"
        />
      </div>
      <div className="AppStore-two">
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
