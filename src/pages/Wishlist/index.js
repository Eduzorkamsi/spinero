import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import "./style.css";
import image from "../../assets/images/girl.png"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/wishlist";
import { NavLink, useHistory } from "react-router-dom";

const Wishlist = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getUserWishlist();
    }, []);

    return (
        <>
            <div className="wish_section">
                <TopNav></TopNav>
                <div className="wish_section2">
                    <div className="col-sm wishlist_second_nav">
                        <h3>Wishlist</h3>
                        <div className="col-sm wishlist_continue_shopping">
                            <NavLink to="/">Continue Shopping</NavLink>
                        </div>
                    </div>
                    {
                        (props?.wishlist || []).map(product => (
                            <div key={product._id} className="wishlist_div1">
                                <img src={product.images[0].url} className="wishlist_image" alt="" onClick={() => {
                                    history.push(`/ProductDetails/${product._id}`, product);
                                }} />
                                <div className="two">
                                    <button type="button" className="no-border no-background remove-item" onClick={() => { props.removeWishlistItem(product._id) }}><i className="fas fa-times"></i></button>
                                    <button type="button" className="no-border no-background card-title" onClick={() => {
                                        history.push(`/ProductDetails/${product._id}`, product);
                                    }} ><h3>{product.name}</h3></button>
                                    <h4>${product.price}</h4>
                                    <p>{product.description}</p>
                                    <div className="color_palette">
                                        <ul>
                                            {
                                                product.colours.map((colour, i) => (
                                                    <li key={i} className="color1" style={{ background: `${colour}`, border: "1px solid" }}></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="wishlist_size">
                                        <ul>
                                            {
                                                product.sizes.map((size, i) => (
                                                    <li className="capitalize-text" key={i}>{size}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};
const mapStateToProps = state => ({
    wishlist: state?.user?.wishlist
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);