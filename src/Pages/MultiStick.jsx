import React from "react";
import "./MultiStick.css";
import Header from "../Components/Header";
import MM from "../Assets/MM.png";
import Ms1 from "../Assets/Ms1.png";
import Ms2 from "../Assets/Ms2.png";
import Ms3 from "../Assets/Ms3.png";
import Ms4 from "../Assets/Ms4.png";
import Ms5 from "../Assets/Ms5.png";
import Ms6 from "../Assets/Ms6.png";
import Ms7 from "../Assets/Ms7.png";
import Ms8 from "../Assets/Ms8.png";
import Ms9 from "../Assets/Ms9.png";
import Ms10 from "../Assets/Ms10.png";
import Ms11 from "../Assets/Ms11.png";
import tspReviews from "../Assets/tspReviews.png";
import Footer from "../Components/Footer";
const MultiStick = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="product-page-container">
          <div className="product-main-image-container">
            <img className="product-main-image" src={MM} alt="" />
          </div>
          <div className="image-carousel">
            <img className="carousel-images" src={Ms1} alt="" />
            <img className="carousel-images" src={Ms2} alt="" />
            <img className="carousel-images" src={Ms3} alt="" />
            <img className="carousel-images" src={Ms4} alt="" />
            <img className="carousel-images" src={Ms5} alt="" />
            <img className="carousel-images" src={Ms6} alt="" />
            <img className="carousel-images" src={Ms7} alt="" />
            <img className="carousel-images" src={Ms8} alt="" />
            <img className="carousel-images" src={Ms9} alt="" />
            <img className="carousel-images" src={Ms10} alt="" />
            <img className="carousel-images" src={Ms11} alt="" />
          </div>
          <div className="product-title">Multi-Stick</div>
          <div className="tsp-header">
            <p className="header-product-price">$34</p>
            <img className="tsp-reviews" src={tspReviews} alt="" />
          </div>
          <div className="break-line"></div>
          <div className="shade-description">HOT TANGERINE</div>
          <div className="shade-name">I PUT A SPELL ON YOU</div>
          {/* <div onClick={shadeClickHandler} className="shade-container">
          {shadeList}
        </div> */}
          {/* <SuperSerumShades /> */}
          {/* <div className="product-component">product-component</div> */}
          {/* <div>FIND MY SHADE</div> */}
          <div className="circle-container">
            <div className="ms1-circle"></div>
            <div className="ms2-circle"></div>
            <div className="ms3-circle"></div>
            <div className="ms4-circle"></div>
            <div className="ms5-circle"></div>
            <div className="ms6-circle"></div>
            <div className="ms7-circle"></div>
            <div className="ms8-circle"></div>
          </div>
          <button className="add-to-bag">ADD TO BAG - $34</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MultiStick;
