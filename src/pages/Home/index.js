import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions";
import { connect } from "react-redux";
import "./style.css";
import Header from "../../components/Header";
import { redirect } from "../../utils";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Link, NavLink as button, useHistory } from "react-router-dom";
import Axios from "axios";
import constants from "../../constants";

const Home = (props) => {
  const history = useHistory();
  const [wishlist, setWishlist] = useState({});
  const [categoryProducts, setCategoryProducts] = useState({});
  const [latestCollection, setLatestCollection] = useState([]);

  const getCategoryProducts = name => {
    return (categoryProducts[name.toLowerCase()] || { items: [] }).items.map(product => {
      return (
        <div className="col mb-4" key={product._id}>
          <div className="card item_card">
            <img src={product.images[0].url} className="card-img-top" alt="items" onClick={() => {
              history.push(`/ProductDetails/${product._id}`, product);
            }} />
            <button className={`no-border no-background wishlist__button`} onClick={() => {
              props.addToWishlist(product);
              setWishlist(Object.assign({}, wishlist, { [product._id]: true }));
            }}>
              <i className={`${wishlist[product._id] ? "fas" : "far"} fa-lg fa-heart`}></i>
            </button>
            <div className="card-body _card-content-padding">
              <button type="button" className="no-border no-background card-title" onClick={() => {
                history.push(`/ProductDetails/${product._id}`, product);
              }} >{product.name}</button>
              <p className="card-text" style={{ fontWeight: "bold" }}>
                $ {product.price}
              </p>
              <button
                className="add-to-cart"
                type="button"
                onClick={() => {
                  history.push(`/ProductDetails/${product._id}`, product);
                }}
              >Shop this</button>
            </div>
          </div>
        </div>
      );
    })
  };

  const getProductsByCategory = (category) => {
    return Axios.get(`${constants.BASE_API}/api/product/categoryType/${category}`).then(res => res.data && res.data.data);
  };

  const setUpCategoryProducts = () => {
    if (props.categoryTypes) {
      const tasks = props.categoryTypes.map(ct => getProductsByCategory(ct._id));

      Promise.all(tasks)
        .then(result => {
          const types = props.categoryTypes.reduce((acc, ct, i) => {
            acc[ct.name.toLowerCase()] = {
              id: ct._id,
              items: result[i].items,
              info: ct
            };
            return acc;
          }, {});
          return types;
        })
        .then(types => {
          setCategoryProducts(types);
        });
    }
  };

  const setUpLatestCollections = () => {
    if (props?.product?.latestProducts) {
      const collection = props.product.latestProducts.reduce((acc, product) => {
        if (!acc.find(p => product.categories[0].name === p.categories[0].name)) {
          acc.push(product);
        }

        return acc;
      }, []);

      setLatestCollection(collection);
    }
  }

  useEffect(() => {
    props.getCategoryTypes();
    props.getLatestCollection(1);
  }, []);

  useEffect(() => {
    setUpCategoryProducts();
  }, [props.categoryTypes]);

  useEffect(() => {
    setUpLatestCollections();
  }, [props?.product?.latestProducts]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header
            title={"Spinero Turtlenecks"}
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet maecenas at leo sit Sit on lorem if you know me"
            }
            buttonTitle={"Shop Now"}
            categoryTypes={props.categoryTypes}
            categoryProducts={categoryProducts}
          />
        </div>
      </div>
      <div className="container pt-5 mt-5 ">
        <div className="row">
          <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6 lcmarg">
            <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
              Latest Collection
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 comarg ">
            <div className="d-flex justify-content-around">
              <Link to="/collections">
                <p className="lorem_check" style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                  Check it Out
                </p>
              </Link>
            </div>
          </div>
          <p className="lorem2" style={{ color: "#333333", fontSize: "16px" }}>
            Here you find our latest collection on offer.
          </p>


        </div>
        <div className="row row-cols-1 row-cols-md-2 ">
          {latestCollection.map((product, index) => {
            return (
              <div className="col mb-4 pr-2" key={index} style={{ cursor: "pointer" }} onClick={() => history.push("/collections", { category: product.categories[0]._id })}>
                <div className="card ">
                  <img className="card-img img-responsive" src={product.images[0].url} alt="cardIamge" />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center ">
                    <h4 className="card-title text-center titlecase-text" id="_cardText">
                      {(product.categories[0].name || "").toLowerCase()}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="womenSection">
          <div className="container pt-5 pb-5 womenS">
            <div className="row">
              <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6">
                <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
                  Women
                </p>

              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6  ">
                <div className="d-flex justify-content-around">
                  <Link
                    to={{
                      pathname: `/category/${(categoryProducts["women"] || { id: "" }).id}`,
                      state: (categoryProducts["women"] || { info: {} }).info
                    }}
                    className="lorem_check loremwomen" style={{ color: "#FF0000", fontWeight: "bold", marginTop: "15px" ,}}
                  >
                    Check it out
                  </Link>
                </div>
              </div>
              <p className="lorem3" style={{ color: "#333333", fontSize: "16px" }}>
                Explore our female collections
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 pt-3 cardwomen">
              {getCategoryProducts("women")}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col pl-4 pr-4 pb-5 pt-5">
            <Card categoryProducts={categoryProducts} />
          </div>
        </div>
        <div className="menSection pt-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-6 col-sm-6 col-xs-6">
                <p className="h2" style={{ fontWeight: "bold", color: "#BA2222", lineHeight: "59px" }}>
                  Men
                </p>

              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6  ">
                <div className="d-flex justify-content-around">
                  <Link
                    to={{
                      pathname: `/category/${(categoryProducts["men"] || { id: "" }).id}`,
                      state: (categoryProducts["men"] || { info: {} }).info
                    }}
                    className="lorem_check loremmen" style={{ color: "#FF0000", fontWeight: "bold", margintTop: "15px" }}
                  >
                    Check it out
                  </Link>
                </div>
              </div>
              <p className="lorem4" style={{ color: "#333333", fontSize: "16px" }}>
                Explore our male collections.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 pt-3 cardmen">
              {getCategoryProducts("men")}
            </div>
          </div>
        </div>
      </div>
      <Footer categoryTypes={props.categoryTypes} />
    </>
  );
};

const mapStateToProps = state => ({
  ...state.home,
  product: state.product || {},
  user: state.user || {}
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
