import React from "react";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import PagesPagination from "../../components/PagesPagination";
import SearchBar from "../../components/searchicon";
import TopNav from "../../components/TopNav";

import "./style.css"




const ProductSearch = () => {
    return (
        <>
            <div className="product_page_search">
                <TopNav />
                <div className="product_search">
                    <div className="search_filter">
                        <Filter />
                    </div>
                    <div className="search_results">
                        <h3>Women's Shirt</h3>
                        <div className="result_display">
                            <div className="result_box1">
                                <div className="result_1">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_2">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_3">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                            </div>
                            <div className="result_box2">
                                <div className="result_1">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_2">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_3">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                            </div>
                            <div className="result_box3">
                                <div className="result_1">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_2">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_3">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                            </div>
                            <div className="result_box4">
                                <div className="result_1">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_2">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                                <div className="result_3">
                                    <img src={require("../../assets/images/girl.png")} />
                                    <p>Cotton Turtle Neck</p>
                                    <h6>$200</h6>
                                    <h5>Add to Cart</h5>
                                </div>
                            </div>
                            <div className="result_next">
                                <p>Showing 1-20 of 60 items</p>
                                <PagesPagination />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>

    )
}

export default ProductSearch;