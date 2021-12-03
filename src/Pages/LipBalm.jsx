import React from "react";
import Header from "../Components/Header";
import "./LipBalm.css";
import LipBalmMain from "../Assets/LipBalmMain.png";
import lb1 from "../Assets/lb1.png";
import lb2 from "../Assets/lb2.png";
import lb3 from "../Assets/lb3.png";
import lb4 from "../Assets/lb4.png";
import lb5 from "../Assets/lb5.png";
import lb6 from "../Assets/lb6.png";
import lb7 from "../Assets/lb7.png";
import lb8 from "../Assets/lb8.png";
import lb9 from "../Assets/lb9.png";
import lb10 from "../Assets/lb10.png";
import lbReviews from "../Assets/lbReviews.png";
const LipBalm = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="product-page-container">
          <div className="product-main-image-container">
            <img className="product-main-image" src={LipBalmMain} alt="" />
          </div>
          <div className="image-carousel">
            <img className="carousel-images" src={lb1} alt="" />
            <img className="carousel-images" src={lb2} alt="" />
            <img className="carousel-images" src={lb3} alt="" />
            <img className="carousel-images" src={lb4} alt="" />
            <img className="carousel-images" src={lb5} alt="" />
            <img className="carousel-images" src={lb6} alt="" />
            <img className="carousel-images" src={lb7} alt="" />
            <img className="carousel-images" src={lb8} alt="" />
            <img className="carousel-images" src={lb9} alt="" />
            <img className="carousel-images" src={lb10} alt="" />
          </div>
          <div className="product-title">Balmy Tint Hydrating Lip Balm</div>
          <div className="tsp-header">
            <p className="header-product-price">$28</p>
            <img className="tsp-reviews" src={lbReviews} alt="" />
          </div>
          <div className="break-line"></div>
          <div className="shade-description">WARM PEACHY NUDE</div>
          <div className="shade-name">HOLD ME</div>
          {/* <div onClick={shadeClickHandler} className="shade-container">
          {shadeList}
        </div> */}
          {/* <SuperSerumShades /> */}
          {/* <div className="product-component">product-component</div> */}
          {/* <div>FIND MY SHADE</div> */}
          <div className="circle-container">
            <div className="lb1-circle"></div>
            <div className="lb2-circle"></div>
            <div className="lb3-circle"></div>
            <div className="lb4-circle"></div>
            <div className="lb5-circle"></div>
            <div className="lb6-circle"></div>
            <div className="lb7-circle"></div>
            <div className="lb8-circle"></div>
          </div>
          <button className="add-to-bag">ADD TO BAG - $34</button>
        </div>
      </div>
    </div>
  );
};

export default LipBalm;
