import React, { useEffect, useState } from "react";
import Footer from "..//../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
import { useLocation, useRouteMatch } from "react-router-dom";
import Axios from "axios";
import constants from "../../constants";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  const location = useLocation();
  const routeParams = useRouteMatch().params;
  const [product, setProduct] = useState(location.state || {});
  const [size, setSize] = useState("M");
  const [colour, setColour] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!Object.keys(product).length) {
      Axios.get(`${constants.BASE_API}/api/product/${routeParams.productId}`).then(res => res.data && res.data.data).then((data = {}) => {
        setProduct(data);
      }).catch(error => {
        console.error(error);
      });
    }
  }, []);

  return (
    <>
      <div className="product_content">
        <TopNav />
        <div className="product_content_details">
          <div className="product_card">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                {
                  product?.images?.map((image, i) => (
                    <div key={i} class="carousel-item active">
                      <img src={image.url} class="d-block w-100" alt="..."></img>
                    </div>
                  ))
                }
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="product_card_details_overview">
            <div className="product_card_details">
              <div className="product_card_details_div1">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
              </div>

              <h5>Details</h5>
              <p>{product.description}</p>

              <div className="product_line">
              </div>
              <div className="product_size">
                <ul>
                  {
                    product?.sizes?.map((size, i) => (
                      <li key={i} onClick={() => { setSize(size) }} className="capitalize-text">{size}</li>
                    ))
                  }
                </ul>
              </div>

              <div className="product_line">

              </div>
              <div className="product_color_palette">
                <ul>
                  {
                    product?.colours?.map((colour, i) => (
                      <li className="product_color1" onClick={() => { setColour(colour) }} style={{ background: `${colour}` }}></li>
                    ))
                  }
                </ul>
              </div>

              <div className="product_line">

              </div>
              <div className="product_quantity">
                <h3>Qty</h3>
                <i class="fas fa-plus" onClick={() => { setQuantity(quantity + 1) }}></i>
                {quantity}
                <i class="fas fa-minus" onClick={() => { setQuantity(curr => curr > 1 ? (curr - 1) : curr) }}></i>
              </div>

            </div>
            <div className="add_to_option">
              <div className="add_to_wishlist" onClick={() => { props.addToWishlist(product) }}>
                <img alt="logo" className="logo" src={require("../../assets/icons/love.svg")} />
              </div>
              <button
                className="no-border no-background add_to_cart"
                type="button"
                onClick={() => {
                  props.addToCart(
                    {
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      color: colour || product?.colours?.[0],
                      size: size,
                      image: product.images[0].url
                    },
                    quantity
                  )
                }}
              >Add to Bag</button>
            </div>
          </div>
        </div>
        <div className="product_similar_items">
          <h5>Similar items</h5>
          <div className="similar_items">
            <div className="similar_item1">
              <img src={require("../../assets/images/girl.png")} />
              <p className="p1">Cotton Turtle Neck</p>
              <p className="p2">$200</p>
              <p className="p3">Add to bag</p>
            </div>
            <div className="similar_item2">
              <img src={require("../../assets/images/girl.png")} />
              <p className="p1">Cotton Turtle Neck</p>
              <p className="p2">$200</p>
              <p className="p3">Add to bag</p>
            </div>
            <div className="similar_item3">
              <img src={require("../../assets/images/girl.png")} />
              <p className="p1">Cotton Turtle Neck</p>
              <p className="p2">$200</p>
              <p className="p3">Add to bag</p>
            </div>
            <div className="similar_item4">
              <img src={require("../../assets/images/girl.png")} />
              <p className="p1">Cotton Turtle Neck</p>
              <p className="p2">$200</p>
              <p className="p3">Add to bag</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

