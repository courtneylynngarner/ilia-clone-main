import React from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./TrueSkinPrimer.css";
import TrueSkinPrimingSerum from "../Assets/trueSkinPrimingSerum.png";
import tspReviews from "../Assets/tspReviews.png";
import tsp1 from "../Assets/tsp1.png";
import tsp2 from "../Assets/tsp2.png";
import tsp3 from "../Assets/tsp3.png";
import tsp4 from "../Assets/tsp4.png";
import tsp5 from "../Assets/tsp5.png";
import tsp6 from "../Assets/tsp6.png";

const TrueSkinPrimer = () => {
  return (
    <div>
      <Header />
      <div className="product-page-container">
        <div className="product-main-image-container">
          <img
            className="product-main-image"
            src={TrueSkinPrimingSerum}
            alt=""
          />
        </div>
        <div className="image-carousel">
          <img className="carousel-images" src={tsp1} alt="" />
          <img className="carousel-images" src={tsp2} alt="" />
          <img className="carousel-images" src={tsp3} alt="" />
          <img className="carousel-images" src={tsp4} alt="" />
          <img className="carousel-images" src={tsp5} alt="" />
          <img className="carousel-images" src={tsp6} alt="" />
        </div>
        <div className="product-title">True Skin Radiant Priming Serum</div>
        <div className="tsp-header">
          <p className="header-product-price">$52</p>
          <img className="tsp-reviews" src={tspReviews} alt="" />
        </div>
        <div className="break-line"></div>
        <div className="shade-description">SUBTLE GOLD GLOW</div>
        <div className="shade-name">LIGHT IT UP</div>
        {/* <div onClick={shadeClickHandler} className="shade-container">
          {shadeList}
        </div> */}
        {/* <SuperSerumShades /> */}
        {/* <div className="product-component">product-component</div> */}
        {/* <div>FIND MY SHADE</div> */}
        <div className="tsp-circle"></div>
        <button className="add-to-bag">ADD TO BAG - $52</button>
        <div className="product-info-drop-down-container">
          <div className="break-line"></div>
          <div className="product-info-drop-down">Description</div>
          <div className="break-line"></div>
          <div className="info-heading">What it is:</div>
          <p className="product-text">
            Bridging the gap between makeup and skincare, ILIA’s True Skin
            Radiant Priming Serum does more than create a perfect base for
            makeup application. Utilizing ingredients like Hibiscus Extract,
            Aloe and Beta-Glucan, this silicone-free primer helps to firm,
            moisturize and soothe skin, while protecting it from harmful
            environmental factors that cause aging.
          </p>
          <div className="info-heading">How it works:</div>
          <p className="product-text">
            Upon application, the serum has a tightening effect that diminishes
            the look of pores and fine lines, while improving skin texture on
            dry down for a silky and soft-to-the-touch feel. Skin is left with a
            radiant glow and prepped for effortless makeup application that
            lasts.
          </p>
          <p className="product-text">Size: 1 fl oz | 30ml</p>
          <div className="break-line"></div>
          <div className="product-info-drop-down">How to Use</div>
          <div className="break-line"></div>
          <div className="product-info">
            <p>
              For best results, apply True Skin Radiant Priming Serum at the end
              of your skincare routine and before your favorite complexion
              products.
            </p>
            <ul>
              <li>Shake well before use.</li>
              <li>Dispense 3-4 drops into the palm of your hand.</li>
              <li>Apply with your fingers as you would a serum.</li>
              <li>Pat the formula into skin.</li>
              <li>
                On dry down, observe a mild tightening effect on skin as the
                primer transforms to a silky, soft-to-the-touch finish.
              </li>
              <li>
                Allow 1-2 minutes for the primer to set, then follow with your
                favorite <u>clean foundation</u>
              </li>
            </ul>
          </div>
          <div className="break-line"></div>
          <div className="product-info-drop-down">Ingredients</div>
          <div className="break-line"></div>
          <p className="product-info-close">
            Aloe Barbadensis Leaf Juice*, Maltose, Gluconolactone, Glycerin,
            Caprylyl/Capryl Glucoside, Propanediol, Sodium Benzoate,
            Caprylic/Capric Triglyceride, Agave Tequilana Leaf Extract, Xanthan
            Gum, Chondrus Crispus Extract, Pistacia Lentiscus (Mastic) Gum,
            Hydrogenated Lecithin, Mica, Calcium Gluconate, Benzyl Alcohol,
            Ethylhexylglycerin, Lithothamnion Calcareum Extract, Beta- Glucan,
            Caprylyl Glycol, 1,2-Hexanediol, Citric Acid, Sodium Hydroxide,
            Benzoic Acid, Phenethyl Alcohol, Dehydroacetic Acid, Hibiscus
            Sabdariffa Flower Extract, Potassium Sorbate, Titanium Dioxide (Ci
            77891).
          </p>
          {/* <p className="product-info-close">
            This product is formulated without Gluten.
          </p> */}
          {/* <div className="product-info-drop-down">FAQ</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrueSkinPrimer;
