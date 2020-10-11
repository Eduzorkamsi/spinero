import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import PagesPagination from "../../components/PagesPagination";
import SearchBar from "../../components/searchicon";
import TopNav from "../../components/TopNav";

import "./style.css"
import { useLocation } from "react-router-dom";
import Axios from "axios";
import constants from "../../constants";
import SuccessErrorMessages from "../../components/SuccessErrorMessages";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

const ProductSearch = (props) => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const [displayCartSuccess, shouldDisplayCartSuccess] = useState();
    const searchText = location.state?.searchText || "";

    const getCartSuccessDisplay = () => (<SuccessErrorMessages type="CART" />);

    const findProducts = (...args) => {
        args.push(searchText);
        const searchParams = args.join(" ");
        Axios.get(`${constants.BASE_API}/api/product/search/product?param=${searchParams}`).then((res) => res?.data?.data).then((data = []) => {
            setProducts(data.map(d => d?._source));
        }).catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        findProducts();
    }, [searchText]);

    return (
        <>
            <div className="product_page_search">
                <TopNav />
                <div className="product_search">
                    <div className="search_filter">
                        <Filter categorySelector="name" findProducts={findProducts} />
                    </div>
                    <div className="search_results">
                        <h3>{searchText}</h3>
                        <div className="result_display">
                            <div className="result_box1">
                                {
                                    (paginatedProducts || []).map((product, i) => (
                                        displayCartSuccess && (displayCartSuccess === product._id || displayCartSuccess === product.id) ?
                                            getCartSuccessDisplay() :
                                            <div key={i} className="result_1">
                                                <img style={{ width: "80px", height: "120px" }} src={`${product.images[0].url}`} alt={product.name} />
                                                <p>{product.name}</p>
                                                <h6>${product.price}</h6>
                                                <button
                                                    className="add-to-cart"
                                                    type="button"
                                                    onClick={() => {
                                                        props.addToCart(
                                                            {
                                                                id: product._id || product.id,
                                                                name: product.name,
                                                                price: product.price,
                                                                color: "red",
                                                                size: "M",
                                                                image: product.images[0].url
                                                            }
                                                        );
                                                        shouldDisplayCartSuccess(product._id || product.id);
                                                        setTimeout(() => {
                                                            shouldDisplayCartSuccess(undefined);
                                                        }, 1000);
                                                    }}
                                                >Add to Cart</button>
                                            </div>
                                    ))
                                }
                            </div>
                            <div className="result_next">
                                <p>Showing 1-{products.length < 10 ? products.length : "10"} of {products.length} items</p>
                                <PagesPagination products={products} setPaginatedProducts={setPaginatedProducts} />
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);