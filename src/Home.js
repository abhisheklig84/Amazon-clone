import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_JN._CB655777066_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id={351}
          title="Eloquent JavaScript"
          price={3121}
          rating={5}
          image="https://m.media-amazon.com/images/I/5138YhQZILL._AC_UL320_.jpg"
        />
        <Product
          id={351}
          title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
          price={8999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id={351}
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={54999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id={351}
          title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
          price={8999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={351}
          title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
          price={8999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id={351}
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={54999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={351}
          title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
          price={8999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id={351}
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={54999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id={351}
          title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
          price={8999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41K7gdYhzWL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id={351}
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={54999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
