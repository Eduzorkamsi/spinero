import React, { useEffect } from 'react'
import Footer from "../../components/Footer";
import { CollectionHeader } from "../../components/Header";
import Filter from "../../components/Filter"
import { useRouteMatch, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions";
import { connect } from 'react-redux';

function CategoryCollections(props) {
  const urlParams = useRouteMatch();
  const location = useLocation();
  const { categoryId } = urlParams.params;
  const categoryInfo = location.state;
  const categoryName = (categoryInfo.name || "").toLowerCase();

  useEffect(() => {
    props.getProductsByCategoryType(categoryId);
  }, []);

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
            <Filter></Filter>
          </div>

          <div className="col-md-8 col-lg-8 col-sm-8 pt-5 mt-5">
            <p className="h2" style={{ fontWeight: "bold", color: "#4F4F4F", lineHeight: "59px", textTransform: "capitalize" }}>
              {categoryName} Collection
          </p>
            <p style={{ color: "#333333", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales
            aenean condimentum auctor aliquet.{" "}
            </p>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
              {props.product.categoryTypeProducts.map((data, index) => {
                return (
                  <div className="col mb-4" key={index} onClick={() => { }}>
                    <div class="card" id="item_card">
                      <img src={data.images[0].url} class="card-img-top" alt="items" />
                      <div class="card-body">
                        <p className="card-title">{data.name}</p>
                        <p class="card-text" style={{ fontWeight: "bold" }}>
                          $ {data.price}
                        </p>
                        <p style={{ color: "#FF0000", textDecorationLine: "underline", fontWeight: "bold" }}>
                          Add to Bag
                        </p>
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