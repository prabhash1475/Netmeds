import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "280px" }} variant="dark">
      <Carousel.Item style={{ height: "280px" }}>
        <img
          className="d-block w-100"
          src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656599543_Home_Bannersgge.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item style={{ height: "280px" }}>
        <img
          className="d-block w-100"
          src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656599646_Home_Bannervvvvv.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "280px" }}>
        <img
          className="d-block w-100"
          src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275901_Web_Home_Kareenasdhdh.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: "280px" }}>
        <img
          className="d-block w-100"
          src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1656599790_Home_Banneraszxssx.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

root.render(<ControlledCarousel />);