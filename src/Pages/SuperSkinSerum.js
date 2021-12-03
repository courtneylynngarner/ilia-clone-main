import React, { useEffect, useState, useContext } from "react";
import { lineItemContext } from "../store/cartStore";
import axios from "axios";
import Header from "../Components/Header";
import SuperSerumShades from "../Components/SuperSerumShades";
import Footer from "../Components/Footer";
import "./SuperSkinSerum.css";
import superSerumReviews from "../Assets/superSerumReviews.png";

function SuperSkinSerum() {
  const { lineItemState, updateLineItem } = useContext(lineItemContext);
  const [loading, setLoading] = useState(true);
  const [shadeList, setShadeList] = useState([]);
  const [selectedShade, setSelectedShade] = useState({});
  const [outlineActive, setOutlineActive] = useState(false);

  const [displayDescription, setDisplayDescription] = useState(false);
  const [displayHowToUse, setDisplayHowToUse] = useState(false);

  const [displayIngredients, setDisplayIngredients] = useState(false);
  // const { cart, setCart } =
  function shadeClickHandler() {
    console.log(outlineActive);
    setOutlineActive(!outlineActive);
  }

  function addToBagClick() {
    updateLineItem({ type: "ADD_ITEM_TO_CART" });
  }

  function displayDescriptionHandler() {
    setDisplayDescription(!displayDescription);
  }

  function displayHowToUseHandler() {
    setDisplayHowToUse(!displayHowToUse);
  }
  function displayIngredientsHandler() {
    setDisplayIngredients(!displayIngredients);
  }

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("http://localhost:3005/api/face-products");
      console.log(res.data);
      console.log(res.data.getFaceProducts);
      setShadeList(res.data.getFaceProducts);
      setSelectedShade(res.data.getFaceProducts[0]);
      console.log(window.pageYOffset);
    }
    getProducts();
    setLoading(false);
    console.log("this is the shade list", shadeList);
    console.log(selectedShade.product_image);
  }, []);

  return (
    <div>
      <Header />
      <div className="product-page-container">
        <div className="product-main-image-container">
          <img
            className="product-main-image"
            src={selectedShade.product_image}
            alt=""
          />
        </div>
        <div className="image-carousel">
          <img
            className="carousel-images"
            src={selectedShade.carousel1}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel2}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel3}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel4}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel5}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel6}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel7}
            alt=""
          />
          <img
            className="carousel-images"
            src={selectedShade.carousel8}
            alt=""
          />
        </div>
        <div className="product-title">Super Serum Skin Tint SPF 40</div>
        <div className="product-header">
          <p className="header-product-price">$48</p>
          <img className="reviews" src={superSerumReviews} alt="" />
        </div>
        <div className="break-line"></div>
        <div className="shade-description">
          {selectedShade.shade_description}
        </div>
        <div className="shade-name">{selectedShade.shade}</div>

        <div onClick={shadeClickHandler} className="shade-container">
          {shadeList.map((column, index) => {
            // indexes.push(index);
            // setShadeIndexes(indexes);
            let itemShade = column.shade.split(" ");
            return (
              <SuperSerumShades
                key={index}
                id={index}
                selectedShade={selectedShade}
                setSelectedShade={setSelectedShade}
                shadeList={shadeList}
                data={column}
                outlineActive={outlineActive}
                shade={
                  column.shade === "PORTO FERRO ST10" ? "PORTO-F" : itemShade[0]
                }
              />
            );
          })}
        </div>
        <button onClick={addToBagClick} className="add-to-bag">
          ADD TO BAG - $48
        </button>
        <div className="product-info-drop-down-container">
          <div className="break-line"></div>
          <div className="product-info-drop-down">
            <p>Description</p>
            <p onClick={displayDescriptionHandler}>
              {displayDescription ? "-" : "+"}
            </p>
          </div>

          {displayDescription && (
            <div className="description-text">
              <div className="info-heading">
                About ILIA Super Serum Skin Tint SPF 40
              </div>
              <p className="product-text">
                {" "}
                A clean, light-coverage, tinted mineral SPF 40 serum that boosts
                skincare benefits.
              </p>
              <div className="info-heading">How it works:</div>
              <p className="product-text">
                Your tinted SPF will never be the same. This first-of-its-kind
                formula fuses skincare, makeup, and sun protection into one easy
                step: a weightless serum that leaves your skin looking like
                skin. Features SPF 40 coverage with Non-Nano Zinc Oxide to
                safely shield skin from UVA, UVB, UVC, blue light and infrared
                rays. Created with a blend of Hyaluronic Acids, plant-based
                Squalane, and Niacinamide, ILIA's Skin Tint evens tone, softens
                fine lines and imperfections, and dries down to a natural, dewy
                finish. And this super serum doesn’t stop there: it also creates
                a natural barrier for your skincare—sealing in hydration,
                plumping skin, and boosting any antioxidant effectiveness by
                200%. Plus, it’s silicone-free, fragrance-free, chemical
                screen-free, oil-free, non-comedogenic, and safe for sensitive
                skin. This is SPF, made super.
              </p>
              <div className="info-heading">Similar shades:</div>
              <div className="product-text">
                - True Skin Serum Foundation in Sable SF.5 <br /> - True Skin
                Serum Concealer in Mallow SC.25
              </div>
              <div className="info-heading">What ele you need to know:</div>
              <p className="product-text">Size: 1 fl oz | 30ml</p>
              <div className="product-text">
                Awards: <br />
                - Best Clean Foundation, Allure (2020) <br />
                - Best Clean Foundation, Glamour (2020) <br />
                - Best Makeup with Clean Sunscreen, Elle (2020) <br />
                - Best Foundation, Byrdie Eco Beauty Awards (2020) <br />
                - Hottest Launches of 2020, OK! Magazine (2020) <br />
                - Best Tinted Moisturizer, Shape (2020) <br />
                - Beauty Innovator Award, Refinery29 (2020) <br />
                - Best Natural Skin Tint, Prevention (2021) <br />
                - Best Complexion Product, The Editorialist (2021) <br />
              </div>
              <p className="product-text">
                1% of Super Serum Skin Tint SPF 40 sales go toward our goal of p
                <u>lanting 1 million trees </u> by 2023 with 1% for the Planet.
              </p>
              <div className="info-heading">
                Currently only available to ship in the USA.
              </div>
            </div>
          )}

          <div className="break-line"></div>
          <div className="product-info-drop-down">
            <p>How to Use</p>
            <p onClick={displayHowToUseHandler}>
              {displayHowToUse ? "-" : "+"}
            </p>
          </div>

          {displayHowToUse && (
            <div className="product-info">
              <ul>
                <li>Shake well before use.</li>
                <li>
                  Works best if applied to clean skin or on top of{" "}
                  <u> True Skin Radiant Priming Serum. </u> On application,
                  shade will appear lighter and will adapt to its true color.
                </li>
                <li>
                  Dispense quarter of a dropper into palms of hand and apply
                  like a serum.
                </li>
                <li>
                  On application shade may appear lighter. After 30-60 seconds
                  the shade will adjust to its true color. For oily skin, set
                  your t-zone with our <u> Soft Focus Finishing Powder.</u>
                </li>
                <li>
                  As a result of the silicone-free formula, some natural
                  separation may occur. This is normal and it will reform when
                  applied to skin.
                </li>
              </ul>
            </div>
          )}

          <div className="break-line"></div>
          <div className="product-info-drop-down">
            <p>Ingredients</p>
            <p onClick={displayIngredientsHandler}>
              {displayIngredients ? "-" : "+"}
            </p>
          </div>
          <div className="break-line"></div>

          {displayIngredients && (
            <>
              <p className="product-info">
                Active Ingredients: Zinc Oxide 12.0%
              </p>
              <p className="product-info">
                Aqua/Water/Eau, Squalane, Shea Butter Ethyl Esters, Isoamyl
                Laurate, Polyglyceryl-3 Ricinoleate, Butyloctyl Salicylate,
                Propanediol, Isopropyl Isostearate, Polyglyceryl-3
                Diisostearate, Methylpropanediol, Niacinamide, Sodium Chloride,
                Lecithin, Caprylyl Glycol, Silica, Aloe Barbadensis Leaf Juice
                Powder, Bisabolol, Hydrolyzed Sodium Hyaluronate, Allantoin,
                Phenylpropanol, Sodium Myristoyl Glutamate, Sodium Hyaluronate,
                Tetrasodium Glutamate Diacetate, Aluminum Hydroxide,
                Polyhydroxystearic Acid. May Contain/Peut Contenir (±): CI
                77491, CI 77492, CI 77499 (Iron Oxides), CI 77891 (Titanium
                Dioxide).
              </p>
              <p className="product-info-close">
                This product is formulated without Gluten.
              </p>
            </>
          )}
          {/* <div className="product-info-drop-down">FAQ</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuperSkinSerum;
