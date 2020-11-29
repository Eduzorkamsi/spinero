import React, { useEffect, useState } from 'react'
import Footer from "../../components/Footer";
import { CollectionHeader } from "../../components/Header";
import Filter from "../../components/Filter"
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions";
import { connect } from 'react-redux';
import MobileFilter from '../../components/Filter/mobilefilter';

function CategoryCollections(props) {
  const urlParams = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [products, setProducts] = useState();
  const [wishlist, setWishlist] = useState({});

  const { categoryId } = urlParams.params;
  const categoryInfo = location.state;
  const categoryName = (categoryInfo.name || "").toLowerCase();

  useEffect(() => {
    props.getProductsByCategoryType(categoryId);
    setProducts();
  }, [categoryId]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <CollectionHeader title={`${categoryName}'s Collection`} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-4">
            <Filter gender={categoryName} setProducts={setProducts} categoryType={categoryId} />
          </div>

          <div className="col-md-8 col-lg-8 col-sm-8 pt-5 mt-5">
            <p className="h2 collectionedits" style={{ fontWeight: "bold", color: "#4F4F4F", lineHeight: "59px", textTransform: "capitalize" }}>
              {categoryName} Collection
          </p>
            <MobileFilter gender={categoryName} setProducts={setProducts} categoryType={categoryId} />
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Explore collections
            </p>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
              {(products || props.product.categoryTypeProducts).map((data, index) => {
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
                      <div className="card-body">
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
  )
}

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCollections);