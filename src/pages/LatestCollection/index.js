import React, { useEffect, useState } from "react";
import "./style.css";
import { CollectionHeader } from "../../components/Header";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter"
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import MobileFilter from '../../components/Filter/mobilefilter';


const LatestCollection = (props) => {
  const history = useHistory();
  const { category } = useLocation().state || {};
  const [products, setProducts] = useState();
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    props.getLatestCollection(1);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <CollectionHeader title={"Latest Collection"} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-4">
            <Filter setProducts={setProducts} category={category} />
          </div>

          <div className="col-md-8 col-lg-8 col-sm-8 pt-5 mt-5">
            <p className="h2 collectionedits" style={{ fontWeight: "bold", color: "#4F4F4F", lineHeight: "59px" }}>
              Latest Collection
            </p>
            <MobileFilter setProducts={setProducts} category={category} />
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
              aenean condimentum auctor aliquet.{" "}
            </p>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
              {(products || props.latestProducts || []).map((data, index) => {
                return (
                  <div className="col mb-4" key={index} onClick={() => { }}>
                    <div className="card item_card">
                      <img src={data.images[0].url} className="card-img-top" alt="items" onClick={() => {
                        history.push(`/ProductDetails/${data._id}`, data);
                      }} />
                      <button className={`no-border no-background wishlist__button`} onClick={() => {
                        props.addToWishlist(data);
                        setWishlist(Object.assign({}, wishlist, { [data._id]: true }));
                      }}>
                        <i className={`${wishlist[data._id] ? "fas" : "far"} fa-lg fa-heart`}></i>
                      </button>
                      <div className="card-body _card-content-padding">
                        <button type="button" className="no-border no-background card-title" onClick={() => {
                          history.push(`/ProductDetails/${data._id}`, data);
                        }} >{data.name}</button>
                        <p className="card-text" style={{ fontWeight: "bold" }}>
                          $ {data.price}
                        </p>
                        <button
                          className="add-to-cart"
                          type="button"
                          onClick={() => {
                            history.push(`/ProductDetails/${data._id}`, data);
                          }}
                        >Shop this</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  ...state.product
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LatestCollection);
