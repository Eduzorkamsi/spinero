import React from "react";
import Footer from "..//../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";




const ProductDetails = () => {
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
                <div class="carousel-item active">
                  <img src={require("../../assets/images/girl.png")} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={require("../../assets/images/girl.png")} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={require("../../assets/images/girl.png")} class="d-block w-100" alt="..."></img>
                </div>
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
                <h3>Women’s Turtle Neck</h3>
                <h4>$500</h4>
              </div>

              <h5>Details</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Egestas cras lectus magna sodales aenean condimentum auctor aliquet. </p>

              <div className="product_line">

              </div>
              <div className="product_size">
                <ul>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>XXL</li>
                </ul>
              </div>

              <div className="product_line">

              </div>
              <div className="product_color_palette">
                <ul>
                  <li className="product_color1"></li>
                  <li className="product_color2"></li>
                  <li className="product_color3"></li>
                  <li className="product_color4"></li>
                  <li className="product_color5"></li>
                  <li className="product_color6"></li>
                </ul>
              </div>

              <div className="product_line">

              </div>
              <div className="product_quantity">
                <h3>Qty</h3>
                <i class="fas fa-plus"></i>
                <i class="fas fa-minus"></i>
              </div>

            </div>
            <div className="add_to_option">
              <div className="add_to_wishlist">
                <img alt="logo" className="logo" src={require("../../assets/icons/love.svg")} />
              </div>
              <div className="add_to_cart">
                +Add to cart
                              </div>
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

export default ProductDetails;

