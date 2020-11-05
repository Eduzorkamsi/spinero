import React, { useEffect, useState } from 'react'
import Footer from "../../components/Footer";
import { CollectionHeader } from "../../components/Header";
import Filter from "../../components/Filter"
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions";
import { connect } from 'react-redux';
import SuccessErrorMessages from '../../components/SuccessErrorMessages';
import MobileFilter from '../../components/Filter/mobilefilter';

function CategoryCollections(props) {
  const urlParams = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [products, setProducts] = useState();
  const [displayCartSuccess, shouldDisplayCartSuccess] = useState();

  const { categoryId } = urlParams.params;
  const categoryInfo = location.state;
  const categoryName = (categoryInfo.name || "").toLowerCase();

  const getCartSuccessDisplay = () => (<SuccessErrorMessages type="CART" />);

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
          <MobileFilter  gender={categoryName} setProducts={setProducts} categoryType={categoryId}/>
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
            aenean condimentum auctor aliquet.{" "}
            </p>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
              {(products || props.product.categoryTypeProducts).map((data, index) => {
                return (
                  displayCartSuccess && displayCartSuccess === data._id ?
                    getCartSuccessDisplay() :
                    <div className="col mb-4" key={index} onClick={() => { }}>
                      <div className="card" id="item_card">
                        <img src={data.images[0].url} className="card-img-top" alt="items" onClick={() => {
                          history.push(`/ProductDetails/${data._id}`, data);
                        }} />
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
                              props.addToCart(
                                {
                                  id: data._id,
                                  name: data.name,
                                  price: data.price,
                                  color: "red",
                                  size: "M",
                                  image: data.images[0].url
                                }
                              );
                              shouldDisplayCartSuccess(data._id);
                              setTimeout(() => {
                                shouldDisplayCartSuccess(undefined);
                              }, 2000);
                            }}
                          >Add to Cart</button>
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